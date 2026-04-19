'use client';

import * as React from 'react';
import { Dialog as DialogPrimitive } from 'radix-ui';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Overlay ──────────────────────────────────────────────────────────────── */

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
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

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

/* ── Content ──────────────────────────────────────────────────────────────── */

function DialogContent({
  className,
  children,
  footer,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  footer?: React.ReactNode;
  showCloseButton?: boolean;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          /* positioning */
          'fixed top-1/2 left-1/2 z-1000 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 outline-none',
          /* enter / exit */
          'data-open:animate-in data-closed:animate-out',
          'data-closed:fade-out-0 data-open:fade-in-0',
          'data-closed:zoom-out-95 data-open:zoom-in-95',
          'duration-150',
          /* outer shell — gray background, visible behind inner card's rounded bottom */
          'overflow-hidden rounded-xl',
          'bg-gray-50 dark:bg-(--color-gray-1500)',
          'ring-1 ring-black/8 dark:ring-black/[0.56]',
          'shadow-[0_32px_72px_-12px_rgba(25,28,33,0.20),0_16px_32px_-6px_rgba(25,28,33,0.12)]',
          'dark:shadow-[0_32px_72px_-12px_rgba(0,0,0,0.40),0_16px_32px_-6px_rgba(0,0,0,0.40)]',
          className
        )}
        {...props}
      >
        {/* inner white card — rounded corners visible against outer gray */}
        <div
          data-slot="dialog-inner"
          className={cn(
            'overflow-hidden rounded-xl',
            'bg-white dark:bg-(--color-gray-1400)',
            'shadow-[0_1px_2px_rgba(0,0,0,0.08),0_0_2px_rgba(0,0,0,0.06)]'
          )}
        >
          {children}
        </div>

        {/* footer sits outside inner card in the gray outer shell */}
        {footer}

        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close-button"
            className={cn(
              'absolute top-3.5 right-3.5 rounded-md p-0.5',
              'text-muted-foreground transition-colors',
              'hover:bg-accent hover:text-foreground',
              'focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2',
              'disabled:pointer-events-none'
            )}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

/* ── Header ───────────────────────────────────────────────────────────────── */

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        'border-border flex flex-col gap-0.5 border-b px-5 py-5',
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-foreground text-base font-medium', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

/* ── Body ─────────────────────────────────────────────────────────────────── */

function DialogBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-body"
      className={cn('px-5 py-4', className)}
      {...props}
    />
  );
}

/* ── Footer ───────────────────────────────────────────────────────────────── */

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'grid auto-cols-fr grid-flow-col items-stretch gap-3 p-4',
        '[&_button]:justify-center',
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
};
