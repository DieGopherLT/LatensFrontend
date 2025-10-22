'use client';

interface RepositoriesHeaderProps {
  count: number;
}

const RepositoriesHeader = ({ count }: RepositoriesHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-foreground">Repositories</h1>
      <span className="text-sm text-muted-foreground">
        {count} {count === 1 ? 'repository' : 'repositories'}
      </span>
    </div>
  );
};

export default RepositoriesHeader;
