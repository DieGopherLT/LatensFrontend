import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow all sign-ins - additional validation can be added here if needed
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to success callback after authentication
      return `${baseUrl}/api/auth/callback/success`;
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

export { handler as GET, handler as POST };