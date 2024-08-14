import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import credentialProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
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
    credentialProvider()
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log({ user, account, profile });
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          console.log(user)
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              img: profile?.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
  },
});
