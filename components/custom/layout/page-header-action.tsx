import { cn } from '@/lib/utils';

/* use class "w-fit" if do not require expanding */
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
