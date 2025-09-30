import {
  Archive,
  BarChart3,
  Clock,
  FolderOpen,
  Github,
  Home,
  Settings,
  Star,
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
