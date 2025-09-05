# GitHub Authentication Setup

This project now includes GitHub authentication using Auth.js (NextAuth). The authentication flow includes a callback endpoint that acts as a proxy to send user data to your backend server.

## Setup Instructions

### 1. GitHub OAuth Application

Create a GitHub OAuth application:
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: Your app name
   - **Homepage URL**: `http://localhost:3000` (for development)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Update the following variables in `.env.local`:

```env
# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your_actual_github_client_id
GITHUB_CLIENT_SECRET=your_actual_github_client_secret

# Auth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-should-be-at-least-32-characters

# Backend Server Configuration
BACKEND_SERVER_URL=http://localhost:8080
```

### 3. Backend Server

Make sure your backend server is running and has an endpoint at:
- **URL**: `POST /v1/user`
- **Expected payload**:
```json
{
  "id": "user_id_or_email",
  "name": "User Name",
  "email": "user@example.com", 
  "image": "https://avatars.githubusercontent.com/...",
  "provider": "github",
  "authenticatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Authentication Flow

1. User clicks "Sign in with GitHub" button
2. User is redirected to GitHub OAuth
3. After GitHub authorization, user is redirected to Auth.js callback
4. Auth.js processes the authentication and creates a session
5. User is redirected to `/api/auth/callback/success`
6. The success callback endpoint:
   - Gets the user session data
   - Sends user data to your backend server (`POST /v1/user`)
   - Redirects to `/dashboard` with success/error status

## Files Structure

```
src/
├── lib/auth.ts                              # Auth.js configuration
├── app/api/auth/
│   ├── [...nextauth]/route.ts               # Auth.js API routes
│   └── callback/success/route.ts            # Success callback & backend proxy
├── components/
│   ├── AuthProvider.tsx                     # Session provider wrapper
│   └── LandingPage/Navigation/GitHubAuthButton.tsx  # Updated auth button
└── app/
    ├── layout.tsx                           # Updated with AuthProvider
    └── dashboard/page.tsx                   # Post-authentication page
```

## Testing

1. Start your backend server on the configured URL
2. Run the Next.js development server: `npm run dev`
3. Navigate to the landing page
4. Click "Sign in with GitHub"
5. Complete GitHub OAuth flow
6. Verify redirection to dashboard
7. Check backend server logs for received user data

## Error Handling

The authentication flow includes graceful error handling:
- If backend server is not configured, user still reaches dashboard with warning
- If backend sync fails, user still reaches dashboard with warning
- Authentication errors redirect to home page with error message

## Security Notes

- Never commit `.env.local` to version control
- Use strong, random values for `NEXTAUTH_SECRET`
- Configure proper OAuth redirect URLs for production
- Ensure backend server validates incoming requests appropriately