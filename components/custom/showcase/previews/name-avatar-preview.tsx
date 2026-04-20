'use client';

import { ComponentPreview } from '../component-preview';
import { CodeBlock } from '../code-block';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { NameAvatar } from '@/components/custom/common-ui/name-avatar';
import { registry } from '@/lib/showcase/registry';

const meta = registry['name-avatar'];

export function NameAvatarDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview code={`<NameAvatar name="Ahmed Khan" href="#" />`}>
        <NameAvatar name="Ahmed Khan" href="#" />
      </ComponentPreview>

      <CodeBlock
        label="Import"
        code={`import { NameAvatar } from "@/components/custom/common-ui/name-avatar"`}
      />

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Auto Colors</h3>
          <p className="text-xs text-muted-foreground">Each name gets a deterministic background color derived from a hash of the name string.</p>
          <ComponentPreview
            code={`<NameAvatar name="Ahmed Khan" href="#" />
<NameAvatar name="Sara Ali" href="#" />
<NameAvatar name="Usman Raza" href="#" />
<NameAvatar name="Fatima Malik" href="#" />
<NameAvatar name="Bilal Hussain" href="#" />`}
          >
            <NameAvatar name="Ahmed Khan" href="#" />
            <NameAvatar name="Sara Ali" href="#" />
            <NameAvatar name="Usman Raza" href="#" />
            <NameAvatar name="Fatima Malik" href="#" />
            <NameAvatar name="Bilal Hussain" href="#" />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Sizes</h3>
          <p className="text-xs text-muted-foreground">Control diameter in pixels via the <code className="rounded bg-muted px-1 font-mono text-xs">size</code> prop. Font scales proportionally.</p>
          <ComponentPreview
            code={`<NameAvatar name="Ahmed Khan" size={20} />
<NameAvatar name="Ahmed Khan" size={28} />
<NameAvatar name="Ahmed Khan" size={36} />
<NameAvatar name="Ahmed Khan" size={48} />`}
          >
            <NameAvatar name="Ahmed Khan" href="#" size={20} />
            <NameAvatar name="Ahmed Khan" href="#" size={28} />
            <NameAvatar name="Ahmed Khan" href="#" size={36} />
            <NameAvatar name="Ahmed Khan" href="#" size={48} />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Single-word Name</h3>
          <p className="text-xs text-muted-foreground">Single-word names use the first two characters as initials.</p>
          <ComponentPreview
            code={`<NameAvatar name="Administrator" />
<NameAvatar name="Support" />`}
          >
            <NameAvatar name="Administrator" href="#" />
            <NameAvatar name="Support" href="#" />
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
