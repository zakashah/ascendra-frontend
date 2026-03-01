import { cn } from '@/lib/utils';

export function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      className={cn(
        'flex flex-wrap items-center justify-between gap-5 pb-6 sm:flex-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
