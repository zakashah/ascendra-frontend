'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  badge?: string;
  exact?: boolean;
};

export function NavLink({
  href,
  children,
  badge,
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname();

  //   const isActive = exact ? pathname === href : pathname.startsWith(href);
  const isActive = exact;

  return (
    <Link
      href={href}
      className={clsx(
        'focus-visible:outline-primary inline-flex h-6 items-center rounded-[0.375rem] px-2 transition-colors focus-visible:outline-2',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground'
      )}
    >
      <span
        className={clsx(
          'relative',
          isActive &&
            "after:absolute after:-bottom-3.5 after:left-0 after:h-px after:w-full after:bg-black after:content-[''] dark:after:bg-white"
        )}
      >
        {children}
      </span>
    </Link>
  );
}
