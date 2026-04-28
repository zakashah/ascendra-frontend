'use client';

import * as React from 'react';
import { useDataTableContext } from '@/hooks/use-data-table';
import { cn } from '@/lib/utils';
import { SortIcon } from './sort-icon';

interface DataTableHeadProps {
  column: string;
  children: React.ReactNode;
  className?: string;
}

export function DataTableHead({ column, children, className }: DataTableHeadProps) {
  const { isColSortable, handleSort } = useDataTableContext();
  const sortable = isColSortable(column);

  return (
    <th
      data-slot="table-head"
      className={cn(
        'py-3 pr-5 pl-5 first:pl-6',
        sortable && 'group/sort cursor-pointer select-none',
        className
      )}
      onClick={sortable ? () => handleSort(column) : undefined}
    >
      <div className="flex items-center gap-1.5">
        {children}
        <SortIcon column={column} />
      </div>
    </th>
  );
}
