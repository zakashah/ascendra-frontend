'use client';

import { cn } from '@/lib/utils';

export function SecondaryButton({
  className,
  children,
  disabled,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      data-slot="secondary-button"
      type="button"
      disabled={disabled}
      className={cn(
        /* Layout */
        'h-8',
        'group relative inline-flex items-center justify-center',
        'min-w-fit overflow-hidden rounded-sm',
        /* Base Colors */
        'text-foreground font-medium',
        'bg-secondary',
        // 'bg-white dark:bg-zinc-700',
        /* Layered Shadow System */
        'shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.1)]',
        'dark:shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(0,0,0,0.1)]',
        /* Gradient Overlay */
        /* 'before:absolute before:inset-0 before:size-full',
        'before:bg-linear-to-b before:from-transparent before:to-black/2', */
        'before:pointer-events-none before:absolute before:inset-0',
        'before:bg-linear-to-b',
        'before:from-black/0',
        'before:to-black/2',
        'before:from-30%',
        'before:transition-opacity',
        'before:transition-opacity',
        'dark:before:to-black/12',
        /* Interaction */
        'cursor-pointer transition-all',
        /* 'hover:bg-zinc-50 hover:before:opacity-0', */
        'hover:before:opacity-0',
        'hover:bg-gray-50',
        'dark:hover:bg-secondary',
        'disabled:cursor-not-allowed disabled:opacity-40',
        /* Focus */
        'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3',
        className
        /* 'shadow-[',
        'inset_0_1px_0.5px_0_rgba(255,255,255,0.05),',
        '0_2px_2px_-1px_rgba(0,0,0,0.06),',
        '0_4px_4px_-2px_rgba(0,0,0,0.04),',
        '0_0_0_1px_rgba(255,255,255,0.1)',
        'dark:shadow-[',
        'inset_0_1px_0.5px_0_rgba(255,255,255,0.05),',
        '0_2px_2px_-rgba(0,0,0,0.16),',
        '0_4px_4px_-2px_rgba(0,0,0,0.24),',
        '0_0_0_1px_rgba(255,255,255,0.1)]' */
        /* 'before:absolute before:inset-0 before:size-full before:bg-gradient-to-b before:transition-opacity',
        'before:from-ceramic-black/0 before:to-ceramic-black/[0.02] before:from-30%' */
      )}
      {...props}
      onClick={(e) => {
        e.currentTarget.blur();
      }}
    >
      {/* <span className="flex w-full items-center gap-1.5 p-8"> */}
      <span className="flex items-center gap-2 px-3">{children}</span>
      {/* </span> */}
    </button>
  );
}
