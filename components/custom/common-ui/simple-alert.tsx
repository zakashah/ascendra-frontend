import { cn } from '@/lib/utils';

export function SimpleAlert({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-ceramic-body-3 relative flex max-w-6xl items-start font-medium gap-2 rounded-md bg-[#236dd7]/4 p-2 text-xs text-[#236dd7] ring-1 ring-[#236dd7]/12 ring-inset dark:bg-[#236dd7]/12',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
