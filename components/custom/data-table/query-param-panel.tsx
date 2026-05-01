'use client';

import { useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/custom/ui/button';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { useQueryContext } from '@/hooks/use-query-context';
import { QueryFieldRenderer } from './query-field-renderer';
import type { FieldDef, QueryParamValues } from '@/lib/query';
import { cn } from '@/lib/utils';
import { IoColorFilterOutline } from "react-icons/io5";

function buildZodSchema(
  fields: FieldDef[]
): z.ZodObject<Record<string, z.ZodTypeAny>> {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const field of fields) {
    let schema: z.ZodTypeAny;

    switch (field.type) {
      case 'text': {
        let s = z.string();
        if (field.minLength != null) s = s.min(field.minLength);
        if (field.maxLength != null) s = s.max(field.maxLength);
        schema = field.required
          ? s.min(1, `${field.label} is required`)
          : s.optional();
        break;
      }
      case 'number': {
        let s = z.coerce.number({ error: 'Must be a number' });
        if (field.min != null) s = s.min(field.min);
        if (field.max != null) s = s.max(field.max);
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

function getSpanClass(field: FieldDef): string {
  if (field.span === 'full') return 'col-span-full';
  if (field.span === 2) return 'col-span-2';
  if (field.span === 1) return 'col-span-1';
  if (field.type === 'daterange' || field.type === 'multiselect')
    return 'col-span-2';
  return 'col-span-1';
}

export function QueryParamPanel() {
  const { activeQuery, lastResult } = useQueryContext();
  const showParamPanel = !!activeQuery.params?.length && lastResult === null;

  if (!showParamPanel) return null;

  return <QueryParamPanelInner key={activeQuery.id} />;
}

function QueryParamPanelInner() {
  const { activeQuery, setLastResult, setIsLoading, confirmPending } =
    useQueryContext();
  const fields = activeQuery.params!;

  const schema = useMemo(() => buildZodSchema(fields), [fields]);
  const defaultValues = useMemo(() => buildDefaultValues(fields), [fields]);

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onSubmit',
  });

  function onSubmit(data: Record<string, unknown>) {
    setIsLoading(true);
    setLastResult(data as QueryParamValues);
    setTimeout(() => {
      confirmPending();
      setIsLoading(false);
    }, 2000);
  }

  return (
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
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <MainSectionPanelItem>
              <div
                className={cn(
                  'grid gap-3',
                  'grid-cols-1 sm:grid-cols-2',
                  'lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'
                )}
              >
                {fields.map((field) => (
                  <div key={field.name} className={getSpanClass(field)}>
                    <QueryFieldRenderer field={field} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => methods.reset(defaultValues)}
                >
                  Reset
                </Button>
                <Button type="submit" size="sm">
                  Run Query
                </Button>
              </div>
            </MainSectionPanelItem>
          </form>
        </FormProvider>
      </MainSectionPanel>
    </MainSection>
  );
}
