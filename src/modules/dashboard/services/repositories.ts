import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { httpClient } from '@/modules/core';
import { GitHubRepository } from '../types/repository';

// API Functions (called by TanStack Query)
// Note: These functions will automatically use the Bearer token set by useAuthToken hook
export const repositoryApi = {
  // Fetch all repositories
  getAll: async (): Promise<GitHubRepository[]> => {
    const response = await httpClient.get('/api/v1/repos');
    return response.data.repos;
  },

  // Sync repositories from GitHub
  sync: async (): Promise<GitHubRepository[]> => {
    const response = await httpClient.post('/api/v1/repos/sync');
    return response.data.repos;
  },

  // Get a single repository by ID
  getById: async (id: string): Promise<GitHubRepository> => {
    const response = await httpClient.get(`/api/v1/repos/${id}`);
    return response.data;
  },
};

// Query Keys (for consistent caching)
export const repositoryKeys = {
  all: ['repositories'] as const,
  lists: () => [...repositoryKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...repositoryKeys.lists(), filters] as const,
  details: () => [...repositoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...repositoryKeys.details(), id] as const,
};

// React Query Hooks

/**
 * Hook to fetch all repositories
 */
export const useRepositories = () => {
  return useQuery({
    queryKey: repositoryKeys.lists(),
    queryFn: repositoryApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch a single repository by ID
 */
export const useRepository = (id: string) => {
  return useQuery({
    queryKey: repositoryKeys.detail(id),
    queryFn: () => repositoryApi.getById(id),
    enabled: !!id, // Only run query if ID is provided
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to sync repositories from GitHub
 */
export const useSyncRepositories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: repositoryApi.sync,
    onSuccess: (data) => {
      // Update the repositories cache with new data
      queryClient.setQueryData(repositoryKeys.lists(), data);

      // Invalidate any individual repository queries to ensure they're fresh
      queryClient.invalidateQueries({
        queryKey: repositoryKeys.details(),
      });
    },
    onError: (error) => {
      console.error('Failed to sync repositories:', error);
    },
  });
};

/**
 * Hook to prefetch a repository (useful for hover states)
 */
export const usePrefetchRepository = () => {
  const queryClient = useQueryClient();

  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: repositoryKeys.detail(id),
      queryFn: () => repositoryApi.getById(id),
      staleTime: 10 * 60 * 1000, // 10 minutes
    });
  };
};
