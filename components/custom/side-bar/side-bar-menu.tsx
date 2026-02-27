import { cn } from '@/lib/utils';

export function SideBarMenu({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-open="false"
      className={cn('group flex flex-col p-0.5', className)}
      {...props}
    >
      {children}
    </div>
  );
}
