'use client';

import * as React from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

/*
 * Ceramic checkbox — faithfully ported from Clerk's implementation.
 *
 * Hex → ceramic palette:
 *   #fff       ceramic-white          unchecked light bg
 *   #f6f6f7    ceramic-gray-100       unchecked light hover bg
 *   #4c4c5c    ceramic-gray-900       unchecked dark bg
 *   #33333e    ceramic-gray-1100      unchecked dark hover bg
 *   #6c47ff    ceramic-purple-700     checked bg (light+dark), light checked ring
 *   #775cff                           dark checked ring + dark checked-hover ring
 *   #6038ff                           light checked-hover ring
 *   #525260                           dark unchecked ring
 *   #e02e2e    ceramic-negative(L)    light invalid ring
 *   #f73d3d    ceramic-negative(D)    dark invalid ring
 *   #fedddd    ceramic-red-100        light invalid bg
 *   #7a1313    ceramic-red-1100       dark invalid bg
 *   #fec4c4    ceramic-red-200        light invalid hover bg
 *   #921414    ceramic-red-1000       dark invalid hover bg
 */

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <>
      {/* @keyframes only — cannot be expressed as a Tailwind utility */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes checkbox-draw {
          from { stroke-dashoffset: 14; }
          to   { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .checkbox-svg {
            stroke-dasharray: 14;
            stroke-dashoffset: 0;
            animation: checkbox-draw 200ms cubic-bezier(0.34, 1.56, 0.64, 1) 100ms both;
          }
        }
      `,
        }}
      />

      <CheckboxPrimitive.Root
        className={cn(
          /* Layout */
          'relative top-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-[.25rem] transition outline-none',
          'text-white',

          /* Light unchecked */
          'bg-white',
          'shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.2),0_4px_4px_-2px_rgba(0,0,0,0.06)]',

          /* Dark unchecked */
          'dark:bg-[#4c4c5c]',
          'dark:shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#525260,0_0_0_2px_rgba(0,0,0,0.16)]',

          /* ::before — bottom-darken gradient */
          'before:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[inherit]',
          'before:bg-gradient-to-b before:to-black/[.02]',
          'before:transition-opacity',

          /* ::after — top-lighten gloss (20% light, 6% dark — reduced to avoid shimmer on 14px) */
          'after:pointer-events-none after:absolute after:inset-0 after:size-full after:rounded-[inherit]',
          'after:bg-gradient-to-b after:from-white/20 dark:after:from-white/[.06]',
          'after:transition-opacity',

          /* Unchecked hover — bg shifts, ring tightens, gradients fade */
          'hover:bg-[#f6f6f7]',
          'hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(25,28,33,.28),0_4px_4px_-2px_rgba(0,0,0,0.07)]',
          'hover:before:opacity-0',
          'hover:after:opacity-0',

          /* Dark unchecked hover */
          'dark:hover:bg-[#33333e]',
          'dark:hover:shadow-[0_-1px_1px_rgba(255,255,255,0.2),0_0_0_1px_rgba(61,61,74,0.88),0_0_0_2px_rgba(0,0,0,0.2)]',

          /* Checked — ! overrides hover bg/shadow */
          'data-[state=checked]:!bg-[#6c47ff]',
          'data-[state=checked]:before:hidden',
          'data-[state=checked]:!shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6c47ff]',

          /* Dark checked */
          'dark:data-[state=checked]:!bg-[#6c47ff]',
          'dark:data-[state=checked]:!shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.32),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]',

          /* Checked hover — ring darkens (gloss already fades from hover:after:opacity-0) */
          'data-[state=checked]:hover:!shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_#6038ff]',

          /* Dark checked hover — upward highlight dims .32 → .20 */
          'dark:data-[state=checked]:hover:!shadow-[inset_0_1px_1px_rgba(255,255,255,0),0_-1px_0_rgba(255,255,255,0.2),0_0_0_1px_#775cff,0_0_0_2px_rgba(0,0,0,0.16)]',

          /* Invalid */
          'aria-[invalid=true]:!bg-[#fedddd]',
          'aria-[invalid=true]:!shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_#e02e2e,0_4px_4px_-2px_rgba(0,0,0,0.06)]',
          'dark:aria-[invalid=true]:!bg-[#7a1313]',
          'dark:aria-[invalid=true]:!shadow-[0_-1px_1px_rgba(255,255,255,0.12),0_0_0_1px_#f73d3d,0_0_0_2px_rgba(0,0,0,0.16)]',
          'aria-[invalid=true]:hover:!bg-[#fec4c4]',
          'dark:aria-[invalid=true]:hover:!bg-[#921414]',

          /* Disabled */
          'disabled:cursor-not-allowed disabled:opacity-40',

          /* Focus */
          'focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#6c47ff]/50 focus-visible:transition-none',

          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="relative z-10 flex items-center justify-center">
          <svg
            className="checkbox-svg size-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.25 8.75L7.25 11.75L11.75 4.25" />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}

export { Checkbox };
