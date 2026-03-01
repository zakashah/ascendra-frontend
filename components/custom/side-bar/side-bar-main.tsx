import { cn } from '@/lib/utils';

export function SideBarMain({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main className={cn('my-4', className)} {...props}>
      {children}
    </main>
  );
}
