'use client';

import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { DataFilterBar } from '@/components/custom/data-table/data-filter-bar';
import { DataTableBody } from '@/components/custom/data-table/data-table-body';
import { DataTableCell } from '@/components/custom/data-table/data-table-cell';
import { DataTableFoot } from '@/components/custom/data-table/data-table-foot';
import { DataTableHead } from '@/components/custom/data-table/data-table-head';
import { DataTableHeaderRow } from '@/components/custom/data-table/data-table-header-row';
import { DataTableRow } from '@/components/custom/data-table/data-table-row';
import { Highlight } from '@/components/custom/data-table/highlight';
import { TableColumnManager } from '@/components/custom/data-table/table-column-manager';
import { TableEmptyBody } from '@/components/custom/data-table/table-empty-body';
import { TableFilterDropdown } from '@/components/custom/data-table/table-filter-dropdown';
import { TableLoadingBody } from '@/components/custom/data-table/table-loading-body';
import { TableSearchInput } from '@/components/custom/data-table/table-search-input';
import { TableSortDropdown } from '@/components/custom/data-table/table-sort-dropdown';
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
import { Table, TableHeader, TableWrapper } from '@/components/custom/ui/table';
import { DataTableProvider } from '@/hooks/use-data-table';
import { useInvoiceList } from '@/hooks/use-invoices';
import { type ColumnDef } from '@/lib/table';
import { formatAmount, formatDate } from '@/lib/format';
import { type Invoice, type InvoiceStatus } from '@/types/invoice';

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

const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  { key: 'invoiceNumber', label: 'Invoice #', freeze: true },
  { key: 'clientName', label: 'Client', filter: true, freeze: true },
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'dueDate', label: 'Due Date', type: 'date' },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    filter: true,
    displayValue: (raw) => statusLabel[raw as InvoiceStatus] ?? raw,
  },
  { key: 'issuedAt', label: 'Issued', type: 'date', active: false },
];

export default function TableUsagePage() {
  const { data, isLoading } = useInvoiceList();

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
            <TabTrigger value="tab">Tab</TabTrigger>
          </TabList>
          <TabContent value="table-usage">
            <MainContent>
              <DataTableProvider
                data={data?.data ?? []}
                columns={INVOICE_COLUMNS}
                isLoading={isLoading}
              >
                <PageBar>
                  <PageBarContent>
                    <TableSearchInput />
                    <TableColumnManager />
                    <TableSortDropdown />
                    <TableFilterDropdown />
                  </PageBarContent>
                  <PageBarAction>
                    <Button>+ Add item</Button>
                  </PageBarAction>
                </PageBar>
                <DataFilterBar />
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <DataTableHeaderRow>
                        <DataTableHead column="invoiceNumber">
                          Invoice #
                        </DataTableHead>
                        <DataTableHead column="clientName">
                          Client
                        </DataTableHead>
                        <DataTableHead column="status" />
                        <DataTableHead column="amount" />
                        <DataTableHead column="dueDate" />
                        <DataTableHead column="issuedAt" />
                      </DataTableHeaderRow>
                    </TableHeader>
                    <DataTableBody>
                      {(row: Invoice) => (
                        <DataTableRow key={row.id}>
                          <DataTableCell column="invoiceNumber">
                            <div>
                              <div className="font-medium">
                                <Highlight
                                  text={row.invoiceNumber}
                                  item={row}
                                  itemKey="invoiceNumber"
                                />
                              </div>
                              <div className="text-muted-foreground text-xs">
                                <Highlight
                                  text={row.title}
                                  item={row}
                                  itemKey="title"
                                />
                              </div>
                            </div>
                          </DataTableCell>
                          <DataTableCell column="clientName">
                            <div className="font-medium">
                              <Highlight
                                text={row.clientName}
                                item={row}
                                itemKey="clientName"
                              />
                            </div>
                          </DataTableCell>
                          <DataTableCell column="status">
                            <SimpleBadge
                              variant={statusBadgeVariant[row.status]}
                            >
                              {statusLabel[row.status]}
                            </SimpleBadge>
                          </DataTableCell>
                          <DataTableCell column="amount">
                            {formatAmount(row.amount)}
                          </DataTableCell>
                          <DataTableCell column="dueDate">
                            {formatDate(row.dueDate)}
                          </DataTableCell>
                          <DataTableCell column="issuedAt">
                            {formatDate(row.issuedAt)}
                          </DataTableCell>
                        </DataTableRow>
                      )}
                    </DataTableBody>
                  </Table>
                  <TableLoadingBody />
                  <TableEmptyBody />
                  <DataTableFoot />
                </TableWrapper>
              </DataTableProvider>
            </MainContent>
          </TabContent>
          <TabContent value="tab">
            <MainContent>another tab</MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
