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

export interface QueryDef {
  id: string;
  title: string;
  description: string;
  params?: FieldDef[];
}

export const PRESET_QUERIES: QueryDef[] = [
  {
    id: 'all-active',
    title: 'All Active Invoices',
    description: 'Currently pending or overdue',
  },
  {
    id: 'last-3-months',
    title: 'Last 3 Months',
    description: 'Invoices from the past 90 days',
  },
  {
    id: 'pending',
    title: 'Pending Invoices',
    description: 'Awaiting payment',
  },
  {
    id: 'overdue',
    title: 'Overdue Invoices',
    description: 'Past due date',
  },
  {
    id: 'by-status',
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
          { value: 'paid',      label: 'Paid' },
          { value: 'pending',   label: 'Pending' },
          { value: 'overdue',   label: 'Overdue' },
          { value: 'cancelled', label: 'Cancelled' },
        ],
      },
    ],
  },
  {
    id: 'by-date-range',
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
  {
    id: 'all',
    title: 'All Invoices',
    description: 'Complete invoice history',
  },
];
