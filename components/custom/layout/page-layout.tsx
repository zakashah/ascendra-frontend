import Link from 'next/link';
import { cn } from '@/lib/utils';

export function PageLayout({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      id="app-layout"
      data-sidebar="closed"
      className={cn(
        'group relative grid min-h-screen flex-1 grid-cols-1 grid-rows-[auto_auto_1fr]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
