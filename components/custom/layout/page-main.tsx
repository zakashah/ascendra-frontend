import { cn } from '@/lib/utils';

export function PageMain({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main className={cn('flex flex-col gap-8', className)} {...props}>
      {children}
    </main>
  );
}
