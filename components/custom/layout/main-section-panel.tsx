import { cn } from '@/lib/utils';

export function MainSectionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('', className)} {...props}>
      <div
        className={cn(
          '-m-2 mask-[linear-gradient(to_bottom,black,black_calc(100%-8px),transparent)] p-2'
        )}
      >
        <div
          className={cn(
            'bg-background mx-1 rounded-lg ring-1 ring-[#191C21]/4 dark:ring-black/20',
            'shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)]',
            'dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)]'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
