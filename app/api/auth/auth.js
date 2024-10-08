import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const { handlers, session, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url;
    },
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        console.log(profile,"profileeeeeeeeeee");
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});
