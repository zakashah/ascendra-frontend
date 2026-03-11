import { cn } from '@/lib/utils';

export function PageBarContent({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-bar-content"
      className={cn(
        'order-1 flex flex-wrap items-center gap-2 sm:order-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
