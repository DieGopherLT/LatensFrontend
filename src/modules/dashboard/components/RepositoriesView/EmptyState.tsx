'use client';

import { Archive, Search } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/modules/core';

interface EmptyStateProps {
  type: 'no-repositories' | 'no-search-results';
  onClearFilters?: () => void;
}

const EmptyState = ({ type, onClearFilters }: EmptyStateProps) => {
  if (type === 'no-repositories') {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <Archive className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">All Repositories Archived</h3>
        <p className="mb-6 max-w-md text-sm text-muted-foreground">
          All your repositories are currently archived. Visit the archived section to restore them.
        </p>
        <Link href="/dashboard/archived">
          <Button variant="primary">View Archived</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">No repositories found</h3>
      <p className="mb-6 max-w-md text-sm text-muted-foreground">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      {onClearFilters && (
        <Button variant="secondary" onClick={onClearFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
