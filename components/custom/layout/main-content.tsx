import { cn } from '@/lib/utils';

export function MainContent({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main
      className={cn('flex w-full flex-col gap-6 lg:flex-1', className)}
      {...props}
    >
      {children}
    </main>
  );
}
