'use client';

import { Sparkles, ChevronDown, Loader2 } from 'lucide-react';
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
import { PRESET_QUERIES, type QueryGroup } from '@/lib/query';

const GROUP_LABELS: Record<QueryGroup, string> = {
  query: 'Queries',
  'user-query': 'My Queries',
  filter: 'Filters',
};

const GROUP_ORDER: QueryGroup[] = ['query', 'user-query', 'filter'];

export function QueryBar() {
  const { activeQuery, setActiveQueryId, isLoading } = useQueryContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="w-full justify-start gap-2 px-3 font-normal"
        >
          {isLoading ? (
            <Loader2
              className="text-muted-foreground size-3 shrink-0 animate-spin"
              strokeWidth={2}
            />
          ) : (
            <Sparkles
              className="text-muted-foreground size-3 shrink-0"
              strokeWidth={2}
            />
          )}
          <span className="text-foreground font-medium">
            {activeQuery.title}
          </span>
          <span className="text-muted-foreground/60">·</span>
          <span className="text-muted-foreground">
            {activeQuery.description}
          </span>
          <ChevronDown
            className="text-muted-foreground ml-auto size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
            strokeWidth={2}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={4}
        align="start"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuRadioGroup
          value={activeQuery.id}
          onValueChange={setActiveQueryId}
        >
          {GROUP_ORDER.map((group, i) => {
            const items = PRESET_QUERIES.filter((q) => q.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                {i > 0 && <DropdownMenuSeparator />}
                <DropdownMenuLabel>{GROUP_LABELS[group]}</DropdownMenuLabel>
                {items.map((query) => (
                  <DropdownMenuRadioItem key={query.id} value={query.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">{query.title}</span>
                      <span className="text-muted-foreground text-xs">
                        {query.description}
                      </span>
                    </div>
                  </DropdownMenuRadioItem>
                ))}
              </div>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
