import NextAuth, { type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./lib/prisma";

export const authConfig = {
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account && account.provider === "google" && profile) {
        if (profile.email_verified) {
          const existingUser = await prisma.user.findUnique({
            where: { email: profile.email as string },
          });

          if (!existingUser) {
            await prisma.user.create({
              data: {
                firstName: profile.given_name || profile.name,
                lastName: profile.family_name,
                email: profile.email as string,
                roleType: "user",
              },
            });
          }
          return true;
        }
        return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.email = dbUser.email;
          token.name = dbUser.firstName + " " + dbUser.lastName;
          token.roleType = dbUser.roleType;
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.role = token.roleType as string;

      return session;
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
