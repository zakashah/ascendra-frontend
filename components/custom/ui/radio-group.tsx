'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';

/*
 * Ceramic radio — faithfully ported from Clerk's implementation.
 *
 * Structure mirrors Clerk's group/radio + peer/radio pattern:
 *   <div class="group/radio">        ← hover source
 *     <RadioGroupPrimitive.Item>     ← visual + interactive (data-state="checked")
 *       <Indicator>
 *         <dot />
 *       </Indicator>
 *     </RadioGroupPrimitive.Item>
 *   </div>
 *
 * Clerk uses peer-checked/radio: — we use data-[state=checked]: (Radix equivalent)
 * Clerk uses group-hover/radio:  — we use group-hover/radio: (same, wrapper has group/radio)
 *
 * Hex → ceramic palette:
 *   ceramic-white        #fff
 *   ceramic-gray-100     #f6f6f7   light hover bg
 *   ceramic-gray-900     #4c4c5c   dark base bg
 *   ceramic-gray-1100    #33333e   dark hover bg  ← goes darker on hover in dark mode
 *   ceramic-purple-700   #6c47ff   brand / light checked bg / dark checked bg
 *   ceramic-purple-600   #846bff   dark checked ring
 *   #191C21                        light ring base color (Clerk's near-black)
 *   #7166F8                        light checked ring
 *   #5F5F6F                        dark unchecked ring (ceramic-gray-800)
 *   #3D3D4A                        dark hover ring (ceramic-gray-1000)
 */

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        /* Layout */
        'relative top-0.5 inline-block size-3.5 shrink-0 rounded-full transition outline-none',

        /* Light base */
        'bg-white text-white',
        'shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_4px_4px_-2px_rgba(0,0,0,0.06)]',
        'ring-1 ring-[#191C21]/20',

        /* Dark base */
        'dark:bg-[#4c4c5c]',
        'dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.12),0_4px_4px_-2px_rgba(0,0,0,0.36)]',
        'dark:ring-[#5F5F6F]/[.92]',

        /* ::before — bottom-darken gradient (visible unchecked, hidden checked) */
        'before:absolute before:inset-0 before:size-full before:rounded-[inherit]',
        'before:bg-gradient-to-b before:to-black/[.02]',
        'before:transition-opacity',

        /* ::after — top-lighten gloss (hidden unchecked, block checked) */
        'after:absolute after:inset-0 after:hidden after:size-full after:rounded-[inherit]',
        'after:bg-gradient-to-b after:from-white/20',
        'after:transition-opacity',

        /* Light hover */
        'group-hover/radio:before:opacity-0',
        'group-hover/radio:bg-[#f6f6f7]',
        'group-hover/radio:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_4px_4px_-2px_rgba(0,0,0,0.07)]',
        'group-hover/radio:ring-[#191C21]/[.28]',

        /* Dark hover — goes darker (gray-1100) */
        'dark:group-hover/radio:bg-[#33333e]',
        'dark:group-hover/radio:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]',
        'dark:group-hover/radio:ring-[#3D3D4A]/[.88]',

        /* Checked */
        'data-[state=checked]:before:hidden data-[state=checked]:after:block',
        'data-[state=checked]:bg-[#6c47ff]',
        'data-[state=checked]:shadow-[0_4px_4px_-3px_rgba(0,0,0,0.32)]',
        'data-[state=checked]:ring-[#7166F8]',

        /* Dark checked */
        'dark:data-[state=checked]:bg-[#6c47ff]',
        'dark:data-[state=checked]:shadow-[0_4px_4px_-3px_rgba(0,0,0,0.16)]',
        'dark:data-[state=checked]:ring-[#846bff]',

        /* Checked + hover — gloss fades */
        'group-hover/radio:data-[state=checked]:after:opacity-0',

        /* Focus ring */
        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[2px] focus-visible:outline-[#6c47ff]/50 focus-visible:transition-none',

        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="relative z-10 flex h-full w-full items-center justify-center">
        <div
          className="absolute size-[0.3125rem] rounded-full bg-white"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            opacity: 1,
          }}
          aria-hidden="true"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
