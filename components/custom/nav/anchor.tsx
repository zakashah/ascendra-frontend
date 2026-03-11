import { cn } from '@/lib/utils';

export function Anchor({
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a data-slot="anchor"
      className={cn(
        'ml-0.5 cursor-pointer font-semibold text-[#236dd7] hover:text-[#1c5bb6] dark:text-[#3180F5] dark:hover:text-[#236dd7]',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
