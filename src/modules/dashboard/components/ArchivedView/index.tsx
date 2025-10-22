'use client';

import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

import { GitHubRepository } from '../../types/repository';
import { useRepositoryFilters, useRepositorySelection } from '@/modules/dashboard';
import { ConfirmModal, useToast } from '@/modules/core';
import { ArchivedHeader } from './ArchivedHeader';
import { ArchivedEmptyState } from './ArchivedEmptyState';
import RepositoryFilters from '../RepositoriesView/RepositoryFilters';
import SelectableRepositoryGrid from '../RepositoriesView/SelectableRepositoryGrid';
import BulkActionBar from '../BulkActions/BulkActionBar';

interface ArchivedViewProps {
  repositories: GitHubRepository[];
  onRepositoryClick?: (repository: GitHubRepository) => void;
}

const ArchivedView = ({ repositories, onRepositoryClick }: ArchivedViewProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { showToast } = useToast();

  // Filter only hidden repositories
  const archivedRepositories = repositories.filter((repo) => repo.is_hidden);

  // Use filter hook
  const {
    filteredRepositories,
    searchTerm,
    setSearchTerm,
    sleepStateFilter,
    setSleepStateFilter,
    sortBy,
    setSortBy,
  } = useRepositoryFilters(archivedRepositories);

  // Use selection hook
  const { selectedIds, selectionMode, clearSelection, toggleSelection } = useRepositorySelection();

  const handleRestoreClick = () => {
    if (selectedIds.size === 0) return;
    setShowConfirmModal(true);
  };

  const handleRestoreConfirm = async () => {
    const count = selectedIds.size;

    // TODO: Replace with actual API call when backend is ready
    // For now, just show loading toast and simulate success
    showToast({
      type: 'info',
      message: `Restoring ${count} ${count === 1 ? 'repository' : 'repositories'}...`,
      duration: 2000,
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success toast
    showToast({
      type: 'success',
      message: `${count} ${count === 1 ? 'repository' : 'repositories'} restored to active`,
      duration: 5000,
    });

    // Clear selection and close modal
    clearSelection();
    setShowConfirmModal(false);

    // In the future, trigger a refetch of repositories here
  };

  const handleCancelRestore = () => {
    setShowConfirmModal(false);
  };

  if (archivedRepositories.length === 0) {
    return <ArchivedEmptyState />;
  }

  return (
    <>
      <div className="space-y-6">
        <ArchivedHeader count={archivedRepositories.length} />

        <RepositoryFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sleepStateFilter={sleepStateFilter}
          onSleepStateFilterChange={setSleepStateFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <SelectableRepositoryGrid
          repositories={filteredRepositories}
          selectedIds={selectedIds}
          selectionMode={selectionMode}
          onToggleSelection={toggleSelection}
          onRepositoryClick={onRepositoryClick}
          isArchived
        />
      </div>

      {selectionMode && (
        <BulkActionBar
          selectedCount={selectedIds.size}
          onCancel={clearSelection}
          onAction={handleRestoreClick}
          actionText="Restore to Active"
          actionIcon={<RotateCcw className="h-4 w-4" />}
        />
      )}

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={handleCancelRestore}
        onConfirm={handleRestoreConfirm}
        title={`Restore ${selectedIds.size} ${selectedIds.size === 1 ? 'repository' : 'repositories'} to active?`}
        description="These repositories will be moved back to your active repositories list."
        confirmText="Restore"
        cancelText="Cancel"
      />
    </>
  );
};

export default ArchivedView;
