import { cn } from '@/lib/utils';

export function MainSectionPanelItemPartGroup({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div data-slot="main-section-panel-item-part-group" className={cn('flex flex-col space-y-2', className)} {...props}>
      {children}
    </div>
  );
}
