'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface QuickActionsCardProps {
  archivedCount?: number;
  onSyncClick?: () => void;
}

const QuickActionsCard = ({
  archivedCount = 0,
  onSyncClick,
}: QuickActionsCardProps) => {
  const handleSyncClick = () => {
    if (onSyncClick) {
      onSyncClick();
    } else {
      // Dispatch sync event for global listener
      window.dispatchEvent(new Event('repositories-sync-requested'));
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 animate-sleep-cascade stagger-300">
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        Quick Actions
      </h3>

      <div className="space-y-3">
        {/* Sync Repositories */}
        <button
          className={clsx(
            'w-full rounded-lg px-4 py-3 text-left font-medium transition-all duration-200',
            'bg-primary text-white hover:scale-105 active:scale-95',
            'flex items-center gap-3'
          )}
          onClick={handleSyncClick}
        >
          <span className="text-xl">🔄</span>
          <span>Sync Repositories</span>
        </button>

        {/* View Archived */}
        <Link
          href="/dashboard/archived"
          className={clsx(
            'block w-full rounded-lg border border-border px-4 py-3 font-medium transition-all duration-200',
            'bg-transparent text-foreground hover:bg-muted',
            'flex items-center justify-between gap-3'
          )}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">📦</span>
            <span>View Archived</span>
          </div>
          {archivedCount > 0 && (
            <span className="rounded-full bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground">
              {archivedCount}
            </span>
          )}
        </Link>

        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className={clsx(
            'block w-full rounded-lg border border-border px-4 py-3 font-medium transition-all duration-200',
            'bg-transparent text-foreground hover:bg-muted',
            'flex items-center gap-3'
          )}
        >
          <span className="text-xl">⚙️</span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default QuickActionsCard;
