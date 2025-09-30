'use client';

import { Portal } from '@/modules/core';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React from 'react';
import { MAIN_NAVIGATION_ITEMS, SECONDARY_NAVIGATION_ITEMS } from '../../constants/navigation';
import SidebarContent from './SidebarContent';

interface DashboardSidebarProps {
  isOpen: boolean;
  isSyncing?: boolean;
  onClose: () => void;
  onSyncRepositories: () => void;
}

const DashboardSidebar = ({
  isOpen,
  isSyncing = false,
  onClose,
  onSyncRepositories,
}: DashboardSidebarProps) => {
  const pathname = usePathname();
  const [currentTheme, setCurrentTheme] = React.useState<'dawn' | 'midnight'>('dawn');

  // Initialize theme from DOM
  React.useEffect(() => {
    const htmlElement = document.documentElement;
    const theme = htmlElement.getAttribute('data-theme') as 'dawn' | 'midnight';
    setCurrentTheme(theme || 'dawn');
  }, []);

  const isActiveLink = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const handleThemeToggle = () => {
    const htmlElement = document.documentElement;
    const newTheme = currentTheme === 'midnight' ? 'dawn' : 'midnight';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <>
      {/* Mobile sidebar with Portal */}
      <Portal>
        {/* Backdrop - only visible on mobile when sidebar is open */}
        {isOpen && (
          <div
            aria-hidden="true"
            className={clsx(
              'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm',
              'lg:hidden',
              'animate-in fade-in duration-200'
            )}
            onClick={onClose}
          />
        )}

        {/* Mobile Sidebar - slides in from left, hidden on desktop */}
        <aside
          aria-label="Mobile navigation"
          className={clsx(
            'fixed top-20 left-0 z-50 h-[calc(100vh-5rem)] w-80',
            'border-r border-border bg-card shadow-xl',
            'transition-transform duration-300 ease-in-out',
            'lg:hidden',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <SidebarContent
            currentTheme={currentTheme}
            isActiveLink={isActiveLink}
            isCollapsed={false}
            isMobile={true}
            isSyncing={isSyncing}
            navigationItems={MAIN_NAVIGATION_ITEMS}
            secondaryItems={SECONDARY_NAVIGATION_ITEMS}
            onLinkClick={onClose}
            onSyncRepositories={onSyncRepositories}
            onThemeToggle={handleThemeToggle}
          />
        </aside>
      </Portal>

      {/* Desktop sidebar - hidden on mobile, visible on desktop */}
      <aside
        aria-label="Desktop navigation"
        className={clsx(
          'fixed top-20 left-0 z-30 h-[calc(100vh-5rem)]',
          'border-r border-border bg-card',
          'overflow-hidden',
          'transition-all duration-500',
          'hidden lg:block',
          isOpen ? 'w-80' : 'w-16'
        )}
      >
        <SidebarContent
          currentTheme={currentTheme}
          isActiveLink={isActiveLink}
          isCollapsed={!isOpen}
          isMobile={false}
          isSyncing={isSyncing}
          navigationItems={MAIN_NAVIGATION_ITEMS}
          secondaryItems={SECONDARY_NAVIGATION_ITEMS}
          onLinkClick={onClose}
          onSyncRepositories={onSyncRepositories}
          onThemeToggle={handleThemeToggle}
        />
      </aside>
    </>
  );
};

export default DashboardSidebar;