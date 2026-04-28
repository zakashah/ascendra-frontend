'use client';

import * as React from 'react';
import { LuInbox, LuTextSearch } from 'react-icons/lu';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import { EmptyBody } from '@/components/custom/ui/table';
import { useDataTableContext } from '@/hooks/use-data-table';

interface TableEmptyBodyProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export function TableEmptyBody({
  icon = <LuTextSearch strokeWidth={2} />,
  title = 'No results found',
  description = 'There are no items to display right now.',
}: TableEmptyBodyProps) {
  const { isLoading, pagedData } = useDataTableContext();

  if (isLoading || pagedData.length > 0) return null;

  return (
    <EmptyBody>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">{icon}</EmptyMedia>
          <EmptyTitle>{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </EmptyBody>
  );
}
