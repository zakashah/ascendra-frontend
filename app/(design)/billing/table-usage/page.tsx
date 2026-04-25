'use client';

import { useMemo, useState } from 'react';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';
import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { Button } from '@/components/custom/ui/button';
import { Checkbox } from '@/components/custom/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import {
  LuArrowDown,
  LuArrowUp,
  LuArrowUpDown,
  LuChevronDown,
  LuFilter,
  LuLock,
  LuSearch,
  LuSettings,
} from 'react-icons/lu';
import { RiDraggable } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';

// --- Types ---

type InvoiceStatus = 'paid' | 'pending' | 'overdue';
type SortKey = 'id' | 'clientName' | 'amount' | 'dueDate' | 'status' | 'issuedDate';
type SortDirection = 'asc' | 'desc';

interface Invoice {
  id: string;
  description: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
  issuedDate: string;
}

interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}

// --- Data ---

const invoices: Invoice[] = [
  {
    id: 'INV-001',
    description: 'Monthly school fees',
    clientName: 'Ahmad Raza',
    clientEmail: 'ahmad.raza@email.com',
    amount: 15000,
    dueDate: '2026-05-15',
    status: 'paid',
    issuedDate: '2026-04-01',
  },
  {
    id: 'INV-002',
    description: 'Annual registration fee',
    clientName: 'Sara Khan',
    clientEmail: 'sara.khan@email.com',
    amount: 8500,
    dueDate: '2026-05-20',
    status: 'pending',
    issuedDate: '2026-04-05',
  },
  {
    id: 'INV-003',
    description: 'Lab & activity charges',
    clientName: 'Bilal Malik',
    clientEmail: 'bilal.malik@email.com',
    amount: 3200,
    dueDate: '2026-04-10',
    status: 'overdue',
    issuedDate: '2026-03-20',
  },
  {
    id: 'INV-004',
    description: 'Monthly school fees',
    clientName: 'Hina Siddiqui',
    clientEmail: 'hina.s@email.com',
    amount: 15000,
    dueDate: '2026-05-15',
    status: 'pending',
    issuedDate: '2026-04-01',
  },
  {
    id: 'INV-005',
    description: 'Transport charges',
    clientName: 'Usman Tariq',
    clientEmail: 'usman.t@email.com',
    amount: 4500,
    dueDate: '2026-04-30',
    status: 'paid',
    issuedDate: '2026-04-01',
  },
  {
    id: 'INV-006',
    description: 'Exam & materials fee',
    clientName: 'Ayesha Noor',
    clientEmail: 'ayesha.n@email.com',
    amount: 2800,
    dueDate: '2026-04-05',
    status: 'overdue',
    issuedDate: '2026-03-15',
  },
];

const statusBadgeVariant: Record<InvoiceStatus, 'green' | 'amber' | 'red'> = {
  paid: 'green',
  pending: 'amber',
  overdue: 'red',
};

const statusLabel: Record<InvoiceStatus, string> = {
  paid: 'Paid',
  pending: 'Pending',
  overdue: 'Overdue',
};

// --- Helpers ---

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatAmount(amount: number) {
  return `PKR ${amount.toLocaleString()}`;
}

function sortInvoices(data: Invoice[], config: SortConfig | null): Invoice[] {
  if (!config) return data;
  return [...data].sort((a, b) => {
    const { key, direction } = config;
    let aVal: string | number = a[key] as string | number;
    let bVal: string | number = b[key] as string | number;
    if (key === 'dueDate' || key === 'issuedDate') {
      aVal = new Date(a[key]).getTime();
      bVal = new Date(b[key]).getTime();
    }
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

// --- Component ---

function SortIcon({ column, sortConfig }: { column: SortKey; sortConfig: SortConfig | null }) {
  if (sortConfig?.key !== column)
    return <LuArrowUpDown className="text-muted-foreground size-3 shrink-0" />;
  if (sortConfig.direction === 'asc')
    return <LuArrowUp className="size-3 shrink-0" />;
  return <LuArrowDown className="size-3 shrink-0" />;
}

export default function TableUsagePage() {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  function handleSort(key: SortKey) {
    setSortConfig((prev) => {
      if (prev?.key !== key) return { key, direction: 'asc' };
      if (prev.direction === 'asc') return { key, direction: 'desc' };
      return null;
    });
  }

  const sortedInvoices = useMemo(
    () => sortInvoices(invoices, sortConfig),
    [sortConfig],
  );

  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Table usage</PageTitle>
          <PageSubtitle>To explain the complete table usage plan</PageSubtitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="table-usage">
          <TabList>
            <TabTrigger value="table-usage">Table usage</TabTrigger>
          </TabList>
          <TabContent value="table-usage">
            <MainContent>
              <PageBar>
                <PageBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary">
                        <LuSettings />
                        <span>Columns</span>
                        <DropDownChevron />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-54 px-0 py-1"
                      sideOffset={8}
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <div className="text-muted-foreground px-3 py-1 text-xs">
                        Active columns
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox disabled checked />
                          <div className="mt-1">Plan</div>
                        </div>
                        <LuLock className="text-muted-foreground size-2.5 stroke-3" />
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Trial</div>
                        </div>
                        <RiDraggable className="text-muted-foreground -mr-0.5 cursor-pointer" />
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Monthly</div>
                        </div>
                        <RiDraggable className="text-muted-foreground -mr-0.5 cursor-pointer" />
                      </div>
                      <DropdownMenuSeparator />
                      <div className="text-muted-foreground px-3 py-1 text-xs">
                        Available columns
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Plan Key</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Annually</div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary" size="icon">
                        <LuFilter />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      className="w-54"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <DropdownMenuItem>Publicly Visible</DropdownMenuItem>
                      <DropdownMenuItem>Free Trial</DropdownMenuItem>
                      <DropdownMenuItem>Annual Amount</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </PageBarContent>
                <PageBarAction>
                  <Button>+ Add item</Button>
                </PageBarAction>
              </PageBar>
              <div className="mt-1 -mb-2 flex flex-wrap items-center gap-2">
                <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                  <div className="flex cursor-pointer items-center gap-1 px-1.5">
                    <RxCrossCircled />
                    Publicly Visible
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
                        Enter Value
                        <DropDownChevron />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      className="w-4!"
                      align="start"
                    >
                      <DropdownMenuItem>True</DropdownMenuItem>
                      <DropdownMenuItem>False</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                  <div className="flex cursor-pointer items-center gap-1 px-1.5">
                    <RxCrossCircled />
                    Annual Amount
                  </div>
                  <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
                    Enter Value
                    <LuChevronDown className="text-muted-foreground" />
                  </div>
                </div>
                <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                  <div className="flex cursor-pointer items-center gap-1 px-1.5">
                    <RxCrossCircled />
                    Free Trial
                  </div>
                  <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
                    Enter Value
                    <LuChevronDown className="text-muted-foreground" />
                  </div>
                </div>
                <div className="text-muted-foreground cursor-pointer text-xs">
                  Clear filters
                </div>
              </div>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead
                        className="cursor-pointer select-none"
                        onClick={() => handleSort('id')}
                      >
                        <div className="flex items-center gap-1.5">
                          Invoice
                          <SortIcon sortConfig={sortConfig} column="id" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer select-none"
                        onClick={() => handleSort('clientName')}
                      >
                        <div className="flex items-center gap-1.5">
                          Client
                          <SortIcon sortConfig={sortConfig} column="clientName" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer select-none"
                        onClick={() => handleSort('amount')}
                      >
                        <div className="flex items-center gap-1.5">
                          Amount
                          <SortIcon sortConfig={sortConfig} column="amount" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer select-none"
                        onClick={() => handleSort('dueDate')}
                      >
                        <div className="flex items-center gap-1.5">
                          Due Date
                          <SortIcon sortConfig={sortConfig} column="dueDate" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer select-none"
                        onClick={() => handleSort('status')}
                      >
                        <div className="flex items-center gap-1.5">
                          Status
                          <SortIcon sortConfig={sortConfig} column="status" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer select-none"
                        onClick={() => handleSort('issuedDate')}
                      >
                        <div className="flex items-center gap-1.5">
                          Issued
                          <SortIcon sortConfig={sortConfig} column="issuedDate" />
                        </div>
                      </TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    {sortedInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{invoice.id}</div>
                            <div className="text-muted-foreground text-xs">
                              {invoice.description}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{invoice.clientName}</div>
                            <div className="text-muted-foreground text-xs">
                              {invoice.clientEmail}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{formatAmount(invoice.amount)}</TableCell>
                        <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                        <TableCell>
                          <SimpleBadge variant={statusBadgeVariant[invoice.status]}>
                            {statusLabel[invoice.status]}
                          </SimpleBadge>
                        </TableCell>
                        <TableCell>{formatDate(invoice.issuedDate)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
