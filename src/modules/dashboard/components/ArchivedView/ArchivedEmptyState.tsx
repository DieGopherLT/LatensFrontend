'use client';

import { Inbox } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/modules/core';

export const ArchivedEmptyState = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted/50">
        <Inbox className="h-10 w-10 text-muted-foreground" />
      </div>

      <h2 className="mb-2 text-xl font-semibold text-foreground">
        No Archived Repositories
      </h2>

      <p className="mb-6 max-w-[320px] text-sm text-muted-foreground">
        Repositories you archive from the main view will appear here
      </p>

      <Link href="/dashboard/repositories">
        <Button variant="primary">Go to Repositories</Button>
      </Link>
    </div>
  );
};
