'use client';

import * as React from 'react';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Overlay ──────────────────────────────────────────────────────────────── */

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0',
        'fixed inset-0 z-200 bg-black/40 duration-150 supports-backdrop-filter:backdrop-blur-sm',
        className
      )}
      {...props}
    />
  );
}

/* ── Root ─────────────────────────────────────────────────────────────────── */

function Sheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

/* ── Content ──────────────────────────────────────────────────────────────── */

function SheetContent({
  className,
  children,
  side = 'right',
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
}) {
  return (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          /* positioning */
          'fixed z-1000 flex flex-col outline-none bg-white dark:bg-(--color-gray-1500)',
          /* enter / exit animations */
          'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 duration-200 ease-out',
          /* slide directions */
          side === 'right' &&
            'inset-y-0 right-0 h-full w-full max-w-md border-l border-border data-closed:slide-out-to-right data-open:slide-in-from-right',
          side === 'left' &&
            'inset-y-0 left-0 h-full w-full max-w-md border-r border-border data-closed:slide-out-to-left data-open:slide-in-from-left',
          side === 'top' &&
            'inset-x-0 top-0 h-auto border-b border-border data-closed:slide-out-to-top data-open:slide-in-from-top',
          side === 'bottom' &&
            'inset-x-0 bottom-0 h-auto border-t border-border data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
          /* shadow */
          'shadow-xl',
          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close-button"
            className={cn(
              'absolute top-4 right-4 rounded-md p-1',
              'text-muted-foreground transition-colors',
              'hover:bg-accent hover:text-foreground',
              'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
              'disabled:pointer-events-none'
            )}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

/* ── Header ───────────────────────────────────────────────────────────────── */

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        'border-border flex flex-col gap-1 border-b px-6 py-5',
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground text-base font-semibold', className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

/* ── Body ─────────────────────────────────────────────────────────────────── */

function SheetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-body"
      className={cn('flex-1 overflow-y-auto px-6 py-5', className)}
      {...props}
    />
  );
}

/* ── Footer ───────────────────────────────────────────────────────────────── */

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        'border-border/50 bg-gray-50/50 dark:bg-black/10 flex items-center justify-end gap-3 border-t px-6 py-4',
        className
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
};
