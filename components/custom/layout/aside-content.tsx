import { cn } from '@/lib/utils';

export function AsideContent({
  className,
  children,
  ...props
}: React.ComponentProps<'aside'>) {
  return (
    <aside
      className={cn('flex w-full sm:w-fit lg:max-w-sm', className)}
      {...props}
    >
      {children}
    </aside>
  );
}
