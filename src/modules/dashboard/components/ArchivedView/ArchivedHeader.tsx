'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';

interface ArchivedHeaderProps {
  count: number;
}

export const ArchivedHeader = ({ count }: ArchivedHeaderProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Archived Repositories</h1>
      </div>

      <div className="flex items-center gap-2 text-right">
        <div className="text-sm text-muted-foreground">
          {count} {count === 1 ? 'archived' : 'archived'}
        </div>
        <div className="relative">
          <button
            className="p-1 rounded hover:bg-muted transition-colors"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Information about archived repositories"
          >
            <Info className="h-4 w-4 text-muted-foreground" />
          </button>

          {showTooltip && (
            <div
              className="absolute right-0 top-8 w-56 p-3 bg-card border border-border rounded-lg shadow-lg z-50 text-sm text-muted-foreground"
              role="tooltip"
            >
              These repositories won't sync with GitHub updates
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
