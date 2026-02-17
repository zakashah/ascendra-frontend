'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
  { label: 'Overview', href: '/admin/overview' },
  { label: 'Analytics', href: '/admin/analytics' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Settings', href: '/admin/settings' },
];

export function DashboardTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 border-b bg-muted">
      <div className="mx-auto w-full max-w-screen-2xl px-6">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'border-b-2 py-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
