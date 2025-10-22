'use client';

import { GitHubRepository } from '../../types/repository';
import RecentActivityCard from '../StatCards/RecentActivityCard';
import QuickActionsCard from '../StatCards/QuickActionsCard';
import EasyPickups from './EasyPickups';

interface DashboardStatsGridProps {
  recentRepositories: GitHubRepository[];
  easyPickupRepositories: GitHubRepository[];
  archivedCount?: number;
  onSyncClick?: () => void;
  onRepositoryClick?: (repository: GitHubRepository) => void;
}

const DashboardStatsGrid = ({
  recentRepositories,
  easyPickupRepositories,
  archivedCount,
  onSyncClick,
  onRepositoryClick,
}: DashboardStatsGridProps) => {
  return (
    <div className="space-y-6">
      {/* Triangular Layout: Fila 1 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <RecentActivityCard recentRepositories={recentRepositories} />

        {/* Quick Actions */}
        <QuickActionsCard
          archivedCount={archivedCount}
          onSyncClick={onSyncClick}
        />
      </div>

      {/* Fila 2: Easy Pickups - full width */}
      <EasyPickups
        easyPickupRepositories={easyPickupRepositories}
        onRepositoryClick={onRepositoryClick}
      />
    </div>
  );
};

export default DashboardStatsGrid;
