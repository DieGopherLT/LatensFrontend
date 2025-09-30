import { useSession } from 'next-auth/react';

/**
 * Hook to check authentication status
 * Token is now handled automatically by the axios interceptor
 */
export const useAuthToken = () => {
  const { data: session, status } = useSession();

  return {
    token: session?.backendToken || null,
    isAuthenticated: !!session?.backendToken,
    isLoading: status === 'loading',
  };
};
