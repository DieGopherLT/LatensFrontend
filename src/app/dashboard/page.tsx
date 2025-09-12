import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-primary">Dashboard - Debug Session</h1>

        <div className="bg-surface rounded-lg p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-primary">Session Information:</h2>

          <pre className="overflow-auto rounded bg-background p-4 font-mono text-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        <div className="mt-6">
          <form
            action={async () => {
              'use server';
              const { signOut } = await import('@/auth');
              await signOut({ redirectTo: '/' });
            }}
          >
            <button className="btn-secondary px-6 py-2" type="submit">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}