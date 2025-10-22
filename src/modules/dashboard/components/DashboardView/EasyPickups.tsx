'use client';

import { GitHubRepository } from '../../types/repository';
import RepositoryCard from '../RepositoryCard';

interface EasyPickupsProps {
  easyPickupRepositories: GitHubRepository[];
  onRepositoryClick?: (repository: GitHubRepository) => void;
}

const EasyPickups = ({ easyPickupRepositories, onRepositoryClick }: EasyPickupsProps) => {
  if (easyPickupRepositories.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground">Easy Pickups</h3>
        <p className="text-sm text-muted-foreground">Light sleepers ready to wake up</p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {easyPickupRepositories.map((repository) => (
          <RepositoryCard
            key={repository.github_id}
            repository={repository}
            onCardClick={onRepositoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default EasyPickups;
