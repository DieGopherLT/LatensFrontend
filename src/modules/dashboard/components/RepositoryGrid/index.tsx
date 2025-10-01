'use client';

import Pagination from '@/modules/core/components/Pagination';
import { usePagination } from '@/modules/core/hooks/usePagination';
import { GitHubRepository } from '../../types/repository';
import RepositoryCard from '../RepositoryCard';
import EmptyRepositoryState from './EmptyRepositoryState';
import RepositoryGridSkeleton from './RepositoryGridSkeleton';

interface RepositoryGridProps {
  repositories: GitHubRepository[];
  onRepositoryClick?: (repository: GitHubRepository) => void;
  isLoading?: boolean;
}

const RepositoryGrid = ({
  repositories,
  onRepositoryClick,
  isLoading = false,
}: RepositoryGridProps) => {
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(repositories, 12);

  if (isLoading) {
    return <RepositoryGridSkeleton />;
  }

  if (repositories.length === 0) {
    return <EmptyRepositoryState />;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentItems.map((repository) => (
          <RepositoryCard
            key={repository.github_id}
            repository={repository}
            onCardClick={onRepositoryClick}
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

export default RepositoryGrid;
