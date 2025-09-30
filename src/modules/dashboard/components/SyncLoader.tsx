'use client';

import { RefreshCw, Github, Download } from 'lucide-react';

interface SyncLoaderProps {
  message?: string;
  isVisible: boolean;
}

const SyncLoader = ({
  message = 'Syncing repositories from GitHub...',
  isVisible
}: SyncLoaderProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="animate-scale-in rounded-xl border border-border bg-card p-8 shadow-lg max-w-md w-full mx-4">
        {/* Icon and Animation */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary">
              <div className="absolute inset-2 flex items-center justify-center">
                <Github className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Floating download icon */}
            <div className="absolute -top-1 -right-1 animate-bounce">
              <div className="rounded-full bg-success p-1">
                <Download className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="text-center">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Syncing Repositories
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {message}
          </p>

          {/* Progress indicator */}
          <div className="relative">
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse"
                   style={{
                     background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                     animation: 'pulse 2s ease-in-out infinite'
                   }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="mt-4 space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <RefreshCw className="h-3 w-3 animate-spin" />
              <span>Fetching repository data...</span>
            </div>
            <p>This may take a few moments for accounts with many repositories.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncLoader;