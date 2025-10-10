export const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Navigation Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-muted" />
              <div className="w-32 h-6 bg-muted rounded" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-20 h-4 bg-muted rounded" />
              ))}
              <div className="w-24 h-9 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-48 h-8 bg-muted rounded-full mx-auto" />
            <div className="space-y-4">
              <div className="w-3/4 h-12 bg-muted rounded mx-auto" />
              <div className="w-2/3 h-12 bg-muted rounded mx-auto" />
            </div>
            <div className="w-full max-w-2xl h-20 bg-muted rounded mx-auto" />
            <div className="flex gap-4 justify-center">
              <div className="w-40 h-12 bg-muted rounded" />
              <div className="w-40 h-12 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-6 space-y-4">
                <div className="w-12 h-12 bg-muted rounded-lg" />
                <div className="w-3/4 h-6 bg-muted rounded" />
                <div className="w-full h-4 bg-muted rounded" />
                <div className="w-full h-4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
