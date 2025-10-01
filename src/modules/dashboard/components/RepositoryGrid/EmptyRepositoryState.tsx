const EmptyRepositoryState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 rounded-full bg-muted p-6">
        <svg
          className="h-12 w-12 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
          <path
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">
        No repositories found
      </h3>
      <p className="mb-6 max-w-md text-muted-foreground">
        It looks like you don&apos;t have any repositories yet. Sync your GitHub repositories to get started.
      </p>
      <div className="text-sm text-muted-foreground">
        <p>Click the &quot;Sync Repos&quot; button in the navigation bar to fetch your repositories from GitHub.</p>
      </div>
    </div>
  );
};

export default EmptyRepositoryState;
