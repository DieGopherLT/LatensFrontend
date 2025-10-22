'use client';

import { useMemo } from 'react';
import { useDashboardStats } from '../../hooks/useDashboardStats';
import { GitHubRepository } from '../../types/repository';
import DashboardStatsGrid from './DashboardStatsGrid';

interface DashboardViewProps {
  repositories: GitHubRepository[];
  userName?: string;
  onRepositoryClick?: (repository: GitHubRepository) => void;
  onSyncClick?: () => void;
}

const DashboardView = ({
  repositories,
  userName,
  onRepositoryClick,
  onSyncClick,
}: DashboardViewProps) => {
  // Filter out hidden repositories
  const visibleRepositories = useMemo(
    () => repositories.filter((repo) => !repo.is_hidden),
    [repositories]
  );

  // Calculate archived count
  const archivedCount = useMemo(
    () => repositories.filter((repo) => repo.is_archived).length,
    [repositories]
  );

  // Get dashboard stats
  const stats = useDashboardStats(visibleRepositories);

  // Calculate easy pickup repositories (lowest sleep scores, easiest to resume)
  const easyPickupRepositories = useMemo(
    () => visibleRepositories.sort((a, b) => a.sleep_score - b.sleep_score).slice(0, 5),
    [visibleRepositories]
  );

  return (
    <div className="container mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        {userName && <p className="mt-1 text-muted-foreground">Welcome back, {userName}</p>}
      </div>

      {/* Stats Grid */}
      <DashboardStatsGrid
        archivedCount={archivedCount}
        easyPickupRepositories={easyPickupRepositories}
        recentRepositories={stats.recentRepositories}
        onRepositoryClick={onRepositoryClick}
        onSyncClick={onSyncClick}
      />
    </div>
  );
};

export default DashboardView;
