'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

import {
  RepositoryGrid,
  SyncLoader,
  useRepositories,
  useSyncRepositories,
  type GitHubRepository,
} from '@/modules/dashboard';

export default function DashboardPage() {
  const router = useRouter();
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
    router.push(`/awakening/${repository.id || repository.github_id}`);
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-1 text-muted-foreground">
              Welcome back, {session?.user?.name || session?.user?.username}
            </p>
          </div>

          {/* Repository count */}
          {repositories.length > 0 && (
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{repositories.length}</div>
              <div className="text-sm text-muted-foreground">
                {repositories.length === 1 ? 'repository' : 'repositories'}
              </div>
            </div>
          )}
        </div>

        {/* Error state */}
        {(error || syncMutation.isError) && (
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
        )}

        {/* Repository Grid */}
        <RepositoryGrid
          isLoading={isLoading}
          repositories={repositories}
          onRepositoryClick={handleRepositoryClick}
        />
      </div>

      {/* Sync Loader */}
      <SyncLoader
        isVisible={syncMutation.isPending}
        message={syncMutation.variables ? 'Syncing repositories from GitHub...' : undefined}
      />
    </>
  );
}
