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
    async jwt({ token, account, profile, user }) {
      // Store user info and backend token in the JWT
      if (account && account.provider === 'github' && profile) {
        token.githubId = profile.id || undefined;
        token.username = profile.login || undefined;
        token.avatarUrl = profile.avatar_url || undefined;

        // Store backend token from signIn callback
        if (user && 'backendToken' in user) {
          token.backendToken = user.backendToken as string;
        }

        // Store GitHub access token for backend authentication
        if (account.access_token) {
          token.githubAccessToken = account.access_token;
        }

        // Console log to show GitHub info (no sensitive data)
        console.log('GitHub OAuth Info:', {
          githubId: profile.id,
          username: profile.login,
          email: profile.email,
          name: profile.name,
          avatarUrl: profile.avatar_url,
          hasBackendToken: !!(user && 'backendToken' in user),
        });
      }
      return token;
    },

    async session({ session, token }) {
      // Expose user data and backend token in the session
      if (token?.githubId && token?.username && token?.avatarUrl) {
        session.user.id = token.sub!;
        session.user.githubId = token.githubId;
        session.user.username = token.username;
        session.user.avatarUrl = token.avatarUrl;

        // Include backend token for API calls
        if (token.backendToken) {
          session.backendToken = token.backendToken;
        }
      }
      return session;
    },

    async signIn({ user, account, profile }) {
      // Early return guard: ensure we have all required data for GitHub auth
      if (account?.provider !== 'github' || !profile || !process.env.BACKEND_SERVER_URL) {
        if (!process.env.BACKEND_SERVER_URL) {
          console.error('BACKEND_SERVER_URL is required but not configured');
          return false; // Reject sign in if backend URL is missing
        }
        return true; // Allow sign in for other edge cases
      }

      // All required data is available, proceed with backend authentication
      try {
        const backendUrl = process.env.BACKEND_SERVER_URL;
        const url = `${backendUrl}/api/v1/auth/login`;

        console.log(`Access token received from GitHub: ${account.access_token ? 'Yes' : 'No'}`);
        console.log({ access_token: account.access_token });

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
          console.error('Failed to authenticate with backend:', request.status, { response });
          return false; // Reject sign in if backend authentication fails
        }

        // Store the backend token in the user object so it can be captured by JWT callback
        if (response.token) {
          user.backendToken = response.token;
          console.log('Successfully authenticated with backend');
        } else {
          console.warn('Backend authentication succeeded but no token received');
          return false;
        }
      } catch (error) {
        console.error('Error authenticating with backend:', error);
        return false; // Reject sign in if backend authentication fails
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