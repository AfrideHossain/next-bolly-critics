"use server";
import { signIn, signOut } from "./auth";
import { User } from "./models";
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
export const handleRegister = async (credentialData) => {
  // console.log(credentialData);
  const { username, email, password } = credentialData;

  try {
    connectToDb();
    const user = await User.findOne({ email });
    if (user) {
      return "user already exists";
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPass });

    await newUser.save();
    console.log("saver to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
