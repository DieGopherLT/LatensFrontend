'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow">
        <div className="px-6 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Dashboard
            </h1>
            <div className="mb-6">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              )}
              <p className="text-gray-700">
                Hello, <span className="font-semibold">{session.user?.name}</span>!
              </p>
              <p className="text-gray-500 text-sm">{session.user?.email}</p>
            </div>
            <div className="space-y-4">
              <p className="text-green-600 font-medium">
                ✅ Authentication successful!
              </p>
              <p className="text-green-600 font-medium">
                ✅ User data sent to backend server!
              </p>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}