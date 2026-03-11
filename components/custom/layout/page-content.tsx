import { cn } from '@/lib/utils';

export function PageContent({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-content"
      className={cn('border-t', className)}
      {...props}
    >
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
}
