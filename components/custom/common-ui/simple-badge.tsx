import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'h-5 rounded-sm px-2 py-0.5 text-xs font-light transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none overflow-hidden font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary/4 text-primary border border-primary/16',
        secondary:
          'bg-secondary text-secondary-foreground border border-border font-light',
        blue: 'bg-blue-50 text-blue-800/80 border border-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function SimpleBadge({
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
