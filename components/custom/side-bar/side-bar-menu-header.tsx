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

    const hasActive = menu.querySelector('[data-active="true"]');
    /* if (hasActive) {
      menu.setAttribute('data-locked', 'true');
      return;
    } */
    if (hasActive) {
      menu.setAttribute('data-open', 'true');
      menu.setAttribute('data-locked', 'true');
      return;
    }
    menu.removeAttribute('data-locked');

    const isOpen = menu.getAttribute('data-open') === 'true';
    // const nextOpen = !isOpen;

    // menu.setAttribute('data-open', nextOpen ? 'true' : 'false');
    menu.setAttribute('data-open', isOpen ? 'false' : 'true');

    /* const items = menu.querySelectorAll<HTMLButtonElement>(
      'button[data-active]'
    ); */

    /* items.forEach((item) => {
      const isActive = item.getAttribute('data-active') === 'true';

      if (nextOpen) {
        // Menu expanding → everything interactive
        item.removeAttribute('inert');
      } else {
        // Menu collapsing → only active item interactive
        if (isActive) {
          item.removeAttribute('inert');
        } else {
          item.setAttribute('inert', '');
        }
      }
    }); */
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        'hover:bg-foreground/4 focus-visible:outline-primary flex h-8 w-full cursor-pointer items-center justify-between rounded-md px-3 transition-colors group-data-[locked=true]:cursor-default group-data-[locked=true]:hover:bg-transparent focus-visible:outline-2',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Icon className="text-muted-foreground h-3.5 w-3.5" />
        <span>{children}</span>
      </div>
      <ChevronDown className="text-muted-foreground h-3.5 w-3.5 transition-transform duration-300 group-data-[locked=true]:opacity-30 group-data-[open=true]:rotate-180" />
    </button>
  );
}
