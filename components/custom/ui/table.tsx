'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';

import { PaginationButton } from '@/components/custom/common-ui/pagination-button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  LuChevronFirst,
  LuChevronLast,
  LuChevronLeft,
  LuChevronRight,
} from 'react-icons/lu';

const TableScrollContext = React.createContext({
  scrolled: false,
  vscroll: false,
});

function TableWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="table-container"
      className={cn('bg-muted flex flex-col rounded-xl py-1', className)}
      {...props}
    />
  );
}

function Table({
  scrollable = false,
  vertical = false,
  horizontal = true,
  height,
  className,
  ...props
}: React.ComponentProps<'table'> & {
  scrollable?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  height?: number;
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !vertical) return;
    const handler = () => setScrolled(el.scrollTop > 0);
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, [vertical]);
  return (
    <TableScrollContext.Provider
      value={{ scrolled, vscroll: scrollable && vertical && !!height }}
    >
      <div
        ref={ref}
        data-slot="table-wrapper"
        className={cn(
          '',
          scrollable && horizontal && '-mb-px overflow-x-auto pb-px',
          scrollable && vertical && height && 'overflow-y-auto',
          scrollable && vertical && height && `h-${height}`
        )}
      >
        <table
          data-slot="table"
          className={cn('w-full border-separate border-spacing-0', className)}
          {...props}
        />
      </div>
    </TableScrollContext.Provider>
  );
}

function TableHeader({
  sticky = false,
  className,
  ...props
}: React.ComponentProps<'thead'> & { sticky?: boolean }) {
  const { scrolled, vscroll } = React.useContext(TableScrollContext);
  return (
    <thead
      data-slot="table-header"
      className={cn(
        '',
        vscroll && sticky && 'sticky top-0 z-10',
        vscroll && sticky && scrolled && 'bg-muted',
        className
      )}
      {...props}
    />
  );
}

function TableHeaderRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-header-row"
      className={cn('text-secondary-foreground text-left text-xs', className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        'relative isolate',
        'before:bg-background before:absolute before:inset-0 before:-z-10 before:mx-1 before:rounded-lg',
        'before:ring-1 before:ring-[#191C21]/4 dark:before:ring-black/20',
        'before:shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)]',
        'dark:before:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,2),0_0_3px_0_rgba(0,0,0,0.2)',
        '[&>tr:not(:last-child)>td]:border-border [&>tr:not(:last-child)>td]:border-b',
        className
      )}
      {...props}
    />
  );
}

function EmptyBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="table-body"
      className={cn(
        'relative isolate',
        'before:bg-background before:absolute before:inset-0 before:-z-10 before:mx-1 before:rounded-lg',
        'before:ring-1 before:ring-[#191C21]/4 dark:before:ring-black/20',
        'before:shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)]',
        'dark:before:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,2),0_0_3px_0_rgba(0,0,0,0.2)',
        '[&>tr:not(:last-child)>td]:border-border [&>tr:not(:last-child)>td]:border-b',
        className
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4',
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn('px-6 py-3', className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn('px-5 py-4 first:pl-6 last:pr-6', className)}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  );
}

function TableFoot({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'text-muted-foreground flex flex-col text-xs sm:flex-row sm:items-center sm:justify-between',
        className
      )}
      {...props}
    >
      <div className="mx-1 px-5 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <span>1-1</span>
            <span>of</span>
            <span>1</span>
          </div>
          <div className="flex items-center">
            <Separator
              orientation="vertical"
              className="mx-3 hidden sm:block"
            />
            <span className="sm:hidden">Show</span>
            <span className="hidden sm:block">Results per page</span>
            {/* <Select>
              <SelectTrigger className="ml-2 h-5! w-15! rounded-sm text-xs">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="w-15! text-xs">
                {['10', '20', '30', '40', '50'].map((item, i) => (
                  <SelectItem key={i} value={item} className="w-15! text-xs">
                    10
                  </SelectItem>
                ))}
              </SelectContent>
            </Select> */}
            <Select>
              <SelectTrigger className="ml-2" size="sm">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent side="bottom">
                {['10', '15', '20', '100'].map((item, i) => (
                  <SelectItem key={i} value={item} className="">
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="border-border mx-1 border-t px-5 py-3 sm:border-0 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:justify-normal">
          <div className="flex items-center gap-2">
            <PaginationButton className="border-0 bg-transparent">
              <LuChevronFirst />
            </PaginationButton>
            <PaginationButton>
              <LuChevronLeft />
            </PaginationButton>
          </div>
          <div className="flex items-center">
            <span className="font-medium">1/1</span>
          </div>
          <div className="flex items-center gap-2">
            <PaginationButton>
              <LuChevronRight />
            </PaginationButton>
            <PaginationButton className="border-0 bg-transparent">
              <LuChevronLast />
            </PaginationButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
export {
  Table,
  TableBody,
  EmptyBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableFooter,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
};
