import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Nav({
  className,
  children,
  ...props
}: React.ComponentProps<'nav'>) {
  return (
    <nav className={cn('sticky top-0 z-100', className)} {...props}>
      <div className="bg-surface-soft relative text-black dark:text-white">
        <div className="bg-border/70 pointer-events-none absolute inset-x-0 bottom-0 h-px" />
        <div className="no-scrollbar overflow-x-auto">
          <div className="flex h-12 items-center gap-3 pr-[calc(var(--app-layout-spacing)/2)] pl-[calc(var(--app-layout-spacing)/2-12px)] whitespace-nowrap">
            <div className="pl-1">{children}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
