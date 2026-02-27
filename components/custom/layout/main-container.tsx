import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MainContainer({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main
      className={cn('app-container mt-8 pb-12 lg:mt-10 lg:pb-16', className)}
      {...props}
    >
      <div className="flex flex-col gap-10 lg:flex-row">{children}</div>
    </main>
  );
}
