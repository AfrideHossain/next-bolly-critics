import { Review } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    // connect to database
    await connectToDb();
    // console.log("review id ==> ", id);

    // get review data from database by id
    const review = await Review.findById(id);
    // console.log("review ==> ", review);
    return NextResponse.json({ success: true, review });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
