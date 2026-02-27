import { cn } from '@/lib/utils';

export function SideBarMenuSetTitle({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('text-muted-foreground mb-1 px-3.5', className)} {...props}>
      {children}
    </div>
  );
}
