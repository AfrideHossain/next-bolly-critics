import { Review } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { uid } = params;
  //   console.log("\nUID parameter ==> ", uid);
  try {
    // connect to database
    await connectToDb();
    const { searchParams } = new URL(request.url);

    //   extract limit and skip params form url
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = parseInt(searchParams.get("skip")) || 0;

    // get user data from database where userId is uid
    const reviews = await Review.find({ userId: uid })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    return NextResponse.json({ success: true, reviews });
    console.log("reviews ==> ", reviews);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
