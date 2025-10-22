'use client';

import { useEffect, useMemo } from 'react';
import { useRepositoryFilters, useRepositorySelection } from '@/modules/dashboard';
import { GitHubRepository } from '../../types/repository';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoryFilters from './RepositoryFilters';
import SelectableRepositoryGrid from './SelectableRepositoryGrid';
import EmptyState from './EmptyState';
import BulkActionBar from '../BulkActions/BulkActionBar';

interface RepositoriesViewProps {
  repositories: GitHubRepository[];
  onArchiveRepositories: (ids: string[]) => Promise<void>;
}

const RepositoriesView = ({ repositories, onArchiveRepositories }: RepositoriesViewProps) => {
  const activeRepositories = useMemo(() => {
    return repositories.filter((repo) => !repo.is_hidden);
  }, [repositories]);

  const {
    filteredRepositories,
    searchTerm,
    setSearchTerm,
    sleepStateFilter,
    setSleepStateFilter,
    sortBy,
    setSortBy,
  } = useRepositoryFilters(activeRepositories);

  const {
    selectedIds,
    selectionMode,
    toggleSelection,
    clearSelection,
  } = useRepositorySelection();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectionMode) {
        clearSelection();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectionMode, clearSelection]);

  const handleArchive = async () => {
    const idsToArchive = Array.from(selectedIds);
    await onArchiveRepositories(idsToArchive);
    clearSelection();
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSleepStateFilter('all');
    setSortBy('lastUpdated');
  };

  const hasNoRepositories = activeRepositories.length === 0;
  const hasNoSearchResults = filteredRepositories.length === 0 && !hasNoRepositories;

  return (
    <div className="space-y-6">
      {/* Header */}
      <RepositoriesHeader count={activeRepositories.length} />

      {/* Filters */}
      {!hasNoRepositories && (
        <RepositoryFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sleepStateFilter={sleepStateFilter}
          onSleepStateFilterChange={setSleepStateFilter}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />
      )}

      {/* Content */}
      {hasNoRepositories ? (
        <EmptyState type="no-repositories" />
      ) : hasNoSearchResults ? (
        <EmptyState type="no-search-results" onClearFilters={handleClearFilters} />
      ) : (
        <div aria-live="polite" aria-atomic="false">
          <SelectableRepositoryGrid
            repositories={filteredRepositories}
            selectedIds={selectedIds}
            selectionMode={selectionMode}
            onToggleSelection={toggleSelection}
          />
        </div>
      )}

      {/* Bulk Actions */}
      <BulkActionBar
        selectedCount={selectedIds.size}
        onCancel={clearSelection}
        onArchive={handleArchive}
      />
    </div>
  );
};

export default RepositoriesView;
