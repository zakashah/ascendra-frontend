import { cn } from '@/lib/utils';

export function PageHeaderAction({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('w-full sm:w-fit', className)} {...props}>
      {children}
    </div>
  );
}
