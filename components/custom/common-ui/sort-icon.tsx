import { LuArrowDown, LuArrowUp, LuArrowUpDown } from 'react-icons/lu';
import type { SortConfig } from '@/lib/table';

interface SortIconProps<T> {
  column: keyof T;
  sortConfig: SortConfig<T> | null;
}

export function SortIcon<T>({ column, sortConfig }: SortIconProps<T>) {
  if (sortConfig?.key !== column)
    return <LuArrowUpDown className="text-muted-foreground size-3 shrink-0" />;
  if (sortConfig.direction === 'asc')
    return <LuArrowUp className="size-3 shrink-0" />;
  return <LuArrowDown className="size-3 shrink-0" />;
}
