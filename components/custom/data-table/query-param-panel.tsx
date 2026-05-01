'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { UnsavedChangesBar } from '@/components/custom/common-ui/unsaved-changes-bar';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { useQueryContext } from '@/hooks/use-query-context';
import type { ColumnsConfig, FieldDef, QueryParamValues } from '@/lib/query';
import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import { IoColorFilterOutline } from 'react-icons/io5';
import { QueryFieldRenderer } from './query-field-renderer';

function buildZodSchema(
  fields: FieldDef[]
): z.ZodObject<Record<string, z.ZodTypeAny>> {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const field of fields) {
    let schema: z.ZodTypeAny;

    switch (field.type) {
      case 'text': {
        let s = z.string();
        if (field.minLength != null)
          s = s.min(
            field.minLength,
            `${field.label} must be at least ${field.minLength} characters`
          );
        if (field.maxLength != null)
          s = s.max(
            field.maxLength,
            `${field.label} cannot exceed ${field.maxLength} characters`
          );
        schema = field.required
          ? s.min(1, `${field.label} is required`)
          : s.optional();
        break;
      }
      case 'number': {
        let s = z.coerce.number({ error: 'Must be a valid number' });
        if (field.min != null)
          s = s.min(field.min, `Must be at least ${field.min}`);
        if (field.max != null)
          s = s.max(field.max, `Cannot exceed ${field.max}`);
        schema = field.required ? s : s.optional();
        break;
      }
      case 'select':
      case 'radio': {
        const s = z.string();
        schema = field.required
          ? s.min(1, `${field.label} is required`)
          : s.optional();
        break;
      }
      case 'multiselect': {
        const s = z.array(z.string());
        schema = field.required
          ? s.min(1, `Select at least one ${field.label}`)
          : s.optional();
        break;
      }
      case 'date': {
        const s = z.date({ error: 'Select a valid date' });
        schema = field.required ? s : s.optional();
        break;
      }
      case 'daterange': {
        const s = z.object({ from: z.date(), to: z.date().optional() });
        schema = field.required ? s : s.optional();
        break;
      }
      case 'checkbox': {
        schema = z.boolean().optional();
        break;
      }
      default: {
        schema = z.unknown().optional();
      }
    }

    shape[field.name] = schema;
  }

  return z.object(shape);
}

function buildDefaultValues(fields: FieldDef[]): Record<string, unknown> {
  const defaults: Record<string, unknown> = {};
  for (const field of fields) {
    switch (field.type) {
      case 'text':
      case 'select':
      case 'radio':
        defaults[field.name] = '';
        break;
      case 'number':
      case 'date':
      case 'daterange':
        defaults[field.name] = undefined;
        break;
      case 'multiselect':
        defaults[field.name] = [];
        break;
      case 'checkbox':
        defaults[field.name] = false;
        break;
    }
  }
  return defaults;
}

// Static lookup tables — template literals would be invisible to Tailwind's scanner
const SM_COLS: Record<number, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
};
const MD_COLS: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};
const LG_COLS: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

function getColumnsClass(columns?: ColumnsConfig): string {
  const cfg = { sm: 1, md: 1, lg: 1, ...columns };
  return cn('grid-cols-1', SM_COLS[cfg.sm], MD_COLS[cfg.md], LG_COLS[cfg.lg]);
}

function getSpanClass(field: FieldDef): string {
  const span = field.span ?? 'full';
  if (span === 'full') return 'col-span-full';
  if (span === 2) return 'col-span-2';
  return 'col-span-1';
}

export function QueryParamPanel() {
  const { activeQuery, lastResult } = useQueryContext();
  const showParamPanel = !!activeQuery.params?.length && lastResult === null;

  if (!showParamPanel) return null;

  return <QueryParamPanelInner key={activeQuery.id} />;
}

function QueryParamPanelInner() {
  const {
    activeQuery,
    setLastResult,
    isLoading,
    setIsLoading,
    confirmPending,
  } = useQueryContext();
  const fields = activeQuery.params!;

  const schema = useMemo(() => buildZodSchema(fields), [fields]);
  const defaultValues = useMemo(() => buildDefaultValues(fields), [fields]);

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onTouched',
  });

  const handleRunQuery = async (): Promise<boolean> => {
    // Trigger all fields so per-field errors surface immediately
    const valid = await methods.trigger();
    if (!valid) return false;

    return new Promise<boolean>((resolve) => {
      methods.handleSubmit((data) => {
        setIsLoading(true);
        setTimeout(() => {
          setLastResult(data as QueryParamValues);
          confirmPending();
          setIsLoading(false);
          resolve(true);
        }, 2000);
      })();
    });
  };

  return (
    <>
      <MainSection>
        <MainSectionHeader>
          <div className="flex items-center gap-2">
            <IoColorFilterOutline className="text-muted-foreground size-5" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{activeQuery.title}</span>
              <p className="text-muted-foreground mt-0.5 text-xs">
                {activeQuery.description}
              </p>
            </div>
          </div>
        </MainSectionHeader>
        <MainSectionPanel>
          <FormProvider {...methods}>
            <form noValidate>
              <MainSectionPanelItem>
                <div
                  className={cn(
                    'grid gap-5',
                    getColumnsClass(activeQuery.columns)
                  )}
                >
                  {fields.map((field) => (
                    <div key={field.name} className={getSpanClass(field)}>
                      <QueryFieldRenderer field={field} />
                    </div>
                  ))}
                </div>
              </MainSectionPanelItem>
            </form>
          </FormProvider>
        </MainSectionPanel>
        {activeQuery.info && (
          <MainSectionFooter>
            <InfoIcon
              className="mt-0.5 mr-2 size-3 shrink-0"
              strokeWidth={2.5}
            />
            {activeQuery.info}
          </MainSectionFooter>
        )}
      </MainSection>

      <UnsavedChangesBar
        isDirty={true}
        isSaving={isLoading}
        isValid={true}
        onSave={handleRunQuery}
        onReset={() => methods.reset(defaultValues)}
        saveLabel="Run Query"
        resetLabel="Reset"
        message="Filter parameters ready — run the query when done"
        savingMessage="Running query…"
        successMessage="Query applied"
        errorMessage="Please fix the filter errors before running"
      />
    </>
  );
}
