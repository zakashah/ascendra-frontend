'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  { href: '/blocks', label: 'Overview', exact: true },
  { href: '/blocks/page-header', label: 'Page Header' },
  { href: '/blocks/page-main', label: 'Page Main' },
  { href: '/blocks/main-section', label: 'Main Section' },
  { href: '/blocks/main-content', label: 'Main Content' },
];

export function BlocksNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
        Layout
      </p>
      {items.map((item) => {
        const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm px-3 py-1.5 rounded-md transition-colors',
              active
                ? 'bg-muted text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
