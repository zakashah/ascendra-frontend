import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, disabled, readOnly, ...props }, ref) => {
  const [focused, setFocused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={cn(
        'dark:bg-secondary flex items-center rounded-[.375rem] bg-white transition',

        // BASE RING
        'ring-1 ring-[#191c21]/12',
        'dark:ring-[#3d3d4a]/88 dark:ring-inset',

        // BASE SHADOW
        'shadow-[0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04)]',
        'dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]',

        // DISABLED
        'has-[[data-slot=input][data-disabled]]:cursor-not-allowed',
        'has-[[data-slot=input][data-disabled]]:opacity-40',

        // READ ONLY
        'has-[[data-slot=input]:read-only]:bg-gray-100 dark:has-[[data-slot=input]:read-only]:bg-white/5',
        'has-[[data-slot=input]:read-only]:ring-gray-300 dark:has-[[data-slot=input]:read-only]:ring-white/10',
        'has-[[data-slot=input]:read-only]:shadow-none',

        // HOVER
        'has-[[data-slot=input][data-hovered]:not(:read-only):not([data-focused]):not([data-disabled])]:ring-[#191c21]/24',
        'dark:has-[[data-slot=input][data-hovered]:not(:read-only):not([data-focused]):not([data-disabled])]:ring-[#525260]',

        'has-[[data-slot=input][data-hovered]:not(:read-only):not([data-focused]):not([data-disabled])]:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_4px_4px_-2px_rgba(0,0,0,0.06)]',
        'dark:has-[[data-slot=input][data-hovered]:not(:read-only):not([data-focused]):not([data-disabled])]:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.32),0_4px_4px_-2px_rgba(0,0,0,0.32)]',

        // FOCUS
        'has-[[data-slot=input][data-focused]:not(:read-only)]:ring-1',
        'has-[[data-slot=input][data-focused]:not(:read-only)]:ring-[#191C21]/12',
        'dark:has-[[data-slot=input][data-focused]:not(:read-only)]:ring-black/88',

        'has-[[data-slot=input][data-focused]:not(:read-only)]:shadow-[0_0_0_3px_rgba(0,0,0,0.08),0_4px_4px_-1px_rgba(0,0,0,0.08),0_4px_4px_-2px_rgba(0,0,0,0.04)]',
        'dark:has-[[data-slot=input][data-focused]:not(:read-only)]:shadow-[0_0_0_3px_rgba(61,61,74,0.4),0_4px_4px_-1px_rgba(0,0,0,0.08),0_4px_4px_-2px_rgba(0,0,0,0.16)]'
      )}
    >
      <input
        data-slot="input"
        data-focused={focused || undefined}
        data-hovered={hovered || undefined}
        data-disabled={disabled || undefined}
        readOnly={readOnly}
        disabled={disabled}
        type={type}
        ref={ref}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'flex h-8 w-full bg-transparent px-3 py-1 text-sm',
          'outline-none placeholder:text-gray-400',
          className
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';
export { Input };
