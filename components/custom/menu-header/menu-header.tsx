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
        'border-border/60 bg-muted/50 text-foreground flex h-14 items-center justify-between border-b pr-[calc(var(--app-layout-spacing)/2)] pl-[calc(var(--app-layout-spacing)/2-12px)]',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
