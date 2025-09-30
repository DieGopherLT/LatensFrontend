'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Home,
  FolderOpen,
  BarChart3,
  Settings,
  Archive,
  Star,
  Clock,
  Github
} from 'lucide-react';

interface DashboardSidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose?: () => void;
}

const DashboardSidebar = ({ isOpen, isMobile, onClose }: DashboardSidebarProps) => {
  const pathname = usePathname();

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home,
      exact: true,
    },
    {
      name: 'Repositories',
      href: '/dashboard/repositories',
      icon: FolderOpen,
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: BarChart3,
    },
    {
      name: 'Starred',
      href: '/dashboard/starred',
      icon: Star,
    },
    {
      name: 'Recent',
      href: '/dashboard/recent',
      icon: Clock,
    },
    {
      name: 'Archived',
      href: '/dashboard/archived',
      icon: Archive,
    },
  ];

  const secondaryItems = [
    {
      name: 'GitHub Profile',
      href: '#',
      icon: Github,
      external: true,
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
    },
  ];

  const isActiveLink = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Mobile overlay
  if (isMobile && isOpen) {
    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Sidebar */}
        <aside className="fixed left-0 top-20 z-50 h-[calc(100vh-5rem)] w-80 bg-card border-r border-border shadow-lg animate-slide-up">
          <SidebarContent
            navigationItems={navigationItems}
            secondaryItems={secondaryItems}
            isActiveLink={isActiveLink}
            onLinkClick={handleLinkClick}
            isCollapsed={false}
          />
        </aside>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside
      className={`fixed left-0 top-20 z-30 h-[calc(100vh-5rem)] bg-card border-r border-border transition-all duration-300 ${
        isOpen ? 'w-80' : 'w-16'
      }`}
    >
      <SidebarContent
        navigationItems={navigationItems}
        secondaryItems={secondaryItems}
        isActiveLink={isActiveLink}
        onLinkClick={handleLinkClick}
        isCollapsed={!isOpen}
      />
    </aside>
  );
};

interface SidebarContentProps {
  navigationItems: Array<{
    name: string;
    href: string;
    icon: any;
    exact?: boolean;
  }>;
  secondaryItems: Array<{
    name: string;
    href: string;
    icon: any;
    external?: boolean;
  }>;
  isActiveLink: (href: string, exact?: boolean) => boolean;
  onLinkClick: () => void;
  isCollapsed: boolean;
}

const SidebarContent = ({
  navigationItems,
  secondaryItems,
  isActiveLink,
  onLinkClick,
  isCollapsed
}: SidebarContentProps) => {
  return (
    <div className="flex h-full flex-col">
      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveLink(item.href, item.exact);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onLinkClick}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="border-t border-border p-4">
        <div className="space-y-2">
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = !item.external && isActiveLink(item.href);

            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onLinkClick}
                  className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 text-muted-foreground hover:bg-muted hover:text-foreground ${
                    isCollapsed ? 'justify-center' : ''
                  }`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onLinkClick}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;