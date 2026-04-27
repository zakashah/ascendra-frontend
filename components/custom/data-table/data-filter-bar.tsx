import { type ColumnDef } from '@/lib/table';
import { type FilterChip } from '@/hooks/use-filter';
import { DataFilterItem } from './data-filter-item';

interface DataFilterBarProps<T extends object> {
  filters: FilterChip[];
  columns: ColumnDef<T>[];
  data: T[];
  onChange: (key: string, value: string) => void;
  onRemove: (key: string) => void;
  onClearAll?: () => void;
}

export function DataFilterBar<T extends object>({
  filters,
  columns,
  data,
  onChange,
  onRemove,
  onClearAll,
}: DataFilterBarProps<T>) {
  if (filters.length === 0) return null;

  return (
    <div className="mt-1 -mb-2 flex flex-wrap items-center gap-2">
      {filters.map((f) => (
        <DataFilterItem
          key={f.key}
          columnKey={f.key}
          columns={columns}
          data={data}
          value={f.value}
          onChange={onChange}
          onRemove={onRemove}
        />
      ))}
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
