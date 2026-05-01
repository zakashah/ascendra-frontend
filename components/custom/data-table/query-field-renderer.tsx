'use client';

import { useFormContext, Controller } from 'react-hook-form';
import type { DateRange } from 'react-day-picker';

import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from '@/components/custom/ui/field';
import { Input } from '@/components/custom/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/custom/ui/select';
import {
  Combobox,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from '@/components/custom/ui/combobox';

// Base UI's Chip uses a `value` prop at runtime but the TS type doesn't expose it
const ComboboxChipItem = ComboboxChip as React.ComponentType<
  React.ComponentProps<typeof ComboboxChip> & { value: string }
>;
import { DatePicker } from '@/components/custom/ui/date-picker';
import { DateRangePicker } from '@/components/custom/ui/date-range-picker';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import type { FieldDef } from '@/lib/query';

interface QueryFieldRendererProps {
  field: FieldDef;
}

export function QueryFieldRenderer({ field }: QueryFieldRendererProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[field.name];
  const inputId = `qf-${field.name}`;
  const labelId = `qf-${field.name}-label`;

  return (
    <Field data-invalid={error ? 'true' : undefined}>

      {/* Label — checkbox renders its own inline label */}
      {field.type !== 'checkbox' && (
        <FieldLabel id={labelId} htmlFor={inputId}>
          {field.label}
          {field.required && (
            <span className="text-destructive ml-0.5" aria-hidden>*</span>
          )}
        </FieldLabel>
      )}

      {/* ── text ─────────────────────────────────────────────────────── */}
      {field.type === 'text' && (
        <Input
          id={inputId}
          full
          placeholder={field.placeholder}
          aria-invalid={!!error}
          {...register(field.name)}
        />
      )}

      {/* ── number ───────────────────────────────────────────────────── */}
      {field.type === 'number' && (
        <Input
          id={inputId}
          full
          type="number"
          placeholder={field.placeholder}
          aria-invalid={!!error}
          {...register(field.name, { valueAsNumber: true })}
        />
      )}

      {/* ── select ───────────────────────────────────────────────────── */}
      {field.type === 'select' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <Select value={f.value ?? ''} onValueChange={f.onChange}>
              <SelectTrigger id={inputId} className="w-full">
                <SelectValue
                  placeholder={field.placeholder ?? `Select ${field.label}`}
                />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      )}

      {/* ── multiselect ──────────────────────────────────────────────── */}
      {field.type === 'multiselect' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => {
            const selected: string[] = f.value ?? [];
            return (
              <Combobox
                multiple
                value={selected}
                onValueChange={f.onChange}
              >
                <ComboboxChips aria-invalid={!!error || undefined}>
                  {selected.map((val) => {
                    const opt = field.options?.find((o) => o.value === val);
                    return (
                      <ComboboxChipItem key={val} value={val}>
                        {opt?.label ?? val}
                      </ComboboxChipItem>
                    );
                  })}
                  <ComboboxChipsInput
                    placeholder={
                      selected.length
                        ? ''
                        : (field.placeholder ?? `Select ${field.label}…`)
                    }
                  />
                </ComboboxChips>
                <ComboboxContent>
                  <ComboboxList>
                    {field.options?.map((opt) => (
                      <ComboboxItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            );
          }}
        />
      )}

      {/* ── date ─────────────────────────────────────────────────────── */}
      {field.type === 'date' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <DatePicker
              value={f.value as Date | undefined}
              onChange={f.onChange}
              placeholder={field.placeholder ?? 'Pick a date'}
            />
          )}
        />
      )}

      {/* ── daterange ────────────────────────────────────────────────── */}
      {field.type === 'daterange' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <DateRangePicker
              value={f.value as DateRange | undefined}
              onChange={f.onChange}
              placeholder={field.placeholder ?? 'Pick a date range'}
            />
          )}
        />
      )}

      {/* ── checkbox ─────────────────────────────────────────────────── */}
      {field.type === 'checkbox' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <Field orientation="horizontal">
              <Checkbox
                id={inputId}
                checked={f.value as boolean}
                onCheckedChange={f.onChange}
                aria-invalid={!!error}
              />
              <FieldLabel htmlFor={inputId} className="cursor-pointer font-normal">
                {field.label}
                {field.required && (
                  <span className="text-destructive ml-0.5" aria-hidden>*</span>
                )}
              </FieldLabel>
            </Field>
          )}
        />
      )}

      {/* ── radio ────────────────────────────────────────────────────── */}
      {field.type === 'radio' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <RadioGroup
              value={f.value ?? ''}
              onValueChange={f.onChange}
              aria-labelledby={labelId}
              className="grid-cols-2 gap-y-1.5"
            >
              {field.options?.map((opt) => (
                <Field key={opt.value} orientation="horizontal" className="items-center">
                  <RadioGroupItem
                    value={opt.value}
                    id={`${inputId}-${opt.value}`}
                  />
                  <FieldLabel
                    htmlFor={`${inputId}-${opt.value}`}
                    className="cursor-pointer font-normal"
                  >
                    {opt.label}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          )}
        />
      )}

      {field.description && (
        <FieldDescription>{field.description}</FieldDescription>
      )}

      <FieldError errors={error ? [error as { message?: string }] : []} />
    </Field>
  );
}
