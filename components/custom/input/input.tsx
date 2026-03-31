import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  const [isPointer, setIsPointer] = React.useState(false);
  return (
    <div
      className={cn(
        'dark:bg-secondary flex items-center rounded-[.375rem] bg-white transition',
        // BASE
        'ring-1 ring-[#191c21]/12 dark:ring-[#3d3d4a]/88 dark:ring-inset',
        // BASE SHADOW
        'shadow-[0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04)]',
        'dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]',
        // DISABLED (input inside is disabled)
        'has-[input:disabled]:cursor-not-allowed',
        'has-[input:disabled]:opacity-40',
        // READONLY
        'has-[input:read-only]:bg-gray-100 dark:has-[input:read-only]:bg-white/5',
        'has-[input:read-only]:ring-gray-300 dark:has-[input:read-only]:ring-white/10',
        'has-[input:read-only]:shadow-none',
        // HOVER (only when NOT readonly/disabled/focused)
        'has-[input:not(:read-only):not(:disabled):not(:focus)]:hover:ring-[#191c21]/24',
        'dark:has-[input:not(:read-only):not(:disabled):not(:focus)]:hover:ring-[#525260]',
        'has-[input:not(:read-only):not(:disabled):not(:focus)]:hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_4px_4px_-2px_rgba(0,0,0,0.06)]',
        'dark:has-[input:not(:read-only):not(:disabled):not(:focus)]:hover:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.32),0_4px_4px_-2px_rgba(0,0,0,0.32)]',
        // FOCUS (replaces your data-focused)
        isPointer &&
          'has-[input:focus:not(:read-only)]:shadow-[0_0_0_3px_rgba(0,0,0,0.08),0_4px_4px_-1px_rgba(0,0,0,0.08),0_4px_4px_-2px_rgba(0,0,0,0.04)] has-[input:focus:not(:read-only)]:ring-1 has-[input:focus:not(:read-only)]:ring-[#191C21]/12 dark:has-[input:focus:not(:read-only)]:shadow-[0_0_0_3px_rgba(61,61,74,0.4),0_4px_4px_-1px_rgba(0,0,0,0.08),0_4px_4px_-2px_rgba(0,0,0,0.16)] dark:has-[input:focus:not(:read-only)]:ring-black/88',
        // FOCUS VISIBLE (keyboard focus)
        !isPointer &&
          'has-[input:focus-visible:not(:active)]:outline-primary has-[input:focus-visible:not(:active)]:outline-2 has-[input:focus-visible:not(:active)]:outline-offset-1'
      )}
    >
      <input
        ref={ref}
        type={type}
        onMouseDown={() => setIsPointer(true)}
        onKeyDown={() => setIsPointer(false)}
        className={cn(
          'flex h-8 w-full bg-transparent px-3 py-1 text-sm',
          'outline-none placeholder:text-gray-400',
          'disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';
export { Input };
