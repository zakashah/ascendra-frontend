import { cn } from '@/lib/utils';

export function MainSection({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section
      data-slot="main-section"
      className={cn('group bg-muted flex flex-col rounded-xl py-1', className)}
      {...props}
    >
      {children}
    </section>
  );
}
