import { cn } from '@/lib/utils';

export function MainSectionHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header className={cn('px-6 py-4', className)} {...props}>
      {children}
    </header>
  );
}
