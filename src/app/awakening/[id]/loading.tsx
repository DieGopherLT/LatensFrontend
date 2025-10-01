const AwakeningLoading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-muted-foreground">
          Preparing awakening experience...
        </p>
      </div>
    </div>
  );
};

export default AwakeningLoading;
