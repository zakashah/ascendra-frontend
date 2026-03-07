import { cn } from '@/lib/utils';

export function MainSectionPanelItemPartGroup({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col space-y-2', className)} {...props}>
      {children}
    </div>
  );
}
