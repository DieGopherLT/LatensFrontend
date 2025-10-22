'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import {
  ArchivedView,
  SyncLoader,
  useRepositories,
  useSyncRepositories,
  type GitHubRepository,
} from '@/modules/dashboard';

export default function ArchivedPage() {
  const { status } = useSession();

  // TanStack Query hooks
  const { data: repositories = [], isLoading, error } = useRepositories();
  const syncMutation = useSyncRepositories();

  // Redirect if not authenticated
  if (status === 'unauthenticated') {
    redirect('/');
  }

  const handleRepositoryClick = (repository: GitHubRepository) => {
    // TODO: Navigate to repository detail page
    console.log('Repository clicked:', repository.name);
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
        <p className="text-destructive">
          {error instanceof Error ? error.message : 'Failed to load repositories'}
        </p>
      </div>
    );
  }

  return (
    <>
      <ArchivedView repositories={repositories} onRepositoryClick={handleRepositoryClick} />

      {/* Sync Loader */}
      <SyncLoader
        isVisible={syncMutation.isPending}
        message={syncMutation.variables ? 'Syncing repositories from GitHub...' : undefined}
      />
    </>
  );
}
