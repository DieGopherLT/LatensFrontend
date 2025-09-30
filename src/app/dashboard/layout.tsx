'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import clsx from 'clsx';

import { DashboardNavbar, DashboardSidebar } from '@/modules/dashboard';
import { useAuthToken } from '@/modules/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { data: session, status } = useSession();
  const { isAuthenticated } = useAuthToken();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Redirect if not authenticated
  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  if (status === 'unauthenticated' || !session || !isAuthenticated) {
    redirect('/');
  }

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSyncRepositories = () => {
    // Emit event to trigger sync in the page component
    window.dispatchEvent(new CustomEvent('repositories-sync-requested'));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <DashboardNavbar
        isSidebarOpen={isSidebarOpen}
        isSyncing={false}
        session={session}
        onSyncRepositories={handleSyncRepositories}
        onToggleSidebar={handleToggleSidebar}
      />

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={isSidebarOpen}
        isSyncing={false}
        onClose={handleCloseSidebar}
        onSyncRepositories={handleSyncRepositories}
      />

      {/* Main Content */}
      <main
        className={clsx(
          'pt-20 transition-all duration-300',
          // Mobile: no margin
          'ml-0',
          // Desktop: adjust margin based on sidebar state
          'lg:ml-16',
          isSidebarOpen && 'lg:ml-80'
        )}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
