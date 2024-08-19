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
      // console.log("\n\n\n\nbla bla bla.^&&&&");
      return { error: "Invalid credentials" };
    }
    throw err;
  }
};
