import NextAuth, { type NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'read:user user:email repo',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Store the GitHub access token in the JWT
      if (account && account.provider === 'github' && profile && account.access_token) {
        token.accessToken = account.access_token;
        token.githubId = profile.id || undefined;
        token.username = profile.login || undefined;
        token.avatarUrl = profile.avatar_url || undefined;

        // Console log to show GitHub info including token
        console.log('GitHub OAuth Info:', {
          githubId: profile.id,
          username: profile.login,
          email: profile.email,
          name: profile.name,
          avatarUrl: profile.avatar_url,
          accessToken: account.access_token,
          scope: account.scope,
          tokenType: account.token_type,
        });
      }
      return token;
    },

    async session({ session, token }) {
      // Expose user data in the session
      if (token?.githubId && token?.username && token?.avatarUrl && token?.accessToken) {
        session.user.id = token.sub!;
        session.user.githubId = token.githubId;
        session.user.username = token.username;
        session.user.avatarUrl = token.avatarUrl;
        // Include the GitHub access token for API calls
        session.accessToken = token.accessToken;
      }
      return session;
    },

    async signIn({ user, account, profile }) {
      // Early return guard: ensure we have all required data for GitHub auth
      if (
        account?.provider !== 'github' ||
        !profile ||
        !process.env.BACKEND_SERVER_URL ||
        !account.access_token
      ) {
        if (!process.env.BACKEND_SERVER_URL) {
          console.error('BACKEND_SERVER_URL is required but not configured');
          return false; // Reject sign in if backend URL is missing
        }
        return true; // Allow sign in for other edge cases
      }

      // All required data is available, proceed with backend sync
      try {
        const backendUrl = process.env.BACKEND_SERVER_URL;
        const url = `${backendUrl}/api/v1/auth/sync`;
        console.log(`Syncing user data with backend at ${url}`);

        const request = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            github_id: profile.id?.toString() || '',
            username: profile.login,
            email: profile.email || user.email,
            name: profile.name,
            access_token: account.access_token,
            avatar_url: profile.avatar_url || user.image,
          }),
        });
        const response = await request.json();

        if (!request.ok) {
          console.error('Failed to sync with backend:', request.status, { response });
          // We still allow sign in even if backend sync fails
        } else {
          console.log('Successfully synced with backend');
        }
      } catch (error) {
        console.error('Error syncing with backend:', error);
        // We still allow sign in even if backend sync fails
      }

      return true; // Allow sign in
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === 'development',
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);