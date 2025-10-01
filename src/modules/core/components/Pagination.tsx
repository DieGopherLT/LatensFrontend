'use client';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const pageNumbers = useMemo((): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  }, [totalPages, currentPage]);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        aria-label="Previous page"
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-card"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pageNumbers.map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 w-9 items-center justify-center text-muted-foreground"
            >
              ...
            </span>
          );
        }

        const isCurrentPage = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            aria-current={isCurrentPage ? 'page' : undefined}
            aria-label={`Page ${pageNumber}`}
            className={clsx(
              'flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border transition-colors',
              isCurrentPage
                ? 'border-primary bg-primary/10 font-medium text-primary'
                : 'border-border bg-card text-foreground hover:bg-muted'
            )}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        aria-label="Next page"
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-card"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
