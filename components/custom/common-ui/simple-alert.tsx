import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';

type IconType = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

/* --- Alert Container --- */
const alertVariants = cva(
  /* 'relative flex max-w-6xl items-start gap-2 rounded-md p-2 text-[0.8125rem] leading-[1.25rem] font-medium ring-1 ring-inset transition-colors', */
  'relative flex max-w-6xl items-start gap-1.5 rounded-md px-2 py-1.5 text-xs leading-[1.25rem] font-normal ring-1 ring-inset transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-[#236dd7]/4 text-[#236dd7] ring-[#236dd7]/12 dark:bg-[#236dd7]/12 dark:ring-[#236dd7]/24',
        secondary:
          'bg-[#767684]/4 text-[#5f5f6f] dark:text-[#adadb7] ring-[#767684]/12 dark:bg-[#767684]/12 dark:ring-[#767684]/24',
        destructive:
          'bg-[#e52121]/4 text-[#e52121] ring-[#e52121]/12 dark:bg-[#e52121]/12 dark:ring-[#e52121]/24',
        success:
          'bg-[#15892b]/4 text-[#15892b] ring-[#15892b]/12 dark:text-[#31c854] dark:bg-[#15892b]/12 dark:ring-[#15892b]/24',
        warning:
          'bg-[#c3540f]/4 text-[#fd7224] ring-[#c3540f]/12 dark:bg-[#c3540f]/12 dark:ring-[#c3540f]/24',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/* --- Icon Container (The Clerk Implementation) --- */
const alertIconVariants = cva(
  /* The 'after' pseudo-element with zero-width space makes this <span> 
    the exact height of one line of text. 
    The *:absolute logic then centers the icon within that line height.
  */
  'relative flex-none w-4 mt-2.5 after:invisible after:content-["\\200b"] *:absolute *:top-1/2 *:left-1/2 *:-translate-y-1/2 *:-translate-x-1/2',
  {
    variants: {
      variant: {
        default: 'text-[#236dd7]',
        secondary: 'text-[#5f5f6f] dark:text-[#adadb7]',
        destructive: 'text-[#e52121]',
        success: 'text-[#15892b] dark:text-[#31c854]',
        warning: 'text-[#fd7224]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SimpleAlertProps
  extends React.ComponentProps<'div'>, VariantProps<typeof alertVariants> {}

export function SimpleAlert({
  className,
  variant,
  icon: Icon = InfoIcon,
  children,
  ...props
}: SimpleAlertProps & { icon?: IconType }) {
  return (
    <div
      data-slot="simple-alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <span className={cn(alertIconVariants({ variant }))}>
        <Icon className="size-3" strokeWidth={2.5} />
      </span>
      {children}
    </div>
  );
}

export interface AlertIconProps
  extends
    React.ComponentProps<'span'>,
    VariantProps<typeof alertIconVariants> {}

export function AlertIcon({
  className,
  variant,
  children,
  ...props
}: AlertIconProps) {
  return (
    <span className={cn(alertIconVariants({ variant }), className)} {...props}>
      {/* This will wrap whatever icon you pass (Lucide, SVG, etc.) 
        and apply the absolute centering logic.
      */}
      {children}
    </span>
  );
}
