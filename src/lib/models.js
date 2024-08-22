import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// Review Schema
const reviewSchema = new mongoose.Schema(
  {
    // movieId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Movie", // Reference to the Movie model
    //   required: true,
    // },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    movieName: {
      type: String, // Reference to the Movie model
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0, // Minimum rating value
      max: 10, // Maximum rating value
    },
    review: {
      type: String,
      required: true,
    },
    posterUrl: {
      type: String, // URL to the movie poster
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Review =
  mongoose.models?.Review || mongoose.model("Review", reviewSchema);
