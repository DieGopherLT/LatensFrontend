'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { DashboardNavbar, DashboardSidebar } from '@/modules/dashboard';
import { useAuthToken } from '@/modules/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { data: session, status } = useSession();
  const { isAuthenticated } = useAuthToken(); // Initialize auth token management
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);

      // Auto-collapse sidebar on mobile
      if (mobile) {
        setIsSidebarOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
    if (isMobile) {
      setIsSidebarOpen(false);
    }
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
      <DashboardSidebar isMobile={isMobile} isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content */}
      <main
        className={`pt-20 transition-all duration-300 ${
          isMobile ? 'ml-0' : isSidebarOpen ? 'ml-80' : 'ml-16'
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
