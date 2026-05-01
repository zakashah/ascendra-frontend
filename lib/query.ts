import type { DateRange } from 'react-day-picker';

export type FieldType =
  | 'text'
  | 'number'
  | 'select'
  | 'multiselect'
  | 'date'
  | 'daterange'
  | 'checkbox'
  | 'radio';

export interface SelectOption {
  value: string;
  label: string;
}

export interface ColumnsConfig {
  sm?: number;
  md?: number;
  lg?: number;
}

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  /** Subtitle shown below the label in text-xs (above the input) */
  info?: string;
  /** Helper text shown below the input */
  description?: string;
  /** Shows a red "Mandatory" badge next to the description */
  mandatory?: boolean;
  /** Shows a gray "Optional" badge next to the description */
  optional?: boolean;
  span?: 1 | 2 | 'full';
  options?: SelectOption[];
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

export type QueryParamValues = Record<
  string,
  string | number | boolean | Date | DateRange | string[] | undefined
>;

export type QueryGroup = 'query' | 'user-query' | 'filter';

export interface QueryDef {
  id: string;
  title: string;
  description: string;
  group: QueryGroup;
  /** Rendered in MainSectionFooter when present */
  info?: string;
  /** Grid column count per breakpoint — defaults to sm:1, md:1, lg:1 */
  columns?: ColumnsConfig;
  params?: FieldDef[];
}

export const PRESET_QUERIES: QueryDef[] = [
  {
    id: 'all-active',
    group: 'query',
    title: 'All Active Invoices',
    description: 'Currently pending or overdue',
  },
  {
    id: 'last-3-months',
    group: 'query',
    title: 'Last 3 Months',
    description: 'Invoices from the past 90 days',
  },
  {
    id: 'user-high-value',
    group: 'user-query',
    title: 'High Value Invoices',
    description: 'Invoices above PKR 50,000',
  },
  {
    id: 'user-class-10',
    group: 'user-query',
    title: 'Class 10 Fees',
    description: 'All fee invoices for class 10 students',
  },
  {
    id: 'by-status',
    group: 'filter',
    title: 'Invoices by Status',
    description: 'Filter invoices by one or more statuses',
    params: [
      {
        name: 'statuses',
        label: 'Statuses',
        type: 'multiselect',
        required: true,
        span: 1,
        options: [
          { value: 'paid', label: 'Paid' },
          { value: 'pending', label: 'Pending' },
          { value: 'overdue', label: 'Overdue' },
          { value: 'cancelled', label: 'Cancelled' },
        ],
      },
    ],
  },
  {
    id: 'by-date-range',
    group: 'filter',
    title: 'Invoices by Date Range',
    description: 'Filter by custom issue date window',
    params: [
      {
        name: 'dateRange',
        label: 'Date Range',
        type: 'daterange',
        required: true,
        span: 1,
      },
    ],
  },
  {
    id: 'advanced-filter',
    group: 'filter',
    title: 'Advanced Invoice Filter',
    description: 'Comprehensive filter covering all parameter types',
    info: 'All active filters use AND logic — results must match every condition you set.',
    columns: { sm: 1, md: 2, lg: 3 },
    params: [
      {
        name: 'clientName',
        label: 'Client Name',
        type: 'text',
        placeholder: 'e.g. Ahmed Family',
        required: false,
        minLength: 2,
        maxLength: 50,
        info: 'Partial match',
        description: 'Matches any part of the client display name',
        mandatory: true
      },
      {
        name: 'invoiceNumber',
        label: 'Invoice Number',
        type: 'text',
        placeholder: 'INV-001',
        required: true,
        maxLength: 20,
        info: 'Exact reference match',
      },
      {
        name: 'minAmount',
        label: 'Min Amount (PKR)',
        type: 'number',
        placeholder: '0',
        required: false,
        min: 0,
        max: 9999999,
        info: 'Inclusive lower bound',
        optional: true
      },
      {
        name: 'maxAmount',
        label: 'Max Amount (PKR)',
        type: 'number',
        placeholder: '500,000',
        required: true,
        min: 1,
        max: 9999999,
        info: 'Inclusive upper bound',
      },
      {
        name: 'primaryStatus',
        label: 'Invoice Status',
        type: 'select',
        required: true,
        options: [
          { value: 'paid', label: 'Paid' },
          { value: 'pending', label: 'Pending' },
          { value: 'overdue', label: 'Overdue' },
          { value: 'cancelled', label: 'Cancelled' },
        ],
      },
      {
        name: 'feeCategories',
        label: 'Fee Categories',
        type: 'multiselect',
        required: true,
        span: 2,
        info: 'Select all that apply',
        options: [
          { value: 'tuition', label: 'Tuition' },
          { value: 'transport', label: 'Transport' },
          { value: 'uniform', label: 'Uniform' },
          { value: 'exam', label: 'Exam Fee' },
          { value: 'activity', label: 'Activity Fee' },
        ],
      },
      {
        name: 'issuedFrom',
        label: 'Issued From',
        type: 'date',
        required: true,
        info: 'Inclusive start date',
        description: 'Shows invoices issued on or after this date',
      },
      {
        name: 'dueDateRange',
        label: 'Due Date Range',
        type: 'daterange',
        required: false,
        span: 2,
        info: 'Optional date window',
        description: 'Optionally narrow results by due date window',
      },
      {
        name: 'sortOrder',
        label: 'Sort Order',
        type: 'radio',
        required: true,
        options: [
          { value: 'newest', label: 'Newest First' },
          { value: 'oldest', label: 'Oldest First' },
          { value: 'highest', label: 'Highest Amount' },
          { value: 'lowest', label: 'Lowest Amount' },
        ],
      },
      {
        name: 'includeArchived',
        label: 'Include Archived',
        type: 'checkbox',
        description: 'Include archived invoices in results',
      },
    ],
  },
];
