'use client';

import { ChevronDown, Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

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

export function DashboardTopbar() {
  return (
    <div className="border-b bg-muted">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center px-6 py-3">
        {/* Left: Scrollable breadcrumb area */}
        <div className="flex min-w-0 flex-1 items-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center text-sm whitespace-nowrap">
            <Switcher label="Workspace" />
            <span className="px-2 text-muted-foreground">/</span>
            <Switcher label="Application" />
            <span className="px-2 text-muted-foreground">/</span>
            <Switcher label="Environment" />
          </div>
        </div>
        {/* Right: Fixed section */}
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
  );
}
