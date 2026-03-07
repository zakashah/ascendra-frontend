import { cn } from '@/lib/utils';

export function PageContent({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('border-t', className)} {...props}>
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-wrap items-start gap-8">{children}</div>
      </div>
    </div>
  );
}
