import { cn } from '@/lib/utils';

export function PageSubTitle({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div data-slot="page-sub-title" className={cn('text-muted-foreground text-xs', className)} {...props}>
      {children}
    </div>
  );
}
