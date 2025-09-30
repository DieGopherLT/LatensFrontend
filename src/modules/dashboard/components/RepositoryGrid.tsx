'use client';

import { GitHubRepository } from '../types/repository';
import RepositoryCard from './RepositoryCard';

interface RepositoryGridProps {
  repositories: GitHubRepository[];
  onRepositoryClick?: (repository: GitHubRepository) => void;
  isLoading?: boolean;
}

const RepositoryGrid = ({
  repositories,
  onRepositoryClick,
  isLoading = false,
}: RepositoryGridProps) => {
  if (isLoading) {
    return <RepositoryGridSkeleton />;
  }

  if (repositories.length === 0) {
    return <EmptyRepositoryState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.github_id}
          repository={repository}
          onCardClick={onRepositoryClick}
        />
      ))}
    </div>
  );
};

const RepositoryGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-border bg-card p-6"
        >
          {/* Header skeleton */}
          <div className="mb-4">
            <div className="h-6 w-3/4 rounded bg-muted mb-2" />
            <div className="h-4 w-1/2 rounded bg-muted" />
          </div>

          {/* Description skeleton */}
          <div className="mb-4 space-y-2">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
          </div>

          {/* Topics skeleton */}
          <div className="mb-4 flex space-x-2">
            <div className="h-6 w-16 rounded-full bg-muted" />
            <div className="h-6 w-20 rounded-full bg-muted" />
            <div className="h-6 w-12 rounded-full bg-muted" />
          </div>

          {/* Language skeleton */}
          <div className="mb-4 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-4 w-16 rounded bg-muted" />
          </div>

          {/* Stats skeleton */}
          <div className="mb-4 flex items-center space-x-4">
            <div className="h-4 w-8 rounded bg-muted" />
            <div className="h-4 w-8 rounded bg-muted" />
          </div>

          {/* Footer skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-muted" />
            <div className="h-3 w-16 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
};

const EmptyRepositoryState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 rounded-full bg-muted p-6">
        <svg
          className="h-12 w-12 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
          <path
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">
        No repositories found
      </h3>
      <p className="mb-6 max-w-md text-muted-foreground">
        It looks like you don&apos;t have any repositories yet. Sync your GitHub repositories to get started.
      </p>
      <div className="text-sm text-muted-foreground">
        <p>Click the &quot;Sync Repos&quot; button in the navigation bar to fetch your repositories from GitHub.</p>
      </div>
    </div>
  );
};

export default RepositoryGrid;