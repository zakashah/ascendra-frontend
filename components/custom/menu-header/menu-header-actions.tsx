import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MenuHeaderActions({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  );
}
