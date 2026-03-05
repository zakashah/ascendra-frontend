import { cn } from '@/lib/utils';
import { useTabs } from '@/providers/tabs-context';

export function TabsTrigger({
  value,
  disabled,
  className,
  children,
  ...props
}: React.ComponentProps<'button'> & { value: string; disabled?: boolean }) {
  const { active, setActive } = useTabs();
  const isActive = active === value;

  const handleClick = () => {
    if (disabled || isActive) return;
    setActive(value);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'focus-visible:outline-primary relative z-10 inline-flex h-8 items-center gap-1.5 rounded-sm px-0.5 text-sm text-nowrap transition-colors focus-visible:outline-2',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        isActive && 'text-foreground cursor-default',
        !isActive && !disabled && 'text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
      {isActive && (
        <span className="bg-foreground absolute inset-x-0 -bottom-[4.5px] z-20 h-px" />
      )}
    </button>
  );
}
