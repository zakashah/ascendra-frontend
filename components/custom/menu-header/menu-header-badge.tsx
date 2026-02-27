import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'h-5 rounded-sm px-2 py-0.5 text-xs font-light transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'bg-primary/10 text-primary hover:bg-primary/30 border border-primary/50',
        secondary:
          'bg-secondary text-secondary-foreground border border-gray-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function MenuHeaderBadge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
