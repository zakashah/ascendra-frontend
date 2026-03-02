import { cn } from '@/lib/utils';

export function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('relative border-b', className)} {...props}>
      <div className="flex gap-6 py-1">{children}</div>
    </div>
  );
}
