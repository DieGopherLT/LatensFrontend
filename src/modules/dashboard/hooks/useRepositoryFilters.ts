import { useState, useMemo } from 'react';
import { GitHubRepository } from '../types/repository';

type SleepStateFilter = 'all' | 'light' | 'standard' | 'deep';
type SortOption = 'lastUpdated' | 'sleepScoreDesc' | 'sleepScoreAsc' | 'nameAsc' | 'nameDesc';

const getSleepStateFromScore = (score: number): 'light' | 'standard' | 'deep' => {
  if (score <= 30) return 'light';
  if (score <= 60) return 'standard';
  return 'deep';
};

export const useRepositoryFilters = (repositories: GitHubRepository[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sleepStateFilter, setSleepStateFilter] = useState<SleepStateFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('lastUpdated');

  const filteredRepositories = useMemo(() => {
    let result = [...repositories];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (repo) =>
          repo.name.toLowerCase().includes(term) ||
          repo.description?.toLowerCase().includes(term) ||
          repo.topics?.some((topic) => topic.toLowerCase().includes(term)) ||
          repo.primary_language?.name?.toLowerCase().includes(term)
      );
    }

    // Sleep state filter
    if (sleepStateFilter !== 'all') {
      result = result.filter(
        (repo) => getSleepStateFromScore(repo.sleep_score) === sleepStateFilter
      );
    }

    // Sort
    switch (sortBy) {
      case 'lastUpdated':
        result.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        break;
      case 'sleepScoreDesc':
        result.sort((a, b) => b.sleep_score - a.sleep_score);
        break;
      case 'sleepScoreAsc':
        result.sort((a, b) => a.sleep_score - b.sleep_score);
        break;
      case 'nameAsc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [repositories, searchTerm, sleepStateFilter, sortBy]);

  return {
    filteredRepositories,
    searchTerm,
    setSearchTerm,
    sleepStateFilter,
    setSleepStateFilter,
    sortBy,
    setSortBy,
  };
};
