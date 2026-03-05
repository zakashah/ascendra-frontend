import { cn } from '@/lib/utils';

export function PageTitle({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('truncate text-2xl font-medium', className)} {...props}>
      {children}
    </div>
  );
}
