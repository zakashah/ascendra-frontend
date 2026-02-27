import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type IconType = React.ComponentType<{ className?: string }>;

type Props = React.ComponentProps<'button'> & {
  icon: IconType;
  children: React.ReactNode;
};

export function SideBarMenuHeader({
  className,
  children,
  icon: Icon,
  ...props
}: Props) {
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const menu = e.currentTarget.closest('[data-open]');
    if (!menu) return;

    const isOpen = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', isOpen ? 'false' : 'true');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        'hover:bg-muted/75 focus-visible:outline-primary flex h-8 w-full cursor-pointer items-center justify-between rounded-md px-3 transition-colors focus-visible:outline-2',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Icon className="text-muted-foreground h-4 w-4" />
        <span>{children}</span>
      </div>

      <ChevronDown className="text-muted-foreground h-3.5 w-3.5 transition-transform duration-300 group-data-[open=true]:rotate-180" />
    </button>
  );
}
