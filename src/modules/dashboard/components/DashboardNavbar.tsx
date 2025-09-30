'use client';

import { Session } from 'next-auth';
import { Menu, RefreshCw } from 'lucide-react';
import UserMenu from './UserMenu';

interface DashboardNavbarProps {
  session: Session;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onSyncRepositories: () => void;
  isSyncing?: boolean;
}

const DashboardNavbar = ({
  session,
  onToggleSidebar,
  onSyncRepositories,
  isSyncing = false,
}: DashboardNavbarProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-20 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left side - Logo and Sidebar Toggle */}
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle Button */}
          <button
            aria-label="Toggle sidebar"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={onToggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <div className="sleep-light-decoration h-4 w-4 rounded-full bg-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Latens</span>
          </div>
        </div>

        {/* Right side - Actions and User Menu */}
        <div className="flex items-center space-x-4">
          {/* Sync Repositories Button - Hidden on mobile */}
          <button
            className="btn-secondary hidden lg:flex items-center space-x-2 px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSyncing}
            onClick={onSyncRepositories}
          >
            <RefreshCw className={`h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">
              {isSyncing ? 'Syncing...' : 'Sync Repos'}
            </span>
          </button>

          {/* User Menu */}
          <UserMenu session={session} />
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;