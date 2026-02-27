'use client';

import { Menu } from 'lucide-react';
import { SurfaceButton } from '../surface-button';

export default function SideBarToggle() {
  const toggleSidebar = () => {
    const root = document.getElementById('app-layout');
    if (!root) return;

    const current = root.getAttribute('data-sidebar');
    root.setAttribute('data-sidebar', current === 'open' ? 'closed' : 'open');
  };

  return (
    <div className="flex items-center gap-4 lg:hidden">
      <SurfaceButton variant={'square'} onClick={toggleSidebar}>
        <Menu className="text-muted-foreground size-3.5" />
      </SurfaceButton>
      <span
        className="text-muted-foreground cursor-pointer font-semibold"
        onClick={() => toggleSidebar}
      >
        User & Authentication
      </span>
    </div>
  );
}
