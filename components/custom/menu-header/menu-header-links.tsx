import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MenuHeaderLinks({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'no-scrollbar flex flex-1 items-center overflow-x-auto',
        className
      )}
      {...props}
    >
      <div className="me-4 flex h-10 items-center gap-0.5 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}
