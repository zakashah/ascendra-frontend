import * as React from 'react';
import { cn } from '@/lib/utils';
import { LucideChevronsUpDown } from 'lucide-react';
import { MdOutlineMoreHoriz } from 'react-icons/md';

export function CellActionButton({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      data-slot="menu-header-chevron"
      className={cn(
        'focus-visible:outline-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2',
        'hover:bg-background hover:border',
        'data-[state=open]:bg-background data-[state=open]:border',
        'opacity-0 group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100',
        className
      )}
      {...props}
    >
      <MdOutlineMoreHoriz className="size-3.5" />
    </button>
  );
}
