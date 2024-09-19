import { User } from "@/lib/models";
import { NextResponse } from "next/server";

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
