import { Review, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as no_store } from "next/cache";

export const getAllReviewsByUid = async (limit, skip) => {
  no_store();
  try {
    await connectToDb();
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    console.log("reviews from server action: ", reviews);
  } catch (err) {
    console.log("from fuckin getreviewsbyuid function, bitch: ", err);
    throw new Error("Failed to fetch data");
  }
};

export const getReviewById = async (id) => {
  // "use server";
  try {
    await connectToDb();
    const review = await Review.findById(id);
    if (!review) {
      throw new Error({ success: false, message: "Review not found" });
    }
    return review;
  } catch (err) {
    console.error("Error in getReviewById:", err);
    throw new Error("Failed to fetch data");
  }
};

export const getAuthorInfoById = async (id) => {
  try {
    await connectToDb();
    const author = await User.findById(id, {
      password: 0,
      isAdmin: 0,
      updatedAt: 0,
      __v: 0,
    });
    // console.log(author);
    if (!author) {
      throw new Error({ success: false, message: "Author not found" });
    }
    return author;
  } catch (err) {
    throw new Error("Failed to author information");
  }
};
