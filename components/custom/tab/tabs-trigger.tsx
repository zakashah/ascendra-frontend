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
        'relative h-9 px-1 text-sm transition-colors',
        disabled ? 'opacity-50' : 'cursor-pointer',
        isActive && 'text-foreground cursor-default',
        !isActive && !disabled && 'text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
      {isActive && (
        <span className="bg-foreground absolute inset-x-0 -bottom-[0.5px] h-[0.5px]" />
      )}
    </button>
  );
}
