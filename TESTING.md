# Testing the Authentication Implementation

## Manual Testing Steps

### 1. Environment Setup
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your actual values:
GITHUB_CLIENT_ID=your_actual_github_client_id
GITHUB_CLIENT_SECRET=your_actual_github_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=a-random-secret-at-least-32-characters-long
BACKEND_SERVER_URL=http://localhost:8080
```

### 2. GitHub OAuth App Setup
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create new OAuth App with:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
3. Copy Client ID and Client Secret to `.env.local`

### 3. Backend Server Preparation
Ensure your backend server is running and has an endpoint that accepts:
```
POST /v1/user
Content-Type: application/json

{
  "id": "user_email_or_id",
  "name": "User Name",
  "email": "user@example.com",
  "image": "https://avatars.githubusercontent.com/...",
  "provider": "github",
  "authenticatedAt": "2024-01-01T00:00:00.000Z"
}
```

### 4. Testing Flow
```bash
# Start the application
npm run dev

# Navigate to http://localhost:3000
# Click "Sign in with GitHub"
# Complete GitHub OAuth flow
# Verify redirect to dashboard
# Check backend server logs for received user data
```

## API Endpoints

### Auth.js Endpoints
- `GET/POST /api/auth/[...nextauth]` - Auth.js handler
- `GET /api/auth/signin` - Sign in page
- `GET /api/auth/signout` - Sign out
- `GET /api/auth/callback/github` - GitHub OAuth callback

### Custom Endpoints  
- `GET /api/auth/callback/success` - Success proxy to backend

## Testing Success Indicators

✅ **Authentication Working:**
- Button click redirects to GitHub OAuth
- After GitHub authorization, user is redirected back
- Dashboard page shows user information
- Backend server receives POST request with user data

✅ **Error Handling Working:**
- If backend is down: Dashboard shows warning but user still signed in
- If GitHub OAuth fails: User redirected to home with error message
- If no session: Redirected to home page

## Mock Backend Server

For testing without a real backend, you can use this simple Node.js server:

```javascript
const express = require('express');
const app = express();
app.use(express.json());

app.post('/v1/user', (req, res) => {
  console.log('Received user data:', req.body);
  res.json({ success: true, message: 'User data received' });
});

app.listen(8080, () => {
  console.log('Mock backend running on http://localhost:8080');
});
```

Run with:
```bash
node mock-backend.js
```