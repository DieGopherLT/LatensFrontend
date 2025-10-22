'use client';

import Pagination from '@/modules/core/components/Pagination';
import { usePagination } from '@/modules/core/hooks/usePagination';
import { GitHubRepository } from '../../types/repository';
import RepositoryCard from '../RepositoryCard';

interface SelectableRepositoryGridProps {
  repositories: GitHubRepository[];
  selectedIds: Set<string>;
  selectionMode: boolean;
  onToggleSelection: (id: string) => void;
  onRepositoryClick?: (repository: GitHubRepository) => void;
  isArchived?: boolean;
}

const SelectableRepositoryGrid = ({
  repositories,
  selectedIds,
  selectionMode,
  onToggleSelection,
  onRepositoryClick,
  isArchived = false,
}: SelectableRepositoryGridProps) => {
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(repositories, 12);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentItems.map((repository) => (
          <RepositoryCard
            key={repository.github_id}
            repository={repository}
            isSelected={selectedIds.has(repository.github_id)}
            selectionMode={selectionMode}
            onCheckboxChange={(checked) => {
              onToggleSelection(repository.github_id);
            }}
            onCardClick={onRepositoryClick}
            isArchived={isArchived}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-start">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </div>
      )}
    </>
  );
};

export default SelectableRepositoryGrid;
