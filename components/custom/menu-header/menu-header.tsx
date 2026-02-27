import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MenuHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      className={cn(
        'border-border/70 bg-surface-soft flex h-14 items-center justify-between border-b pr-[calc(var(--app-layout-spacing)/2)] pl-[calc(var(--app-layout-spacing)/2-12px)] text-black dark:text-white',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
