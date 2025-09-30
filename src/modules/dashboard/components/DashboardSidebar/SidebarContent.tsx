import clsx from 'clsx';
import { Moon, RefreshCw, Sun } from 'lucide-react';
import Link from 'next/link';

import type { NavigationItem } from '../../constants/navigation';

interface SidebarContentProps {
  navigationItems: NavigationItem[];
  secondaryItems: NavigationItem[];
  currentTheme: 'dawn' | 'midnight';
  isActiveLink: (href: string, exact?: boolean) => boolean;
  isCollapsed: boolean;
  isMobile: boolean;
  isSyncing: boolean;
  onLinkClick: () => void;
  onSyncRepositories: () => void;
  onThemeToggle: () => void;
}

const SidebarContent = ({
  navigationItems,
  secondaryItems,
  currentTheme,
  isActiveLink,
  isCollapsed,
  isMobile,
  isSyncing,
  onLinkClick,
  onSyncRepositories,
  onThemeToggle,
}: SidebarContentProps) => {
  const isDawn = currentTheme === 'dawn';
  const ThemeIcon = isDawn ? Sun : Moon;
  const themeLabel = isDawn ? 'Dawn Theme' : 'Midnight Theme';

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
                className={clsx(
                  'flex items-center space-x-3 rounded-lg px-3 py-2',
                  'text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  isCollapsed && 'justify-center'
                )}
                href={item.href}
                title={isCollapsed ? item.name : undefined}
                onClick={onLinkClick}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Action Buttons (Mobile only) */}
      {isMobile && (
        <div className="border-t border-border p-4">
          <div className="space-y-2">
            {/* Sync Repositories Button */}
            <button
              className={clsx(
                'flex w-full items-center space-x-3 rounded-lg px-3 py-2',
                'text-sm font-medium transition-all duration-200',
                'text-muted-foreground hover:bg-muted hover:text-foreground',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
              disabled={isSyncing}
              onClick={onSyncRepositories}
            >
              <RefreshCw className={clsx('h-5 w-5 flex-shrink-0', isSyncing && 'animate-spin')} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Repos'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              className={clsx(
                'flex w-full items-center space-x-3 rounded-lg px-3 py-2',
                'text-sm font-medium transition-all duration-200',
                'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
              onClick={onThemeToggle}
            >
              <ThemeIcon className="h-5 w-5 flex-shrink-0" />
              <span>{themeLabel}</span>
            </button>
          </div>
        </div>
      )}

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
                  className={clsx(
                    'flex items-center space-x-3 rounded-lg px-3 py-2',
                    'text-sm font-medium transition-all duration-200',
                    'text-muted-foreground hover:bg-muted hover:text-foreground',
                    isCollapsed && 'justify-center'
                  )}
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={isCollapsed ? item.name : undefined}
                  onClick={onLinkClick}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                className={clsx(
                  'flex items-center space-x-3 rounded-lg px-3 py-2',
                  'text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  isCollapsed && 'justify-center'
                )}
                href={item.href}
                title={isCollapsed ? item.name : undefined}
                onClick={onLinkClick}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}

          {/* Theme Toggle for Desktop */}
          {!isMobile && (
            <button
              className={clsx(
                'flex w-full items-center space-x-3 rounded-lg px-3 py-2',
                'text-sm font-medium transition-all duration-200',
                'text-muted-foreground hover:bg-muted hover:text-foreground',
                isCollapsed && 'justify-center'
              )}
              title={isCollapsed ? themeLabel : undefined}
              onClick={onThemeToggle}
            >
              <ThemeIcon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>{themeLabel}</span>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;