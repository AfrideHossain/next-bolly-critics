import { User } from "@/lib/models";
import { ObjectId } from "mongodb";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// get user information
export async function GET(request, { params }) {
  const { uid } = params;
  //   console.log(uid);
  const userInfo = await User.findById(
    uid,
    {},
    {
      projection: {
        password: 0,
        updatedAt: 0,
        isAdmin: 0,
        __v: 0,
      },
    }
  );
  //   console.log(userInfo);
  if (!userInfo) {
    return NextResponse.json({ msg: "user not found" }, { status: 404 });
  }
  return NextResponse.json({ msg: "user found", userInfo }, { status: 200 });
}

/* // Update user information using put request 
export async function PUT(request, { params }) {
  const { uid } = params;
  console.log(request.body);
} */

// Update user information using put request
export async function PUT(request, { params }) {
  const { uid } = params;
  const requestData = await request.json();
  try {
    // Efficiently clean data: remove fields that are empty or undefined
    const polishedData = Object.keys(requestData).reduce((acc, key) => {
      if (requestData[key] !== undefined && requestData[key] !== "") {
        acc[key] = requestData[key];
      }
      return acc;
    }, {});

    // const user = await User.findByIdAndUpdate(uid, polishedData, {projection:{password: 0}});
    const updateUser = await User.updateOne(
      { _id: new ObjectId(uid) },
      { $set: polishedData }
    );
    if (updateUser.modifiedCount > 0) {
      revalidateTag("update-user");
      return NextResponse.json({
        success: true,
        msg: "User Updated",
      });
    }
    // console.log(updateUser);
  } catch (error) {
    return NextResponse.json({ msg: "user not found" }, { status: 404 });
  }
}
