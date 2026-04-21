'use client';

import { ComponentPreview } from '../component-preview';
import { CodeBlock } from '../code-block';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/custom/ui/input-group';
import { registry } from '@/lib/showcase/registry';
import { LuSearch, LuCopy } from 'react-icons/lu';

const meta = registry['input-group'];

export function InputGroupDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview
        code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <LuSearch className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>`}
      >
        <div className="w-64">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <LuSearch className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
        </div>
      </ComponentPreview>

      <CodeBlock
        label="Import"
        code={`import {
  InputGroup, InputGroupAddon, InputGroupButton,
  InputGroupText, InputGroupInput, InputGroupTextarea,
} from "@/components/custom/ui/input-group"`}
      />

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Icon Prefix</h3>
          <p className="text-xs text-muted-foreground">Inline-start addon for icon or text prefix.</p>
          <ComponentPreview
            align="start"
            code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <LuSearch className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search parents..." />
</InputGroup>`}
          >
            <div className="w-64">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <LuSearch className="size-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search parents..." />
              </InputGroup>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Text Prefix</h3>
          <p className="text-xs text-muted-foreground">Use <code className="rounded bg-muted px-1 font-mono text-xs">InputGroupText</code> inside the addon for a text label.</p>
          <ComponentPreview
            align="start"
            code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>PKR</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="0.00" type="number" />
</InputGroup>`}
          >
            <div className="w-64">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>PKR</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="0.00" type="number" />
              </InputGroup>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Button Suffix</h3>
          <p className="text-xs text-muted-foreground">Inline-end addon with a ghost action button.</p>
          <ComponentPreview
            align="start"
            code={`<InputGroup>
  <InputGroupInput defaultValue="INV-00124" readOnly />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>
      <LuCopy className="size-3.5" />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          >
            <div className="w-64">
              <InputGroup>
                <InputGroupInput defaultValue="INV-00124" readOnly />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton>
                    <LuCopy className="size-3.5" />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Block Label (Top)</h3>
          <p className="text-xs text-muted-foreground">Block-start addon places a label above the input inside the group border.</p>
          <ComponentPreview
            align="start"
            code={`<InputGroup>
  <InputGroupAddon align="block-start">Amount</InputGroupAddon>
  <InputGroupInput placeholder="0.00" type="number" />
</InputGroup>`}
          >
            <div className="w-64">
              <InputGroup>
                <InputGroupAddon align="block-start">Amount</InputGroupAddon>
                <InputGroupInput placeholder="0.00" type="number" />
              </InputGroup>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Textarea</h3>
          <p className="text-xs text-muted-foreground">Use <code className="rounded bg-muted px-1 font-mono text-xs">InputGroupTextarea</code> for multiline input with the same group styling.</p>
          <ComponentPreview
            align="start"
            code={`<InputGroup>
  <InputGroupTextarea placeholder="Add a note..." rows={3} />
</InputGroup>`}
          >
            <div className="w-64">
              <InputGroup>
                <InputGroupTextarea placeholder="Add a note..." rows={3} />
              </InputGroup>
            </div>
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
