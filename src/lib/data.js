import { Review } from "./models";
import { connectToDb } from "./utils";
import {unstable_noStore as no_store} from 'next/cache'

export const getAllReviewsData = async (limit, skip) => {
    no_store();
  try {
    await connectToDb();
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    return reviews;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
