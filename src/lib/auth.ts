import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow all sign-ins - additional validation can be added here if needed
      return true;
    },
    async session({ session, token }) {
      // Add any additional user data to the session if needed
      return session;
    },
  },
  pages: {
    error: "/auth/error", // Error page (optional)
  },
});