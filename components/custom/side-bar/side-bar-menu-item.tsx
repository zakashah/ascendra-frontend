import React from 'react';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'button'> & {
  children: React.ReactNode;
};

export function SideBarMenuItem({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sidebar = document.getElementById('sidebar-root');
    if (!sidebar) return;

    // Remove active from all items
    sidebar
      .querySelectorAll('[data-active="true"]')
      .forEach((el) => el.setAttribute('data-active', 'false'));

    // Set active on clicked item
    e.currentTarget.setAttribute('data-active', 'true');
  };

  return (
    <button
      type="button"
      data-active="false"
      onClick={handleClick}
      className={cn(
        'group focus-visible:outline-primary hover:bg-muted/75 hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground relative flex h-8 w-full cursor-pointer items-center rounded-md px-3 text-left text-sm transition-colors focus-visible:outline-2',
        className
      )}
      {...props}
    >
      <span className="bg-foreground absolute top-2 bottom-2 left-4.5 w-px opacity-0 transition-opacity duration-200 group-data-[active=true]:opacity-100" />
      <span className="pl-6 capitalize">{children}</span>
    </button>
  );
}
