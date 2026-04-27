'use client';

import { useMemo, useState } from 'react';
import { type ColumnDef, searchValue } from '@/lib/table';

export function useSearch<T extends object>(
  data: T[],
  columns?: ColumnDef<T>[],
  keys?: (keyof T)[],
) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return data;
    return data.filter((item) => {
      const searchKeys = keys ?? (Object.keys(item) as (keyof T)[]);
      return searchKeys.some((key) => {
        const type = columns?.find((c) => c.key === key)?.type ?? 'string';
        return searchValue(item[key], type).toLowerCase().includes(term);
      });
    });
  }, [data, columns, keys, searchTerm]);

  return { searchTerm, setSearchTerm, filteredData };
}
