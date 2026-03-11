import { cn } from '@/lib/utils';

export function PageBar({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="content-action-bar"
      className={cn(
        'mt-8 mb-4 flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
