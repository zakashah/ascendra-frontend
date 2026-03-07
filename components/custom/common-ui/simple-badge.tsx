import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'h-4.5 px-1 py-0.5  text-[11px] tracking-[0.015em]  leading-[0.875rem] shrink-0 items-center rounded-[4px] relative inline-flex  font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! justify-center w-fit whitespace-nowrap [&>svg]:pointer-events-none overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'bg-primary/4 bg-gradient-to-t from-black/.02  text-[#846bff] ring-1 ring-inset ring-primary/16 dark:bg-primary/24 cursor-pointer',
        secondary:
          'bg-secondary dark:bg-[#767684] text-secondary-foreground border border-border',
        blue: 'bg-[#236dd7]/4 bg-gradient-to-t from-black/.02 text-[#307ff6] ring-1 ring-inset ring-[#236dd7]/16  dark:bg-[#236dd7]/24',
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
  children,
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
    >
      <span className="flex items-center gap-1 px-0.5">{children}</span>
    </Comp>
  );
}
