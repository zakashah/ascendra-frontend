'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function DataTableWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="table-container"
      data-table-container
      className={cn('bg-muted flex flex-col rounded-xl py-1', className)}
      {...props}
    />
  );
}
