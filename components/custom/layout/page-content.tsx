import { cn } from '@/lib/utils';

export function PageContent({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('border-t', className)} {...props}>
      <div className="mt-8">{children}</div>
    </div>
  );
}
