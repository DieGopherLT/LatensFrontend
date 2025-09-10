import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Dashboard - Debug Session</h1>
        
        <div className="bg-surface rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-primary">Session Information:</h2>
          
          <pre className="bg-background rounded p-4 overflow-auto text-sm font-mono">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        <div className="mt-6">
          <form
            action={async () => {
              "use server"
              const { signOut } = await import("@/auth")
              await signOut({ redirectTo: "/" })
            }}
          >
            <button 
              type="submit"
              className="btn-secondary px-6 py-2"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}