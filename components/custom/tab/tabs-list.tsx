import { cn } from '@/lib/utils';

export function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('border-b', className)} {...props}>
      <div className="no-scrollbar relative flex gap-6 overflow-x-auto p-0.5 pb-1">
        {children}
      </div>
    </div>
  );
}
