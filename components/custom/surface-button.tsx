import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const surfaceButtonVariants = cva(
  `
  /* Layout */
  group relative inline-flex items-center justify-between
  min-w-fit overflow-hidden rounded-sm

  /* Base Colors */
  bg-white text-xs text-black
  dark:bg-zinc-700 dark:text-white

  /* Layered Shadow System */
  shadow-[inset_0_1px_0px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.1)]
  dark:shadow-[inset_0_1px_0px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.1)]

  /* Gradient Overlay */
  before:absolute before:inset-0 before:size-full
  before:bg-linear-to-b before:from-transparent before:to-black/2
  before:transition-opacity
  dark:before:to-black/12

  /* Interaction */
  cursor-pointer transition-all
  hover:bg-zinc-50 hover:before:opacity-0
  dark:hover:bg-zinc-800
  active:scale-[0.98]
  disabled:cursor-not-allowed disabled:opacity-40

  /* Focus */
  focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary
  `,
  {
    variants: {
      variant: {
        default: '',
        invite: 'px-3 py-1.5 h-6',
        square: ' px-2 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function SurfaceButton({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof surfaceButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="surface-button"
      data-variant={variant}
      className={cn(surfaceButtonVariants({ variant }), className)}
      {...props}
    >
      <span className="flex w-full items-center gap-1.5">{children}</span>
    </Comp>
  );
}
