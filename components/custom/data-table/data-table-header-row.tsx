'use client';

import * as React from 'react';
import { useDataTableContext } from '@/hooks/use-data-table';
import { cn } from '@/lib/utils';
import { filterChildrenByColumn } from './filter-by-column';

interface DataTableHeaderRowProps extends React.ComponentProps<'tr'> {}

export function DataTableHeaderRow({ className, children, ...props }: DataTableHeaderRowProps) {
  const { columns } = useDataTableContext();

  return (
    <tr
      data-slot="table-header-row"
      className={cn('text-secondary-foreground text-left text-xs', className)}
      {...props}
    >
      {filterChildrenByColumn(columns, children)}
    </tr>
  );
}
