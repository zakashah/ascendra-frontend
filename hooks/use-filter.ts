'use client';

import { useMemo, useState } from 'react';

export type FilterChip = { key: string; value: string | null };

export function useFilter<T>(data: T[]) {
  const [filters, setFilters] = useState<FilterChip[]>([]);

  function addFilter(key: string) {
    setFilters((prev) => {
      if (prev.some((f) => f.key === key)) return prev;
      return [...prev, { key, value: null }];
    });
  }

  function setFilterValue(key: string, value: string) {
    setFilters((prev) =>
      prev.map((f) => (f.key === key ? { ...f, value } : f))
    );
  }

  function removeFilter(key: string) {
    setFilters((prev) => prev.filter((f) => f.key !== key));
  }

  function clearFilters() {
    setFilters([]);
  }

  const filteredData = useMemo(() => {
    const active = filters.filter((f) => f.value !== null);
    if (active.length === 0) return data;
    return data.filter((row) =>
      active.every(({ key, value }) => String(row[key as keyof T]) === value)
    );
  }, [data, filters]);

  return { filters, addFilter, setFilterValue, removeFilter, clearFilters, filteredData };
}
