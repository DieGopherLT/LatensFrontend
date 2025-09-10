import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

interface GitHubProfile {
  id: string
  login: string
  email?: string
  name?: string
  avatar_url: string
}

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email repo"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Store the GitHub access token in the JWT
      if (account && account.provider === "github") {
        const githubProfile = profile as GitHubProfile | undefined
        token.accessToken = account.access_token || undefined
        token.githubId = githubProfile?.id
        token.username = githubProfile?.login
        token.avatarUrl = githubProfile?.avatar_url
        
        // Console log to show GitHub info including token
        console.log("GitHub OAuth Info:", {
          githubId: githubProfile?.id,
          username: githubProfile?.login,
          email: githubProfile?.email,
          name: githubProfile?.name,
          avatarUrl: githubProfile?.avatar_url,
          accessToken: account.access_token,
          scope: account.scope,
          tokenType: account.token_type
        })
      }
      return token
    },
    
    async session({ session, token }) {
      // Expose user data in the session
      if (token) {
        session.user.id = token.sub!
        session.user.githubId = token.githubId as string
        session.user.username = token.username as string
        session.user.avatarUrl = token.avatarUrl as string
        // Include the GitHub access token for API calls
        session.accessToken = token.accessToken as string
      }
      return session
    },
    
    async signIn({ user, account, profile }) {
      // After successful sign in, sync with backend if URL is configured
      if (account?.provider === "github" && process.env.BACKEND_SERVER_URL) {
        const githubProfile = profile as GitHubProfile | undefined
        try {
          const backendUrl = process.env.BACKEND_SERVER_URL
          console.log(`Syncing user data with backend at ${backendUrl}/auth/sync`)
          
          const response = await fetch(`${backendUrl}/auth/sync`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              github_id: githubProfile?.id,
              username: githubProfile?.login,
              email: githubProfile?.email || user.email,
              access_token: account.access_token,
              avatar_url: githubProfile?.avatar_url || user.image
            })
          })
          
          if (!response.ok) {
            console.error("Failed to sync with backend:", response.status, response.statusText)
            // We still allow sign in even if backend sync fails
          } else {
            console.log("Successfully synced with backend")
          }
        } catch (error) {
          console.error("Error syncing with backend:", error)
          // We still allow sign in even if backend sync fails
        }
      } else if (!process.env.BACKEND_SERVER_URL) {
        console.log("BACKEND_SERVER_URL not configured, skipping backend sync")
      }
      
      return true // Allow sign in
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development",
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)