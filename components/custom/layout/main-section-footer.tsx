import { cn } from '@/lib/utils';

export function MainSectionFooter({
  withBorder = false,
  className,
  children,
  ...props
}: React.ComponentProps<'footer'> & { withBorder?: boolean }) {
  return (
    <footer
      className={cn(
        'text-muted-foreground px-5 pt-4 pb-3 text-xs transition-colors duration-300',
        'border-t border-[#ececee] dark:border-[#232328]',
        'group-[:has(>[data-section-body][data-collapsed="false"])]:border-t-0',
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
}
