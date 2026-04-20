'use client';

import * as React from 'react';
import { Switch as SwitchPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer group/switch',
        'relative top-[.0625rem] inline-flex w-6 shrink-0 items-center justify-start rounded-full p-0.5',
        'ring-1 data-[state=checked]:ring-[#5F15FE]/88 data-[state=unchecked]:ring-[#191C21]/20 dark:data-[state=checked]:ring-[#846bff] dark:data-[state=unchecked]:ring-white/15',
        'data-[state=checked]:bg-[#6c47ff]',
        'data-[state=unchecked]:bg-[#dbdbe0] data-[state=unchecked]:hover:bg-[#C7C7D0] data-[state=unchecked]:hover:ring-[#BBBCBE] dark:data-[state=unchecked]:bg-[#3d3d4a] dark:data-[state=unchecked]:hover:bg-[#47475a]',
        'data-[state=checked]:hover:bg-[#5F15FE] dark:data-[state=checked]:hover:bg-[#7a5dff]',
        'transition',
        'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3',
        'data-disabled:cursor-not-allowed data-disabled:opacity-40',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block rounded-full',
          'bg-white dark:bg-[#f6f6f7]',
          'bg-linear-to-b from-black/0 to-black/2',
          'ring-1 ring-[#191C21]/4 dark:ring-[#191C21]/12',
          'transition-all duration-120',
          'data-[state=checked]:translate-x-[8px] data-[state=unchecked]:translate-x-0',
          'relative size-3 shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_4px_4px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.06)]'
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
