import {
  Archive,
  FolderOpen,
  Github,
  Home,
  Settings,
  type LucideIcon,
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  exact?: boolean;
  external?: boolean;
}

export const MAIN_NAVIGATION_ITEMS: NavigationItem[] = [
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
    name: 'Archived',
    href: '/dashboard/archived',
    icon: Archive,
  },
];

export const SECONDARY_NAVIGATION_ITEMS: NavigationItem[] = [
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
