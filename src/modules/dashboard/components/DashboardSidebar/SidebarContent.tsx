import clsx from 'clsx';
import { Moon, RefreshCw, Sun } from 'lucide-react';
import type { NavigationItem } from '../../constants/navigation';
import MobileActionButton from './MobileActionButton';
import SidebarButton from './SidebarButton';
import SidebarItem from './SidebarItem';


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
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.name}
              href={item.href}
              icon={item.icon}
              isActive={isActiveLink(item.href, item.exact)}
              isCollapsed={isCollapsed}
              name={item.name}
              onClick={onLinkClick}
            />
          ))}
        </div>
      </nav>
      {/* Action Buttons (Mobile only) */}
      {isMobile && (
        <div className="border-t border-border p-4">
          <div className="space-y-2">
            {/* Sync Repositories Button */}
            <MobileActionButton disabled={isSyncing} onClick={onSyncRepositories}>
              <RefreshCw className={clsx('h-5 w-5 flex-shrink-0', isSyncing && 'animate-spin')} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Repos'}</span>
            </MobileActionButton>

            {/* Theme Toggle Button */}
            <MobileActionButton onClick={onThemeToggle}>
              <ThemeIcon className="h-5 w-5 flex-shrink-0" />
              <span>{themeLabel}</span>
            </MobileActionButton>
          </div>
        </div>
      )}
      {/* Secondary Navigation */}
      <div className="border-t border-border p-4">
        <div className="space-y-2">
          {/* Theme Toggle for Desktop */}
          {!isMobile && (
            <SidebarButton
              icon={ThemeIcon}
              isCollapsed={isCollapsed}
              label={themeLabel}
              onClick={onThemeToggle}
            />
          )}

          {secondaryItems.map((item) => (
            <SidebarItem
              key={item.name}
              href={item.href}
              icon={item.icon}
              isActive={!item.external && isActiveLink(item.href)}
              isCollapsed={isCollapsed}
              isExternal={item.external}
              name={item.name}
              onClick={onLinkClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;