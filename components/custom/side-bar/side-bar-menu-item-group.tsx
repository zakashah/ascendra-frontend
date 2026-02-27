import { cn } from '@/lib/utils';

export function SideBarMenuItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-0.5 p-0.5', className)} {...props}>
      {children}
    </div>
  );
}
