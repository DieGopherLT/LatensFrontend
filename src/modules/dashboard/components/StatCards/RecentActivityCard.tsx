'use client';

import { formatDistanceToNow } from 'date-fns';
import clsx from 'clsx';
import Link from 'next/link';

import { GitHubRepository } from '../../types/repository';

interface RecentActivityCardProps {
  recentRepositories: GitHubRepository[];
}

const formatDate = (dateString: string) => {
  try {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  } catch {
    return 'Unknown';
  }
};

const getSleepBadge = (score: number) => {
  if (score <= 30) {
    return {
      label: 'Light',
      className: 'bg-sleep-light/10 text-sleep-light',
      icon: '☀️',
    };
  }
  if (score <= 60) {
    return {
      label: 'Standard',
      className: 'bg-sleep-standard/10 text-sleep-standard',
      icon: '🌙',
    };
  }
  return {
    label: 'Deep',
    className: 'bg-sleep-deep/10 text-sleep-deep',
    icon: '🛏️',
  };
};

const RecentActivityCard = ({ recentRepositories }: RecentActivityCardProps) => {
  if (recentRepositories.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-6 animate-sleep-cascade stagger-200">
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          Recent Activity
        </h3>
        <p className="text-muted-foreground">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6 animate-sleep-cascade stagger-200">
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        Recent Activity
      </h3>

      {/* Repository list */}
      <div className="space-y-3">
        {recentRepositories.map((repository, index) => {
          const badge = getSleepBadge(repository.sleep_score);
          const isLast = index === recentRepositories.length - 1;

          return (
            <div
              key={repository.github_id}
              className={clsx(
                'pb-3',
                !isLast && 'border-b border-border'
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {repository.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(repository.updated_at)}
                  </p>
                </div>
                <div className={clsx('flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium', badge.className)}>
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer link */}
      <div className="mt-4 border-t border-border pt-4">
        <Link
          href="/dashboard/repositories"
          className="flex items-center justify-center text-sm font-medium text-primary hover:underline"
        >
          View all repositories →
        </Link>
      </div>
    </div>
  );
};

export default RecentActivityCard;
