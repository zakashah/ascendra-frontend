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

  const hasActive = pathname.startsWith(basePath);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    // 🔥 Ensure correct open state from route
    if (hasActive) {
      menu.setAttribute('data-open', 'true');
      menu.setAttribute('data-locked', 'true');
    }

    const syncInert = () => {
      const isOpen = menu.getAttribute('data-open') === 'true';

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
    };

    // Initial sync
    syncInert();

    // 🔥 Watch for manual data-open changes
    const observer = new MutationObserver(syncInert);
    observer.observe(menu, {
      attributes: true,
      attributeFilter: ['data-open'],
    });

    return () => observer.disconnect();
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
