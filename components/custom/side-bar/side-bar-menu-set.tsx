import { cn } from '@/lib/utils';

export function SideBarMenuSet({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}
