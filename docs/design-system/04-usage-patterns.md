# Design System — Usage Patterns

Recipes for composing the three most common page types in the app. Follow these patterns exactly when building new pages to stay consistent.

---

## Pattern 1: Table Page (List View)

Used for: Invoice list, Payment history, Student list, Parent list, School list.

```tsx
'use client';

import {
  PageBar,
  PageBarContent,
  PageBarAction,
} from '@/components/custom/layout/page-bar';
import {
  PageHeader,
  PageTitle,
  PageSubTitle,
  PageHeaderGroup,
  PageHeaderAction,
} from '@/components/custom/layout/page-header';
import { PageContent, PageMain } from '@/components/custom/layout/page-content';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { Button } from '@/components/custom/input/button';
import { Input } from '@/components/custom/input/input';
import { PaginationButton } from '@/components/custom/common-ui/pagination-button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { PlusIcon, SearchIcon, MoreHorizontalIcon } from 'lucide-react';

export default function InvoicesPage() {
  return (
    <>
      <TableBar>
        <PageBarContent>All Invoices</DataTableBarContent>
        <DataTableBarAction>
          {/* Optional: quick filters or secondary nav */}
        </DataTableBarAction>
      </TableBar>

      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Invoices</PageTitle>
          <PageSubTitle>Manage and track all school fee invoices</PageSubTitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <Button variant="primary" size="default">
            <PlusIcon />
            New Invoice
          </Button>
        </PageHeaderAction>
      </PageHeader>

      <PageContent>
        <PageMain>
          {/* Search + filter bar */}
          <div className="flex items-center justify-between gap-3 pb-4">
            <div className="relative">
              <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
              <Input placeholder="Search invoices..." className="w-64 pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                Filter
              </Button>
              <Button variant="secondary" size="sm">
                Export
              </Button>
            </div>
          </div>

          {/* Data table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>School</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead /> {/* Actions column — no label */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">
                    {invoice.number}
                  </TableCell>
                  <TableCell>{invoice.student}</TableCell>
                  <TableCell>{invoice.school}</TableCell>
                  <TableCell>PKR {invoice.amount.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {invoice.dueDate}
                  </TableCell>
                  <TableCell>
                    <SimpleBadge variant={statusVariant(invoice.status)}>
                      {invoice.status}
                    </SimpleBadge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-muted-foreground"
                        >
                          <MoreHorizontalIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <span className="text-muted-foreground text-sm">
              Showing 1–20 of 143
            </span>
            <PaginationButton />
          </div>
        </PageMain>
      </PageContent>
    </>
  );
}

// Map status strings to SimpleBadge variants
function statusVariant(status: string) {
  const map: Record<string, 'green' | 'orange' | 'secondary' | 'default'> = {
    Paid: 'green',
    Pending: 'orange',
    Overdue: 'orange',
    Cancelled: 'secondary',
    Draft: 'default',
  };
  return map[status] ?? 'secondary';
}
```

---

## Pattern 2: Settings Page

Used for: School settings, Billing config, Notification preferences, Invoice defaults.

```tsx
'use client';

import {
  PageHeader,
  PageTitle,
  PageSubTitle,
  PageHeaderGroup,
} from '@/components/custom/layout/page-header';
import { PageContent, PageMain } from '@/components/custom/layout/page-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/custom/input/input';
import { Button } from '@/components/custom/input/button';

export default function InvoiceSettingsPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Invoice Settings</PageTitle>
          <PageSubTitle>
            Configure defaults for invoice generation and delivery
          </PageSubTitle>
        </PageHeaderGroup>
      </PageHeader>

      <PageContent>
        <PageMain>
          {/* Section 1: General */}
          <MainSection>
            <MainSectionHeader
              title="General"
              description="Basic invoice configuration"
            />
            <MainSectionPanel>
              <MainSectionPanelItem
                label="Invoice prefix"
                description="Prefix added to all invoice numbers (e.g. INV-001)"
              >
                <Input defaultValue="INV" className="w-24" />
              </MainSectionPanelItem>
              <MainSectionPanelItem
                label="Default currency"
                description="Currency used for all invoices"
              >
                <Select defaultValue="PKR">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PKR">PKR</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectContent>
                </Select>
              </MainSectionPanelItem>
            </MainSectionPanel>
            <MainSectionFooter>
              <Button variant="primary" size="sm">
                Save
              </Button>
            </MainSectionFooter>
          </MainSection>

          {/* Section 2: Notifications */}
          <MainSection>
            <MainSectionHeader
              title="Notifications"
              description="Control automated emails and reminders"
            />
            <MainSectionPanel>
              <MainSectionPanelItem
                label="Send payment receipts"
                description="Email parents automatically when payment is confirmed"
              >
                <Switch defaultChecked />
              </MainSectionPanelItem>
              <MainSectionPanelItem
                label="Overdue reminders"
                description="Send reminder emails when invoices are past due date"
              >
                <Switch />
              </MainSectionPanelItem>
              <MainSectionPanelItem
                label="Reminder frequency"
                description="How often to send overdue reminders"
              >
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </MainSectionPanelItem>
            </MainSectionPanel>
            <MainSectionFooter>
              <Button variant="primary" size="sm">
                Save
              </Button>
            </MainSectionFooter>
          </MainSection>
        </PageMain>
      </PageContent>
    </>
  );
}
```

---

## Pattern 3: Form Page (Create/Edit)

Used for: Create invoice, Add student, Add school, Edit parent profile.

```tsx
'use client';

import {
  PageHeader,
  PageTitle,
  PageSubTitle,
  PageHeaderGroup,
  PageHeaderAction,
} from '@/components/custom/layout/page-header';
import { PageContent, PageMain } from '@/components/custom/layout/page-content';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from '@/components/ui/field';
import { Input } from '@/components/custom/input/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/custom/input/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  studentName: z.string().min(1, 'Student name is required'),
  parentEmail: z.string().email('Invalid email'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  term: z.string().min(1, 'Please select a term'),
  notes: z.string().optional(),
});

export default function CreateInvoicePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>New Invoice</PageTitle>
          <PageSubTitle>Create a fee invoice for a student</PageSubTitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <Button variant="secondary" size="default">
            Cancel
          </Button>
        </PageHeaderAction>
      </PageHeader>

      <PageContent>
        <PageMain>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl">
            <Card>
              <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
              </CardHeader>
              <CardContent>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="studentName">Student name</FieldLabel>
                    <Input
                      id="studentName"
                      placeholder="Ali Hassan"
                      aria-invalid={!!errors.studentName}
                      {...register('studentName')}
                    />
                    <FieldError>{errors.studentName?.message}</FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="parentEmail">Parent email</FieldLabel>
                    <Input
                      id="parentEmail"
                      type="email"
                      placeholder="parent@email.com"
                      aria-invalid={!!errors.parentEmail}
                      {...register('parentEmail')}
                    />
                    <FieldDescription>
                      Invoice will be sent to this address
                    </FieldDescription>
                    <FieldError>{errors.parentEmail?.message}</FieldError>
                  </Field>

                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="term">Term</FieldLabel>
                    <Select {...register('term')}>
                      <SelectTrigger id="term">
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="term1">Term 1</SelectItem>
                        <SelectItem value="term2">Term 2</SelectItem>
                        <SelectItem value="term3">Term 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldError>{errors.term?.message}</FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="amount">Amount (PKR)</FieldLabel>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="15000"
                      aria-invalid={!!errors.amount}
                      {...register('amount', { valueAsNumber: true })}
                    />
                    <FieldError>{errors.amount?.message}</FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="notes">Notes (optional)</FieldLabel>
                    <Textarea
                      id="notes"
                      placeholder="Additional fee details..."
                      {...register('notes')}
                    />
                  </Field>
                </FieldGroup>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2">
                  <Button type="submit" variant="primary">
                    Create Invoice
                  </Button>
                  <Button type="button" variant="secondary">
                    Save Draft
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </form>
        </PageMain>
      </PageContent>
    </>
  );
}
```

---

## Component Cheat Sheet

Quick reference for which component to use in which situation:

| Need                        | Use                                                              |
| --------------------------- | ---------------------------------------------------------------- |
| Primary action button       | `Button` from `custom/input/button` with `variant="primary"`     |
| Secondary/cancel button     | `Button` from `custom/input/button` with `variant="secondary"`   |
| Dangerous action (delete)   | `Button` from `custom/input/button` with `variant="destructive"` |
| Ghost/icon toolbar button   | `Button` from `ui/button` with `variant="ghost"`                 |
| Status label (paid/pending) | `SimpleBadge` from `custom/common-ui/simple-badge`               |
| Count indicator             | `BubbleBadge` from `custom/common-ui/bubble-badge`               |
| Tiny status dot             | `StatusDot` from `custom/common-ui/status-dot`                   |
| Text input                  | `Input` from `custom/input/input`                                |
| Multiline input             | `Textarea` from `ui/textarea`                                    |
| Dropdown select             | `Select` from `ui/select`                                        |
| Toggle                      | `Switch` from `ui/switch`                                        |
| Checkbox                    | `Checkbox` from `ui/checkbox`                                    |
| Radio options               | `RadioGroup` from `ui/radio-group`                               |
| Form field with label+error | `Field` + `FieldLabel` + `FieldError` from `ui/field`            |
| Multiple form fields        | `FieldGroup` from `ui/field`                                     |
| Data table                  | `Table` + sub-components from `ui/table`                         |
| Row action menu             | `DropdownMenu` from `ui/dropdown-menu`                           |
| Content container           | `Card` from `ui/card`                                            |
| Settings section            | `MainSection` family from `custom/layout/`                       |
| Page title + subtitle       | `PageTitle` + `PageSubTitle` from `custom/layout/`               |
| Page action (top right)     | `PageHeaderAction` from `custom/layout/`                         |
| Empty state                 | `Empty` from `ui/empty`                                          |
| Loading placeholder         | `Skeleton` from `ui/skeleton`                                    |
| Hover info                  | `Tooltip` from `ui/tooltip`                                      |
| Confirmation dialog         | `AlertDialog` from `ui/alert-dialog`                             |

---

## Import Paths Quick Reference

```ts
// Layout
import { PageLayout } from '@/components/custom/layout/page-layout';
import {
  PageHeader,
  PageTitle,
  PageSubTitle,
  PageHeaderGroup,
  PageHeaderAction,
} from '@/components/custom/layout/page-header';
import {
  PageBar,
  PageBarContent,
  PageBarAction,
} from '@/components/custom/layout/page-bar';
import { PageContent, PageMain } from '@/components/custom/layout/page-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainContainer } from '@/components/custom/layout/main-container';
import { SectionMain } from '@/components/custom/layout/section-main';

// Buttons
import { Button } from '@/components/custom/input/button'; // ← use this for CTAs
import { Button } from '@/components/ui/button'; // ← use for ghost/icon/outline

// Badges & Status
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { BubbleBadge } from '@/components/custom/common-ui/bubble-badge';
import { StatusDot } from '@/components/custom/common-ui/status-dot';
import { ProBadge } from '@/components/custom/common-ui/pro-badge';

// Inputs
import { Input } from '@/components/custom/input/input'; // ← use this for forms
import { Input } from '@/components/ui/input'; // ← only in shadcn compositions
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Form Field Composition
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
} from '@/components/ui/field';

// Data Display
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
  TableCaption,
} from '@/components/ui/table';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

// Feedback
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

// Utilities
import { cn } from '@/lib/utils';
```

---

## Common Mistakes to Avoid

1. **Don't use the base `Button` from `ui/button` for primary CTAs.** It has no shadow system. Use `custom/input/button` instead.

2. **Don't hardcode hex colors.** Always use Tailwind tokens: `text-primary`, `bg-muted`, `border-border`, etc.

3. **Don't skip `FieldGroup` and `Field` for forms.** Raw `<label>` + `<input>` pairs will break spacing, error display, and accessibility.

4. **Don't apply `text-bold` or `font-bold`.** The design system uses `font-medium` (500) as the heavy weight.

5. **Don't add custom `border-radius` values.** Use the radius tokens: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-4xl`, `rounded-full`.

6. **Don't use `px-*` on `<Table>`.** Tables handle their own horizontal overflow via `overflow-x-auto` on the container.

7. **Don't forget `aria-invalid` on inputs.** Pass `aria-invalid={!!error}` to trigger the red border + ring style.

8. **Don't use `className` string concatenation.** Always use `cn()` to merge classes.
