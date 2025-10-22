'use client';

import { useRepositories } from '@/modules/dashboard';
import RepositoriesView from '@/modules/dashboard/components/RepositoriesView';

const RepositoriesPage = () => {
  const { data: repositories = [], isLoading } = useRepositories();

  const handleArchiveRepositories = async (ids: string[]) => {
    // TODO: Implement API call to archive repositories
    // For now, this is a placeholder that simulates the archive operation
    console.log('Archiving repositories:', ids);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real implementation, this would call the API:
    // await repositoryApi.archiveRepositories(ids);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading repositories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <RepositoriesView
        repositories={repositories}
        onArchiveRepositories={handleArchiveRepositories}
      />
    </div>
  );
};

export default RepositoriesPage;
