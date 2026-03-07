import { cn } from '@/lib/utils';

export function SimpleAlert({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'inline-flex items-start gap-2 rounded-md p-2',
        'bg-blue-700/4 dark:bg-blue-700/12',
        'ring-1 ring-blue-700/12 ring-inset',
        'text-xs text-blue-800/80',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
