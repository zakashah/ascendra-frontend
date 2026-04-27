'use client';

import { useMemo } from 'react';
import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { type ColumnDef } from '@/lib/table';
import { cn } from '@/lib/utils';
import { RxCrossCircled } from 'react-icons/rx';

interface DataFilterItemProps<T extends object> {
  columnKey: string;
  columns: ColumnDef<T>[];
  data: T[];
  value: string | null;
  onChange: (key: string, value: string) => void;
  onRemove: (key: string) => void;
}

function extractUniqueValues<T extends object>(data: T[], key: string): string[] {
  const seen = new Set<string>();
  for (const row of data) {
    const val = row[key as keyof T];
    if (val !== null && val !== undefined && val !== '') {
      seen.add(String(val));
    }
  }
  return Array.from(seen).sort();
}

export function DataFilterItem<T extends object>({
  columnKey,
  columns,
  data,
  value,
  onChange,
  onRemove,
}: DataFilterItemProps<T>) {
  const col = columns.find((c) => String(c.key) === columnKey);
  const label = col?.label ?? columnKey;

  const options = useMemo(
    () => extractUniqueValues(data, columnKey),
    [data, columnKey]
  );

  return (
    <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
      <div
        className="flex cursor-pointer items-center gap-1 px-1.5"
        onClick={() => onRemove(columnKey)}
      >
        <RxCrossCircled />
        {label}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
            <span className={cn(!value && 'text-muted-foreground')}>
              {value ?? 'Enter Value'}
            </span>
            <DropDownChevron />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start">
          {options.length === 0 ? (
            <DropdownMenuItem disabled>No values</DropdownMenuItem>
          ) : (
            options.map((opt) => (
              <DropdownMenuItem
                key={opt}
                className={cn(value === opt && 'font-medium')}
                onClick={() => onChange(columnKey, opt)}
              >
                {opt}
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
