import { LuArrowDown, LuArrowUp } from 'react-icons/lu';
import type { SortConfig } from '@/lib/table';

interface SortIconProps<T> {
  column: keyof T;
  sortConfig: SortConfig<T> | null;
  sortable?: boolean;
}

export function SortIcon<T>({
  column,
  sortConfig,
  sortable = true,
}: SortIconProps<T>) {
  if (!sortable) return null;

  const isActive = sortConfig?.key === column;

  if (isActive && sortConfig!.direction === 'asc')
    return <LuArrowUp className="size-3 shrink-0" />;
  if (isActive && sortConfig!.direction === 'desc')
    return <LuArrowDown className="size-3 shrink-0" />;

  return (
    <LuArrowUp className="text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity group-hover/sort:opacity-100" />
  );
}
