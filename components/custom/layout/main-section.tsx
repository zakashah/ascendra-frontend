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
        danger && 'bg-[var(--color-red-50)] dark:bg-[var(--color-red-1500)]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
