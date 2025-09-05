import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    // Get the authenticated user session
    const session = await auth();
    
    if (!session || !session.user) {
      // Redirect to home page if no authentication
      return NextResponse.redirect(new URL("/?error=no-session", request.url));
    }

    // Prepare user data to send to backend
    const userData = {
      id: session.user.id || session.user.email, // Fallback to email if no id
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      // Add any additional GitHub-specific data if needed
      provider: "github",
      authenticatedAt: new Date().toISOString(),
    };

    // Send user data to backend server
    const backendUrl = process.env.BACKEND_SERVER_URL;
    
    if (!backendUrl) {
      console.error("BACKEND_SERVER_URL environment variable is not set");
      // Still redirect to dashboard even if backend sync fails
      return NextResponse.redirect(new URL("/dashboard?warning=no-backend-config", request.url));
    }

    try {
      const backendResponse = await fetch(`${backendUrl}/v1/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!backendResponse.ok) {
        console.error("Backend server responded with error:", backendResponse.status);
        // Still redirect to dashboard even if backend sync fails
        return NextResponse.redirect(new URL("/dashboard?warning=backend-sync-failed", request.url));
      }

      const backendData = await backendResponse.json();
      console.log("User data successfully sent to backend:", backendData);
      
      // Redirect to dashboard after successful authentication and backend sync
      return NextResponse.redirect(new URL("/dashboard?success=true", request.url));
      
    } catch (backendError) {
      console.error("Error communicating with backend:", backendError);
      // Still redirect to dashboard even if backend sync fails  
      return NextResponse.redirect(new URL("/dashboard?warning=backend-error", request.url));
    }

  } catch (error) {
    console.error("Authentication callback error:", error);
    return NextResponse.redirect(new URL("/?error=auth-failed", request.url));
  }
}