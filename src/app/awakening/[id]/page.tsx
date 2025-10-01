'use client';

import { use } from 'react';
import { notFound, useRouter } from 'next/navigation';

import { AwakeningExperience } from '@/modules/awakening';
import { RepositoryWithSleepScore } from '@/modules/awakening/types/awakening';

interface AwakeningPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Repository Awakening Page
 *
 * BACKEND INTEGRATION NOTES:
 * 1. Replace mock data fetch with actual API call to get repository + sleep_score
 * 2. Use the repository service: await repositoryApi.getById(id)
 * 3. Backend should return GitHubRepository with additional sleep_score field
 * 4. Consider using Suspense with loading.tsx for better UX
 * 5. Handle error states with error.tsx boundary
 *
 * Example with real data fetching:
 * ```typescript
 * const { data: repository, isLoading, error } = useRepository(params.id);
 *
 * if (isLoading) return <AwakeningPageSkeleton />;
 * if (error || !repository) return notFound();
 * ```
 */
const AwakeningPage = ({ params }: AwakeningPageProps) => {
  const router = useRouter();
  const { id } = use(params);

  // TODO: Replace with actual API call to fetch repository with sleep_score
  // const { data: repository, isLoading, error } = useRepository(id);

  // MOCK DATA - Replace with actual backend call
  const mockRepository: RepositoryWithSleepScore = {
    id,
    github_id: id,
    name: 'example-project',
    full_name: 'username/example-project',
    description: 'A demonstration repository for the awakening experience',
    is_private: false,
    is_fork: false,
    is_disabled: false,
    is_archived: false,
    url: 'https://github.com/username/example-project',
    default_branch: {
      name: 'main',
      committed_date: new Date().toISOString(),
      author: 'Example User',
    },
    created_at: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    pushed_at: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ['typescript', 'react', 'nextjs'],
    issues_count: 5,
    pull_requests_count: 2,
    primary_language: {
      name: 'TypeScript',
      color: '#3178c6',
    },
    license: 'MIT',
    sleep_score: 65, // Deep sleep for dramatic animation
  };

  // Validate repository exists
  if (!mockRepository) {
    notFound();
  }

  return <AwakeningExperience repository={mockRepository} />;
};

export default AwakeningPage;
