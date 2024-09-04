"use server";
import { auth, signIn, signOut } from "./auth";
import { Review, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
// Registration
export const handleRegister = async (credentialData) => {
  // console.log(credentialData);
  const { username, email, password } = credentialData;

  try {
    connectToDb();
    const user = await User.findOne({ email });
    if (user) {
      return { error: "user already exists" };
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const newUser = new User({ username, email, password: hashedPass });

      await newUser.save();
      // console.log("saver to db");
      return { success: true };
    }
  } catch (err) {
    // console.log(err);
    return { error: "Something went wrong" };
  }
};
//user login
export const handleLogin = async (credentialData) => {
  const { email, password } = credentialData;
  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    // console.log("\n\nFrom action catch block *=>", err, {
    //   type: typeof err,
    //   props: Object.keys(err),
    //   msg: err.message,
    //   errType: err.type,
    //   name: err.name,
    // });
    if (err.name === "CredentialsSignin") {
      return { error: "Invalid credentials" };
    }
    throw err;
  }
};

// post review
export const submitReview = async (data) => {
  const session = await auth();
  // console.log(session);
  await connectToDb();

  try {
    const { rating, review, posterUrl, movieName } = data;
    const userId = session?.user?.id;
    // console.log("user session ===.> ", session);
    const newReview = new Review({
      rating,
      review,
      posterUrl,
      userId,
      movieName,
    });
    await newReview.save();
    console.log("saved review");
    return true;
  } catch (error) {
    console.error("Error submitting review:", error);
    return false;
  }
};

// update review
export const updateReview = async (data, id) => {
  // const session = await auth();
  // console.log(session);
  await connectToDb();

  try {
    const { rating, review, posterUrl } = data;
    let newDoc = {};
    for (const key in data) {
      if (!data[key].length > 0) continue;
      newDoc[key] = data[key];
    }
    // console.log("from updateReview id: ", id);
    // console.log("from updateReview newDoc: ", newDoc);
    const updateDoc = await Review.updateOne({ _id: id }, { $set: newDoc });
    console.log(updateDoc);
    if (!updateDoc.modifiedCount > 0) {
      return false;
    }
    return true;

    // console.log("saved review");
  } catch (error) {
    console.error("Error submitting review:", error);
    return false;
  }
};
