import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import credentialProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";

// login function
const login = async (credentials) => {
  const { email, password } = credentials;
  try {
    await connectToDb();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Wrong credentials");
    }

    const isPassMatched = await bcrypt.compare(password, user.password);
    // console.log({ isPassMatched });
    if (!isPassMatched) {
      throw new Error("Wrong credentials");
    }

    return user;
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
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentialProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log({ user, account, profile });
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          // console.log(user);
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              img: profile?.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          // console.log(err);
          return false;
        }
      }
      return true;
    },
  },
});
