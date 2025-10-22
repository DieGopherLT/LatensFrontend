// Components
export { default as DashboardNavbar } from './components/DashboardNavbar';
export { default as DashboardSidebar } from './components/DashboardSidebar';
export { default as UserMenu } from './components/UserMenu';
export { default as RepositoryCard } from './components/RepositoryCard';
export { default as RepositoryGrid } from './components/RepositoryGrid';
export { default as SyncButton } from './components/SyncButton';
export { default as SyncLoader } from './components/SyncLoader';
export { default as DashboardView } from './components/DashboardView';
export { default as RepositoriesView } from './components/RepositoriesView';
export { default as ArchivedView } from './components/ArchivedView';
export { default as RepositoryCheckbox } from './components/RepositoryCard/RepositoryCheckbox';
export { default as BulkActionBar } from './components/BulkActions/BulkActionBar';

// Constants
export {
  MAIN_NAVIGATION_ITEMS,
  SECONDARY_NAVIGATION_ITEMS,
  type NavigationItem,
} from './constants/navigation';

// Services
export {
  repositoryApi,
  repositoryKeys,
  useRepositories,
  useRepository,
  useSyncRepositories,
  usePrefetchRepository,
} from './services/repositories';

// Hooks
export { useRepositorySelection } from './hooks/useRepositorySelection';
export { useRepositoryFilters } from './hooks/useRepositoryFilters';
export { useDashboardStats } from './hooks/useDashboardStats';

// Types
export type {
  GitHubRepository,
  DefaultBranch,
  PrimaryLanguage,
} from './types/repository';