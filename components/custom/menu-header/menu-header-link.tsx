import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MenuHeaderLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <div className="px-1">
      <Link
        className={cn(
          'bg-surface-soft focus-visible:outline-primary flex h-6 items-center gap-2 rounded-sm px-2 focus-visible:outline-2',
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
