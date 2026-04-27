import { type FilterChip } from '@/hooks/use-filter';
import { type ColumnDef } from '@/lib/table';
import { DataFilterItem } from './data-filter-item';

interface DataFilterBarProps<T extends object> {
  filters: FilterChip[];
  columns: ColumnDef<T>[];
  getOptionsFor: (key: string) => string[];
  onChange: (key: string, value: string) => void;
  onRemove: (key: string) => void;
  onClearAll?: () => void;
}

export function DataFilterBar<T extends object>({
  filters,
  columns,
  getOptionsFor,
  onChange,
  onRemove,
  onClearAll,
}: DataFilterBarProps<T>) {
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
            onChange={onChange}
            onRemove={onRemove}
          />
        );
      })}
      {onClearAll && (
        <span
          className="text-muted-foreground cursor-pointer text-xs"
          onClick={onClearAll}
        >
          Clear filters
        </span>
      )}
    </div>
  );
}
