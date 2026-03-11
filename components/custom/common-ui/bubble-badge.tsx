'use client';

import { cn } from '@/lib/utils';

type BadgeProps = React.ComponentProps<'span'> & {
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'blue' | 'green' | 'red' | 'amber' | 'orange';
};

export function BubbleBadge({
  size = 'sm',
  color = 'gray',
  className,
  children,
  ...props
}: BadgeProps) {
  /* ---------------------------------------- */
  /* Size Variants                           */
  /* ---------------------------------------- */
  const sizes = {
    sm: 'p-[3px] text-[11px]',
    md: 'p-[5px] text-xs',
    lg: 'p-[8px] text-sm',
  };

  /* ---------------------------------------- */
  /* Color Variants                          */
  /* ---------------------------------------- */
  const colors = {
    gray: `
      bg-gradient-to-b from-gray-100 to-gray-200
      text-gray-700
      shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.08)]
    `,
    blue: `
      bg-gradient-to-b from-blue-400 to-blue-500
      text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.15)]
    `,
    green: `
      bg-gradient-to-b from-green-400 to-green-500
      text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.15)]
    `,
    red: `
      bg-gradient-to-b from-red-400 to-red-500
      text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.15)]
    `,
    amber: `
      bg-gradient-to-b from-amber-400 to-amber-500
      text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.15)]
    `,
    orange: `
      bg-gradient-to-b from-orange-400 to-orange-500
      text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.15)]
    `,
  };

  return (
    <span data-slot="bubble-badge"
      className={cn(
        /* ---------------------------------------- */
        /* Base Layout                              */
        /* ---------------------------------------- */
        'inline-flex items-center justify-center',
        'rounded-full font-medium whitespace-nowrap',
        'transition-all select-none',

        /* ---------------------------------------- */
        /* Size + Color                             */
        /* ---------------------------------------- */
        sizes[size],
        colors[color],

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
