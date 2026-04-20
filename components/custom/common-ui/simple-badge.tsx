import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  /* Base styles: text-ceramic-label-4 properties */
  'relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] px-1 py-0.5 font-medium transition-all text-[0.6875rem] leading-[0.875rem] tracking-[0.015em] ring-1 ring-inset overflow-hidden',
  {
    variants: {
      variant: {
        /* Primary/Purple - keeping your existing default logic but adjusting font */
        default:
          'text-primary  bg-gradient-to-t from-black/[.02] bg-primary/4 ring-primary/16 dark:bg-primary/24',

        /* Gray (New Secondary) */
        secondary:
          'text-[#5f5f6f] dark:text-[#adadb7]  bg-gradient-to-t from-black/[.02] bg-[#767684]/4 ring-[#767684]/16 dark:bg-[#767684]/24',

        /* Orange */
        orange:
          'text-[#fd7224] bg-gradient-to-t from-black/[.02] bg-[#c3540f]/4 ring-[#c3540f]/16 dark:bg-[#c3540f]/24',

        /* Green */
        green:
          'text-[#15892b] dark:text-[#31c854]  bg-gradient-to-t from-black/[.02] bg-[#15892b]/4 ring-[#15892b]/16 dark:bg-[#15892b]/16',

        /* Blue */
        blue: 'text-[#236dd7] dark:text-[#307ff6] bg-gradient-to-t from-black/[.02]  bg-[#236dd7]/4 ring-[#236dd7]/16 dark:bg-[#236dd7]/24',

        /* Red / Destructive */
        red: 'text-[#e52121] dark:text-[#ff5c5c] bg-gradient-to-t from-black/[.02] bg-[#e52121]/4 ring-[#e52121]/16 dark:bg-[#e52121]/24',

        /* Amber / Caution */
        amber:
          'text-[#b45309] dark:text-[#f59e0b] bg-gradient-to-t from-black/[.02] bg-[#b45309]/4 ring-[#b45309]/16 dark:bg-[#b45309]/24',
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
      data-slot="simple-badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {/* Using px-0.5 inside the wrapper to mimic the Clerk gap and alignment for badges with icons or text.
       */}
      <span className="flex items-center gap-1 px-0.5">{children}</span>
    </Comp>
  );
}
