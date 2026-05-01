'use client';

import { Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { useQueryContext } from '@/hooks/use-query-context';
import { PRESET_QUERIES } from '@/lib/query';

export function QueryBar() {
  const { activeQuery, setActiveQueryId } = useQueryContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="w-full justify-start gap-2 px-3 font-normal"
        >
          <Sparkles className="size-3 shrink-0 text-muted-foreground" strokeWidth={2} />
          <span className="font-medium text-foreground">{activeQuery.title}</span>
          <span className="text-muted-foreground/60">·</span>
          <span className="text-muted-foreground">{activeQuery.description}</span>
          <ChevronDown
            className="ml-auto size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
            strokeWidth={2}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={4}
        align="start"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuLabel>Queries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={activeQuery.id} onValueChange={setActiveQueryId}>
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
