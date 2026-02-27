import { cn } from '@/lib/utils';

export function SideBarMain({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main className={cn('text-foreground/80 my-4', className)} {...props}>
      {children}
    </main>
  );
}
