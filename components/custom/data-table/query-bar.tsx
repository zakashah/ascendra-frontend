'use client';

import { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from '@/components/custom/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/custom/ui/dropdown-menu';

interface Query {
  id: string;
  title: string;
  description: string;
}

const PRESET_QUERIES: Query[] = [
  { id: 'all-active',    title: 'All Active Invoices',  description: 'Currently pending or overdue' },
  { id: 'last-3-months', title: 'Last 3 Months',        description: 'Invoices from the past 90 days' },
  { id: 'pending',       title: 'Pending Invoices',     description: 'Awaiting payment' },
  { id: 'overdue',       title: 'Overdue Invoices',     description: 'Past due date' },
  { id: 'by-status',     title: 'Invoices by Status',   description: 'All invoices sorted by status' },
  { id: 'all',           title: 'All Invoices',         description: 'Complete invoice history' },
];

export function QueryBar() {
  const [activeId, setActiveId] = useState(PRESET_QUERIES[0].id);
  const active = PRESET_QUERIES.find((q) => q.id === activeId)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="w-full justify-start gap-2 px-3 font-normal"
        >
          <Sparkles className="size-3 shrink-0 text-muted-foreground" strokeWidth={2} />
          <span className="font-medium text-foreground">{active.title}</span>
          <span className="text-muted-foreground/60">·</span>
          <span className="text-muted-foreground">{active.description}</span>
          <ChevronDown
            className="ml-auto size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
            strokeWidth={2}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} align="start" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuLabel>Queries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={activeId} onValueChange={setActiveId}>
          {PRESET_QUERIES.map((query) => (
            <DropdownMenuRadioItem key={query.id} value={query.id}>
              <div className="flex flex-col">
                <span className="font-medium">{query.title}</span>
                <span className="text-xs text-muted-foreground">{query.description}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
