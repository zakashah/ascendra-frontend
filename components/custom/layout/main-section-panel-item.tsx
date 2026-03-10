import { cn } from '@/lib/utils';

export function MainSectionPanelItem({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'border-border space-y-5 border-t px-5 py-6 first:border-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
