import { cn } from '@/lib/utils';

export function MainContent({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main
      className={cn(
        'flex min-w-full flex-1 flex-col gap-6 sm:min-w-min',
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
