import { useDataTableContext } from '@/hooks/use-data-table';
import { DataFilterItem } from './data-filter-item';

export function DataFilterBar() {
  const { filters, columns, getOptionsFor, setFilterValue, removeFilter, clearFilters } =
    useDataTableContext();

  if (filters.length === 0) return null;

  return (
    <div className="mt-1 -mb-2 flex flex-wrap items-center gap-2">
      {filters.map((f) => {
        const col = columns.find((c) => String(c.key) === f.key);
        return (
          <DataFilterItem
            key={f.key}
            columnKey={f.key}
            label={col?.label ?? f.key}
            options={getOptionsFor(f.key)}
            value={f.value}
            displayValue={col?.displayValue}
            onChange={setFilterValue}
            onRemove={removeFilter}
          />
        );
      })}
      <span className="text-muted-foreground cursor-pointer text-xs" onClick={clearFilters}>
        Clear filters
      </span>
    </div>
  );
}
