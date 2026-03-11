import { cn } from '@/lib/utils';

export function SectionMain({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section data-slot="section-main" className={cn('flex-1', className)} {...props}>
      {children}
    </section>
  );
}
