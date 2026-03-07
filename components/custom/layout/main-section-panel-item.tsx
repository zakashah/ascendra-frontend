import { cn } from '@/lib/utils';

export function MainSectionPanelItem({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'border-ceramic-bg-separator [:where(&)]:p-[var(--card-section-py)_var(--card-section-px)]space-y-5 space-y-5 border-t border-[#ececee] px-5 py-6 first:border-none dark:border-[#232328]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
