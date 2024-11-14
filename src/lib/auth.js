import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import credentialProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

// login function
const login = async (credentials) => {
  const { email, password } = credentials;
  try {
    await connectToDb();
    const user = await User.findOne({ email });
    // console.log("from auth file inside login: ", user);
    if (!user) {
      throw new Error("Wrong credentials");
    }

    const isPassMatched = await bcrypt.compare(password, user.password);
    // console.log({ isPassMatched });
    if (!isPassMatched) {
      throw new Error("Wrong credentials");
    }
    // let nUser = {
    //   id: user?._id.toString(),
    //   username: user?.username,
    //   email: user?.email,
    //   isAdmin: user?.isAdmin,
    // };

    return {
      id: user?._id.toString(),
      username: user?.username,
      email: user?.email,
      isAdmin: user?.isAdmin,
    };
  } catch (err) {
    // console.error(err);
    throw new Error("Failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentialProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          // console.log("from authorize: ", user);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user, account, profile }) {
      // console.log({ user, account, profile });
      if (account.provider === "github") {
        connectToDb();
        try {
          const getUser = await User.findOne({ email: profile.email });
          // console.log("Inside if try => ", user);
          if (!getUser) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              img: profile?.avatar_url,
            });
            await newUser.save();
          }
          // Object.keys(user).forEach((key) => delete user[key]);
          // user = { ...getUser._doc, id: getUser._doc._id };
          // console.log("Inside if try => ", user);
        } catch (err) {
          // console.log(err);
          return false;
        }
      }
      return true;
    },
  },
});
