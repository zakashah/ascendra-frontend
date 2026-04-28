'use client';

import { useDataTableContext } from '@/hooks/use-data-table';
import { LuLoader } from 'react-icons/lu';
import { TableEmptyBody } from './table-empty-body';

export function TableLoadingBody() {
  const { isLoading } = useDataTableContext();

  if (!isLoading) return null;

  return (
    <TableEmptyBody
      icon={<LuLoader className="animate-spin" strokeWidth={2} />}
      title="Loading ..."
      description="Please wait while data is being fetched."
    />
  );
}
