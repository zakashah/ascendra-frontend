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

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  description?: string;
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
    id: 'pending',
    group: 'query',
    title: 'Pending Invoices',
    description: 'Awaiting payment',
  },
  {
    id: 'overdue',
    group: 'query',
    title: 'Overdue Invoices',
    description: 'Past due date',
  },
  {
    id: 'all',
    group: 'query',
    title: 'All Invoices',
    description: 'Complete invoice history',
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
        span: 2,
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
        span: 2,
      },
    ],
  },
];
