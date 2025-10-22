'use client';

import { FolderOpen } from 'lucide-react';

interface RepositoryOverviewCardProps {
  total: number;
}

const RepositoryOverviewCard = ({ total }: RepositoryOverviewCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 animate-sleep-cascade">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Your Repositories
          </h3>
          <p className="text-5xl font-bold text-foreground">{total}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {total === 1 ? 'repository' : 'repositories'}
          </p>
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <FolderOpen className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default RepositoryOverviewCard;
