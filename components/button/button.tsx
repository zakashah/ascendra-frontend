import { cn } from '@/lib/utils';

export function Button({
  className,
  children,
  disabled,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        /* Layout & Base - Primary Purple */
        'group/button relative inline-flex h-8 min-w-fit shrink-0 items-center justify-between overflow-hidden rounded-[0.375rem] transition-all duration-200 select-none',
        'bg-primary text-sm font-medium text-white',

        /* The 4-Layer Shadow Stack (Fixed Syntax) */
        'shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(255,255,255,0.024),0_0_0_1px_rgb(108,71,255)]',

        /* The Surface Lighting (The "Gloss") */
        'before:pointer-events-none before:absolute before:inset-0 before:size-full before:transition-opacity before:duration-200',
        'before:bg-linear-to-b before:from-white/20 before:to-transparent',

        /* Dark Mode Styles */

        /* Dark mode shadow needs higher contrast for the edge glint */
        'dark:shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.16),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(0,0,0,0.12)]',

        /* THE HOVER FIX: No BG change, just fade the gloss */
        'hover:before:opacity-0',
        /* If you want a tiny shift in color like they sometimes do: */
        'hover:bg-primary dark:hover:bg-[#846bff]',

        /* Interaction & States */
        'active:scale-[0.98]',
        'disabled:cursor-not-allowed disabled:opacity-40',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2 px-3">{children}</span>
    </button>
  );
}
