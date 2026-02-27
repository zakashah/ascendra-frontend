import * as React from 'react';
import { cn } from '@/lib/utils';
import { LucideChevronsUpDown } from 'lucide-react';

export function MenuHeaderChevron({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      data-slot="menu-header-chevron"
      className={cn(
        'bg-surface-soft hover:bg-background focus-visible:outline-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm border-0 transition-colors hover:rounded-sm hover:border focus-visible:outline-2 focus-visible:-outline-offset-2',
        className
      )}
      {...props}
    >
      <LucideChevronsUpDown className="size-3.5 text-gray-500" />
    </button>
  );
}
