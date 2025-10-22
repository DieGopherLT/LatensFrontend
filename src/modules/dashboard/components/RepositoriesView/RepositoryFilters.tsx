'use client';

import { useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Search, X, ChevronDown } from 'lucide-react';
import { Input } from '@/modules/core';

type SleepStateFilter = 'all' | 'light' | 'standard' | 'deep';
type SortOption = 'lastUpdated' | 'sleepScoreDesc' | 'sleepScoreAsc' | 'nameAsc' | 'nameDesc';

interface RepositoryFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sleepStateFilter: SleepStateFilter;
  onSleepStateFilterChange: (filter: SleepStateFilter) => void;
  sortBy: SortOption;
  onSortByChange: (sort: SortOption) => void;
}

const SLEEP_STATE_CHIPS = [
  { value: 'all' as const, label: 'All', activeClass: '' },
  { value: 'light' as const, label: 'Light Sleep', activeClass: 'bg-sleep-light/10 text-sleep-light border-sleep-light' },
  { value: 'standard' as const, label: 'Standard Sleep', activeClass: 'bg-sleep-standard/10 text-sleep-standard border-sleep-standard' },
  { value: 'deep' as const, label: 'Deep Sleep', activeClass: 'bg-sleep-deep/10 text-sleep-deep border-sleep-deep' },
];

const SORT_OPTIONS = [
  { value: 'lastUpdated' as const, label: 'Last Updated' },
  { value: 'sleepScoreDesc' as const, label: 'Sleep Score (High to Low)' },
  { value: 'sleepScoreAsc' as const, label: 'Sleep Score (Low to High)' },
  { value: 'nameAsc' as const, label: 'Name (A-Z)' },
  { value: 'nameDesc' as const, label: 'Name (Z-A)' },
];

const RepositoryFilters = ({
  searchTerm,
  onSearchChange,
  sleepStateFilter,
  onSleepStateFilterChange,
  sortBy,
  onSortByChange,
}: RepositoryFiltersProps) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(debouncedSearch);
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedSearch, onSearchChange]);

  const selectedSortLabel = useMemo(() => {
    return SORT_OPTIONS.find((option) => option.value === sortBy)?.label || 'Last Updated';
  }, [sortBy]);

  const handleClearSearch = () => {
    setDebouncedSearch('');
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="w-full md:max-w-md">
        <Input
          value={debouncedSearch}
          onChange={setDebouncedSearch}
          placeholder="Search by name, description, or language..."
          type="search"
          icon={<Search className="h-4 w-4" />}
          trailingIcon={debouncedSearch ? <X className="h-4 w-4" /> : undefined}
          onTrailingIconClick={debouncedSearch ? handleClearSearch : undefined}
          aria-label="Search repositories"
          className="h-11"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Sleep State Chips */}
        <div className="flex flex-wrap gap-2">
          {SLEEP_STATE_CHIPS.map((chip) => (
            <button
              key={chip.value}
              onClick={() => onSleepStateFilterChange(chip.value)}
              className={clsx(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                sleepStateFilter === chip.value
                  ? chip.activeClass || 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground'
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            <span>Sort: {selectedSortLabel}</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {showSortDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowSortDropdown(false)}
              />
              <div className="absolute right-0 top-full z-20 mt-2 w-64 rounded-lg border border-border bg-card shadow-lg">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortByChange(option.value);
                      setShowSortDropdown(false);
                    }}
                    className={clsx(
                      'w-full px-4 py-2.5 text-left text-sm transition-colors',
                      'first:rounded-t-lg last:rounded-b-lg',
                      sortBy === option.value
                        ? 'bg-primary/10 font-medium text-primary'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositoryFilters;
