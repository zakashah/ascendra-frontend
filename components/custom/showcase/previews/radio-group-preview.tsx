'use client';

import { ComponentPreview } from '../component-preview';
import { CodeBlock } from '../code-block';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import { registry } from '@/lib/showcase/registry';

const meta = registry['radio-group'];

export function RadioGroupDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview
        code={`<RadioGroup defaultValue="monthly">
  <RadioGroupItem value="monthly" />
  <RadioGroupItem value="yearly" />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="monthly">
          <RadioGroupItem value="monthly" />
          <RadioGroupItem value="yearly" />
        </RadioGroup>
      </ComponentPreview>

      <CodeBlock
        label="Import"
        code={`import { RadioGroup, RadioGroupItem } from "@/components/custom/ui/radio-group"`}
      />

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">With Labels</h3>
          <p className="text-xs text-muted-foreground">Wrap items in labels for accessible selection.</p>
          <ComponentPreview
            align="start"
            code={`<RadioGroup defaultValue="monthly">
  <label className="flex cursor-pointer items-center gap-2">
    <RadioGroupItem value="monthly" />
    <span className="text-sm text-foreground">Monthly</span>
  </label>
  <label className="flex cursor-pointer items-center gap-2">
    <RadioGroupItem value="yearly" />
    <span className="text-sm text-foreground">Yearly</span>
  </label>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="monthly">
              <label className="flex cursor-pointer items-center gap-2">
                <RadioGroupItem value="monthly" />
                <span className="text-sm text-foreground">Monthly</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <RadioGroupItem value="yearly" />
                <span className="text-sm text-foreground">Yearly</span>
              </label>
            </RadioGroup>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">With Disabled Item</h3>
          <p className="text-xs text-muted-foreground">Disable individual items by passing the <code className="rounded bg-muted px-1 font-mono text-xs">disabled</code> prop to <code className="rounded bg-muted px-1 font-mono text-xs">RadioGroupItem</code>.</p>
          <ComponentPreview
            align="start"
            code={`<RadioGroup defaultValue="card">
  <label className="flex cursor-pointer items-center gap-2">
    <RadioGroupItem value="card" />
    <span className="text-sm text-foreground">Credit card</span>
  </label>
  <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
    <RadioGroupItem value="bank" disabled />
    <span className="text-sm text-foreground">Bank transfer</span>
  </label>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="card">
              <label className="flex cursor-pointer items-center gap-2">
                <RadioGroupItem value="card" />
                <span className="text-sm text-foreground">Credit card</span>
              </label>
              <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                <RadioGroupItem value="bank" disabled />
                <span className="text-sm text-foreground">Bank transfer</span>
              </label>
            </RadioGroup>
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
