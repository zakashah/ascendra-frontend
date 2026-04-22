'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from '@/components/custom/ui/dialog';
import { Button } from '@/components/custom/ui/button';
import { registry } from '@/lib/showcase/registry';

const meta = registry['dialog'];

export function DialogDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview
        code={`import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose,
} from "@/components/custom/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent showCloseButton>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>Are you sure you want to proceed?</DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p className="text-sm text-muted-foreground">
        This will update the record immediately.
      </p>
    </DialogBody>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent showCloseButton>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>Are you sure you want to proceed?</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p className="text-sm text-muted-foreground">
                This will update the record immediately.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Destructive Action</h3>
          <p className="text-xs text-muted-foreground">Use a destructive button in the footer for irreversible actions.</p>
          <ComponentPreview
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Parent</Button>
  </DialogTrigger>
  <DialogContent showCloseButton>
    <DialogHeader>
      <DialogTitle>Delete Parent</DialogTitle>
      <DialogDescription>
        This will permanently delete Ahmed Khan and all associated students.
      </DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p className="text-sm text-muted-foreground">
        This action cannot be undone. All invoice data will be lost.
      </p>
    </DialogBody>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Parent</Button>
              </DialogTrigger>
              <DialogContent showCloseButton>
                <DialogHeader>
                  <DialogTitle>Delete Parent</DialogTitle>
                  <DialogDescription>
                    This will permanently delete Ahmed Khan and all associated students.
                  </DialogDescription>
                </DialogHeader>
                <DialogBody>
                  <p className="text-sm text-muted-foreground">
                    This action cannot be undone. All invoice data will be lost.
                  </p>
                </DialogBody>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button variant="destructive">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">No Close Button</h3>
          <p className="text-xs text-muted-foreground">Set <code className="rounded bg-muted px-1 font-mono text-xs">showCloseButton={`{false}`}</code> for dialogs where dismissal must be explicit.</p>
          <ComponentPreview
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Open</Button>
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Session Expired</DialogTitle>
      <DialogDescription>Please sign in again to continue.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Sign In</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Session Expired</DialogTitle>
                  <DialogDescription>Please sign in again to continue.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button>Sign In</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>
      </div>

      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
