import { cn } from '@/lib/utils';

export function MainSection({
  danger = false,
  className,
  children,
  ...props
}: React.ComponentProps<'section'> & { danger?: boolean }) {
  return (
    <section
      data-slot="main-section"
      className={cn(
        'group bg-muted flex flex-col rounded-xl py-1',
        danger && 'bg-[#fef8f8] dark:bg-[#240B0A]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
