'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import {
  DashboardView,
  SyncLoader,
  useRepositories,
  useSyncRepositories,
  type GitHubRepository,
} from '@/modules/dashboard';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  // TanStack Query hooks
  const { data: repositories = [], isLoading, error, refetch } = useRepositories();
  const syncMutation = useSyncRepositories();

  // Redirect if not authenticated
  if (status === 'unauthenticated') {
    redirect('/');
  }

  // Auto-sync if no repositories found
  useEffect(() => {
    if (
      !isLoading &&
      repositories.length === 0 &&
      !error &&
      !syncMutation.isPending &&
      !syncMutation.isError
    ) {
      syncMutation.mutate();
    }
  }, [isLoading, repositories.length, error, syncMutation]);

  // Listen for sync events from layout
  useEffect(() => {
    const handleSyncRequested = () => {
      syncMutation.mutate();
    };

    window.addEventListener('repositories-sync-requested', handleSyncRequested);
    return () => {
      window.removeEventListener('repositories-sync-requested', handleSyncRequested);
    };
  }, [syncMutation]);

  const handleRepositoryClick = (repository: GitHubRepository) => {
    // TODO: Navigate to repository detail page
    console.log('Repository clicked:', repository.name);
  };

  const handleSyncClick = () => {
    syncMutation.mutate();
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  // Error state
  if (error || syncMutation.isError) {
    return (
      <>
        <div className="space-y-6">
          <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
            <p className="text-destructive">
              {error instanceof Error && error.message}
              {!(error instanceof Error) &&
                syncMutation.error instanceof Error &&
                syncMutation.error.message}
              {!(error instanceof Error) &&
                !(syncMutation.error instanceof Error) &&
                'Failed to load repositories'}
            </p>
            <button
              className="mt-2 text-sm text-destructive hover:underline disabled:opacity-50"
              disabled={isLoading || syncMutation.isPending}
              onClick={() => {
                syncMutation.reset();
                if (error) {
                  refetch();
                } else {
                  syncMutation.mutate();
                }
              }}
            >
              {isLoading || syncMutation.isPending ? 'Loading...' : 'Try again'}
            </button>
          </div>
        </div>

        <SyncLoader
          isVisible={syncMutation.isPending}
          message={syncMutation.variables ? 'Syncing repositories from GitHub...' : undefined}
        />
      </>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <DashboardView
        repositories={repositories}
        userName={session?.user?.name || session?.user?.username}
        onRepositoryClick={handleRepositoryClick}
        onSyncClick={handleSyncClick}
      />

      <SyncLoader
        isVisible={syncMutation.isPending}
        message={syncMutation.variables ? 'Syncing repositories from GitHub...' : undefined}
      />
    </>
  );
}
