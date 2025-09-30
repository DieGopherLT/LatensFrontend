'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { useState } from 'react';

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000, // 1 minute
            gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
            retry: (failureCount, error: Error) => {
              // Check if error is an Axios error with response status
              if (error instanceof AxiosError && error.response?.status) {
                const status = error.response.status;
                // Don't retry on 4xx errors except 408, 429
                if (status >= 400 && status < 500) {
                  if (status === 408 || status === 429) {
                    return failureCount < 2;
                  }
                  return false;
                }
              }
              // Retry up to 3 times for other errors
              return failureCount < 3;
            },
            refetchOnWindowFocus: false, // Disable auto-refetch on window focus
          },
          mutations: {
            retry: (failureCount, error: Error) => {
              // Check if error is an Axios error with response status
              if (error instanceof AxiosError && error.response?.status) {
                const status = error.response.status;
                // Don't retry mutations on 4xx errors
                if (status >= 400 && status < 500) {
                  return false;
                }
              }
              // Retry up to 2 times for server errors
              return failureCount < 2;
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Show devtools only in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};