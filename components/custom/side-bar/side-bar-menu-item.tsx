import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type IconType = React.ComponentType<{ className?: string }>;

type Props = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  path: string;
  icon?: IconType;
  alternate?: 'default' | 'stand-alone';
  children: React.ReactNode;
};

export function SideBarMenuItem({
  path,
  alternate = 'default',
  className,
  children,
  icon: Icon,
  ...props
}: Props) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(path);

  if (alternate === 'stand-alone') {
    return (
      <Link
        href={path}
        data-active={isActive ? 'true' : 'false'}
        className={cn(
          'hover:bg-foreground/4 focus-visible:outline-primary data-[active=true]:bg-foreground/8 data-[active=true]:text-foreground flex h-8 w-full cursor-pointer items-center justify-between rounded-md px-3 transition-colors focus-visible:outline-2',
          className
        )}
        {...props}
      >
        <div className={cn('flex items-center gap-3', Icon ? '' : 'ml-6.5')}>
          {Icon && <Icon className="text-muted-foreground h-3.5 w-3.5" />}
          <span>{children}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={path}
      data-active={isActive ? 'true' : 'false'}
      className={cn(
        'group focus-visible:outline-primary hover:bg-foreground/4 hover:text-foreground data-[active=true]:bg-foreground/8 data-[active=true]:text-foreground relative flex h-8 w-full cursor-pointer items-center rounded-md px-3 text-left text-sm transition-colors focus-visible:outline-2',
        className
      )}
      {...props}
    >
      <span className="bg-foreground absolute top-2 bottom-2 left-4.5 w-px opacity-0 transition-opacity duration-200 group-data-[active=true]:opacity-100" />
      <span className="pl-6 capitalize">{children}</span>
    </Link>
  );
}
