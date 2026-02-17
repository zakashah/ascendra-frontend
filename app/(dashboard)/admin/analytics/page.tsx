'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Bell, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Overview', href: '/admin/overview' },
  { label: 'Analytics', href: '/admin/analytics' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Settings', href: '/admin/settings' },
];

export default function OverviewPage() {
  const pathname = usePathname();
  return (
    <>
      <div className="border-b bg-muted">top bar</div>
      <div className="border-b bg-muted">tab bar</div>
      <div>main</div>
    </>
  );
}
{
  /* <div className="min-h-screen bg-background">
      <div className="border-b bg-background">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center px-6 py-3">
          <div className="flex min-w-0 flex-1 items-center overflow-x-auto scrollbar-hide">
            <div className="flex items-center text-sm whitespace-nowrap">
              <Switcher label="Workspace" />
              <span className="px-2 text-muted-foreground">/</span>
              <Switcher label="Application" />
              <span className="px-2 text-muted-foreground">/</span>
              <Switcher label="Environment" />
            </div>
          </div>
          <div className="ml-4 flex shrink-0 items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
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
      <main className="mx-auto w-full max-w-screen-2xl px-6 py-6">
        <div>
          <h1 className="text-2xl font-semibold">Overview</h1>
          <p className="text-muted-foreground mt-2">
            This is the overview page inside dashboard layout.
          </p>
          <div className="h-500 bg-muted/20 rounded-lg" />
        </div>
      </main>
    </div> */
}
function Switcher({ label }: { label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto px-2 py-1 text-sm font-medium"
        >
          {label}
          <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
