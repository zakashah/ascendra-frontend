'use client';

import { useRef, useState } from 'react';
import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { DataFilterBar } from '@/components/custom/data-table/data-filter-bar';
import { Highlight } from '@/components/custom/data-table/highlight';
import { TableEmptyBody } from '@/components/custom/data-table/table-empty-body';
import { TableLoadingBody } from '@/components/custom/data-table/table-loading-body';
import { SortIcon } from '@/components/custom/data-table/sort-icon';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';
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
  InputGroupButton,
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
import { useFilter } from '@/hooks/use-filter';
import { useInvoiceList } from '@/hooks/use-invoices';
import { usePagination } from '@/hooks/use-pagination';
import { useSearch } from '@/hooks/use-search';
import { useSort } from '@/hooks/use-sort';
import { type ColumnDef } from '@/lib/table';
import { cn } from '@/lib/utils';
import { type Invoice, type InvoiceStatus } from '@/types/invoice';
import {
  LuArrowDown,
  LuArrowUp,
  LuArrowUpDown,
  LuEraser,
  LuFilter,
  LuLock,
  LuSearch,
  LuSettings,
} from 'react-icons/lu';
import { RiDraggable } from 'react-icons/ri';

const statusBadgeVariant: Record<InvoiceStatus, 'green' | 'amber' | 'red'> = {
  paid: 'green',
  pending: 'amber',
  overdue: 'red',
  cancelled: 'red',
};

const statusLabel: Record<InvoiceStatus, string> = {
  paid: 'Paid',
  pending: 'Pending',
  overdue: 'Overdue',
  cancelled: 'Cancelled',
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

// --- Columns ---

const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  { key: 'invoiceNumber', label: 'Invoice #', freeze: true },
  { key: 'clientName', label: 'Client', filter: true },
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'dueDate', label: 'Due Date', type: 'date' },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    locked: true,
    filter: true,
    displayValue: (raw) => statusLabel[raw as InvoiceStatus] ?? raw,
  },
  { key: 'issuedAt', label: 'Issued', type: 'date', active: false },
];

// --- Component ---

export default function TableUsagePage() {
  const [columns, setColumns] = useState(() => INVOICE_COLUMNS);
  const dragKeyRef = useRef<string | null>(null);
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);
  const [searchHovered, setSearchHovered] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  function toggleColumnActive(key: string) {
    setColumns((prev) =>
      prev.map((col) =>
        String(col.key) === key
          ? { ...col, active: col.active === false ? true : false }
          : col
      )
    );
  }

  function reorderColumns(fromKey: string, toKey: string) {
    setColumns((prev) => {
      const result = [...prev];
      const fromIdx = result.findIndex((c) => String(c.key) === fromKey);
      const toIdx = result.findIndex((c) => String(c.key) === toKey);
      if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return prev;
      const [moved] = result.splice(fromIdx, 1);
      result.splice(toIdx, 0, moved);
      return result;
    });
  }

  const { data, isLoading } = useInvoiceList();
  const invoices = data?.data ?? [];

  const {
    searchTerm,
    setSearchTerm,
    filteredData: searchedInvoices,
  } = useSearch(invoices, columns);

  const {
    filters,
    addFilter,
    setFilterValue,
    removeFilter,
    clearFilters,
    getOptionsFor,
    filteredData: filteredInvoices,
  } = useFilter(searchedInvoices);

  const filterableColumns = columns.filter((col) => col.filter === true);

  const {
    sortConfig,
    handleSort,
    clearSort,
    sortedData: sortedInvoices,
  } = useSort(filteredInvoices, columns);

  const { paginatedData: pagedInvoices, ...pagination } =
    usePagination(sortedInvoices);

  function isColSortable(key: string) {
    return columns.find((c) => String(c.key) === key)?.sortable !== false;
  }

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
                  <InputGroup
                    className="max-w-xs"
                    onMouseEnter={() => setSearchHovered(true)}
                    onMouseLeave={() => setSearchHovered(false)}
                  >
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                    <InputGroupInput
                      placeholder="Search..."
                      className="w-65"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                    <InputGroupAddon
                      align="inline-end"
                      className={cn(
                        'transition-opacity',
                        searchTerm && searchHovered && !searchFocused
                          ? 'opacity-100'
                          : 'pointer-events-none opacity-0'
                      )}
                    >
                      <InputGroupButton onClick={() => setSearchTerm('')}>
                        <LuEraser className="size-3.5" />
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary" className="w-8 px-0 sm:w-auto sm:px-3">
                        <LuSettings />
                        <span className="hidden sm:inline">Columns</span>
                        <DropDownChevron className="hidden sm:block" />
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
                      {columns
                        .filter((col) => col.active !== false)
                        .map((col) => {
                          const canDrag = !col.locked && !col.freeze;
                          const isDropTarget =
                            canDrag && dragOverKey === String(col.key);
                          return (
                            <div
                              key={String(col.key)}
                              draggable={canDrag}
                              onDragStart={(e) => {
                                dragKeyRef.current = String(col.key);
                                e.dataTransfer.effectAllowed = 'move';
                              }}
                              onDragOver={(e) => {
                                if (!canDrag || !dragKeyRef.current) return;
                                e.preventDefault();
                                e.dataTransfer.dropEffect = 'move';
                                setDragOverKey(String(col.key));
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                if (dragKeyRef.current && canDrag) {
                                  reorderColumns(
                                    dragKeyRef.current,
                                    String(col.key)
                                  );
                                }
                                setDragOverKey(null);
                              }}
                              onDragEnd={() => {
                                dragKeyRef.current = null;
                                setDragOverKey(null);
                              }}
                              className={`animate-in fade-in flex items-center justify-between overflow-hidden px-3 py-1 duration-150 ${isDropTarget ? 'border-primary border-t-2' : ''}`}
                            >
                              <div className="flex items-center gap-2">
                                <Checkbox
                                  disabled={col.freeze}
                                  checked
                                  onCheckedChange={() =>
                                    toggleColumnActive(String(col.key))
                                  }
                                />
                                <div className="mt-1">{col.label}</div>
                              </div>
                              {col.locked || col.freeze ? (
                                <LuLock className="text-muted-foreground size-2.5 stroke-3" />
                              ) : (
                                <RiDraggable className="text-muted-foreground -mr-0.5 cursor-grab active:cursor-grabbing" />
                              )}
                            </div>
                          );
                        })}
                      {columns.some((col) => col.active === false) && (
                        <>
                          <DropdownMenuSeparator />
                          <div className="text-muted-foreground px-3 py-1 text-xs">
                            Available columns
                          </div>
                          {columns
                            .filter((col) => col.active === false)
                            .map((col) => (
                              <div
                                key={String(col.key)}
                                className="animate-in fade-in flex items-center justify-between overflow-hidden px-3 py-1 duration-150"
                              >
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={false}
                                    onCheckedChange={() =>
                                      toggleColumnActive(String(col.key))
                                    }
                                  />
                                  <div className="mt-1">{col.label}</div>
                                </div>
                              </div>
                            ))}
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary" className="w-8 px-0 sm:w-auto sm:px-3">
                        <LuArrowUpDown className="sm:hidden" />
                        <span className="hidden font-normal sm:inline">Sort by:</span>
                        <span
                          className={cn(
                            'hidden sm:inline',
                            sortConfig
                              ? 'font-medium'
                              : 'text-muted-foreground font-normal'
                          )}
                        >
                          {sortConfig
                            ? (columns.find((c) => c.key === sortConfig.key)?.label ?? String(sortConfig.key))
                            : 'None'}
                        </span>
                        <DropDownChevron className="hidden sm:block" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <DropdownMenuItem
                        className={cn(!sortConfig && 'font-medium')}
                        onClick={clearSort}
                      >
                        None
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {columns
                        .filter((col) => col.sortable !== false)
                        .map((col) => (
                          <DropdownMenuItem
                            key={String(col.key)}
                            className={cn(sortConfig?.key === col.key && 'font-medium')}
                            onClick={() => handleSort(col.key)}
                          >
                            {col.label}
                            {sortConfig?.key === col.key && (
                              sortConfig.direction === 'asc' ? (
                                <LuArrowUp className="ml-auto size-3 shrink-0" />
                              ) : (
                                <LuArrowDown className="ml-auto size-3 shrink-0" />
                              )
                            )}
                          </DropdownMenuItem>
                        ))}
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
                      className="w-44"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      {filterableColumns.map((col) => {
                        const active = filters.some((f) => f.key === String(col.key));
                        return (
                          <DropdownMenuItem
                            key={String(col.key)}
                            disabled={active}
                            onClick={() => addFilter(String(col.key))}
                          >
                            {col.label}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </PageBarContent>
                <PageBarAction>
                  <Button>+ Add item</Button>
                </PageBarAction>
              </PageBar>
              <DataFilterBar
                filters={filters}
                columns={columns}
                getOptionsFor={getOptionsFor}
                onChange={setFilterValue}
                onRemove={removeFilter}
                onClearAll={clearFilters}
              />
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow columns={columns}>
                      <TableHead
                        colKey="invoiceNumber"
                        className={cn(
                          isColSortable('invoiceNumber') &&
                            'group/sort cursor-pointer select-none'
                        )}
                        onClick={
                          isColSortable('invoiceNumber')
                            ? () => handleSort('invoiceNumber')
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1.5">
                          Invoice #
                          <SortIcon
                            sortConfig={sortConfig}
                            column="invoiceNumber"
                            sortable={isColSortable('invoiceNumber')}
                          />
                        </div>
                      </TableHead>
                      <TableHead
                        colKey="clientName"
                        className={cn(
                          isColSortable('clientName') &&
                            'group/sort cursor-pointer select-none'
                        )}
                        onClick={
                          isColSortable('clientName')
                            ? () => handleSort('clientName')
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1.5">
                          Client
                          <SortIcon
                            sortConfig={sortConfig}
                            column="clientName"
                            sortable={isColSortable('clientName')}
                          />
                        </div>
                      </TableHead>
                      <TableHead
                        colKey="status"
                        className={cn(
                          isColSortable('status') &&
                            'group/sort cursor-pointer select-none'
                        )}
                        onClick={
                          isColSortable('status')
                            ? () => handleSort('status')
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1.5">
                          Status
                          <SortIcon
                            sortConfig={sortConfig}
                            column="status"
                            sortable={isColSortable('status')}
                          />
                        </div>
                      </TableHead>
                      <TableHead
                        colKey="amount"
                        className={cn(
                          isColSortable('amount') &&
                            'group/sort cursor-pointer select-none'
                        )}
                        onClick={
                          isColSortable('amount')
                            ? () => handleSort('amount')
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1.5">
                          Amount
                          <SortIcon
                            sortConfig={sortConfig}
                            column="amount"
                            sortable={isColSortable('amount')}
                          />
                        </div>
                      </TableHead>
                      <TableHead
                        colKey="dueDate"
                        className={cn(
                          isColSortable('dueDate') &&
                            'group/sort cursor-pointer select-none'
                        )}
                        onClick={
                          isColSortable('dueDate')
                            ? () => handleSort('dueDate')
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1.5">
                          Due Date
                          <SortIcon
                            sortConfig={sortConfig}
                            column="dueDate"
                            sortable={isColSortable('dueDate')}
                          />
                        </div>
                      </TableHead>
                      <TableHead
                        colKey="issuedAt"
                        className={cn(
                          isColSortable('issuedAt') &&
                            'group/sort cursor-pointer select-none'
                        )}
                        onClick={
                          isColSortable('issuedAt')
                            ? () => handleSort('issuedAt')
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1.5">
                          Issued
                          <SortIcon
                            sortConfig={sortConfig}
                            column="issuedAt"
                            sortable={isColSortable('issuedAt')}
                          />
                        </div>
                      </TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  {!isLoading && pagedInvoices.length > 0 && (
                    <TableBody>
                      {pagedInvoices.map((invoice) => (
                        <TableRow key={invoice.id} columns={columns}>
                          <TableCell colKey="invoiceNumber">
                            <div>
                              <div className="font-medium">
                                <Highlight
                                  text={invoice.invoiceNumber}
                                  query={searchTerm}
                                />
                              </div>
                              <div className="text-muted-foreground text-xs">
                                <Highlight
                                  text={invoice.title}
                                  query={searchTerm}
                                />
                              </div>
                            </div>
                          </TableCell>
                          <TableCell colKey="clientName">
                            <div className="font-medium">
                              <Highlight
                                text={invoice.clientName}
                                query={searchTerm}
                              />
                            </div>
                          </TableCell>
                          <TableCell colKey="status">
                            <SimpleBadge
                              variant={statusBadgeVariant[invoice.status]}
                            >
                              {statusLabel[invoice.status]}
                            </SimpleBadge>
                          </TableCell>
                          <TableCell colKey="amount">
                            <Highlight
                              text={formatAmount(invoice.amount)}
                              query={searchTerm}
                            />
                          </TableCell>
                          <TableCell colKey="dueDate">
                            <Highlight
                              text={formatDate(invoice.dueDate)}
                              query={searchTerm}
                            />
                          </TableCell>
                          <TableCell colKey="issuedAt">
                            <Highlight
                              text={formatDate(invoice.issuedAt)}
                              query={searchTerm}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )}
                </Table>
                {isLoading && <TableLoadingBody />}
                {!isLoading && sortedInvoices.length === 0 && (
                  <TableEmptyBody />
                )}
                <TableFoot pagination={pagination} />
              </TableWrapper>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
