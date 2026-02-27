import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function SideBarMenu({
  basePath,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { basePath: string }) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const hasActive = basePath ? pathname.startsWith(basePath) : false;

  // Sync inert per menu
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const isOpen = hasActive;

    const items = menu.querySelectorAll<HTMLButtonElement>(
      'button[data-active]'
    );

    items.forEach((item) => {
      if (isOpen) {
        item.removeAttribute('inert');
      } else {
        item.setAttribute('inert', '');
      }
    });
  }, [hasActive]);

  return (
    <div
      ref={menuRef}
      data-open={hasActive ? 'true' : 'false'}
      data-locked={hasActive ? 'true' : undefined}
      className={cn('group flex flex-col p-0.5', className)}
      {...props}
    >
      {children}
    </div>
  );
}
