import { Review } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const { searchParams } = new URL(request.url);

    //   extract limit and skip params form url
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = parseInt(searchParams.get("skip")) || 0;

    //   get data based on search params from database

    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
