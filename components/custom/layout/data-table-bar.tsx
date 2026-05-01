import { cn } from '@/lib/utils';

export function DataTableBar({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-bar"
      className={cn(
        'flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
