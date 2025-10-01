const RepositoryGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-border bg-card p-6"
        >
          {/* Header skeleton */}
          <div className="mb-4">
            <div className="h-6 w-3/4 rounded bg-muted mb-2" />
            <div className="h-4 w-1/2 rounded bg-muted" />
          </div>

          {/* Description skeleton */}
          <div className="mb-4 space-y-2">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
          </div>

          {/* Topics skeleton */}
          <div className="mb-4 flex space-x-2">
            <div className="h-6 w-16 rounded-full bg-muted" />
            <div className="h-6 w-20 rounded-full bg-muted" />
            <div className="h-6 w-12 rounded-full bg-muted" />
          </div>

          {/* Language skeleton */}
          <div className="mb-4 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-4 w-16 rounded bg-muted" />
          </div>

          {/* Stats skeleton */}
          <div className="mb-4 flex items-center space-x-4">
            <div className="h-4 w-8 rounded bg-muted" />
            <div className="h-4 w-8 rounded bg-muted" />
          </div>

          {/* Footer skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-muted" />
            <div className="h-3 w-16 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepositoryGridSkeleton;
