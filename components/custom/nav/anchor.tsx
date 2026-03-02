import { cn } from '@/lib/utils';

export function Anchor({
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      className={cn('text-primary ml-0.5 cursor-pointer', className)}
      {...props}
    >
      {children}
    </a>
  );
}
