'use client';

import { ComponentPreview } from '../component-preview';
import { CodeBlock } from '../code-block';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import { Button } from '@/components/custom/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { registry } from '@/lib/showcase/registry';
import { LuSearch, LuSlidersHorizontal, LuPlus } from 'react-icons/lu';

const meta = registry['page-bar'];

export function PageBarDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview
        align="start"
        code={`<PageBar>
  <PageBarContent>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <LuSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  </PageBarContent>
  <PageBarAction>
    <Button>
      <LuPlus />
      Add
    </Button>
  </PageBarAction>
</PageBar>`}
      >
        <div className="w-full">
          <PageBar>
            <PageBarContent>
              <div className="w-56">
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <LuSearch className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Search..." />
                </InputGroup>
              </div>
            </PageBarContent>
            <PageBarAction>
              <Button>
                <LuPlus />
                Add
              </Button>
            </PageBarAction>
          </PageBar>
        </div>
      </ComponentPreview>

      <CodeBlock
        label="Import"
        code={`import { PageBar, PageBarContent, PageBarAction } from "@/components/custom/layout/page-bar"`}
      />

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Search + Filter + Action</h3>
          <p className="text-xs text-muted-foreground">Full toolbar pattern: search on the left, filter and primary CTA on the right.</p>
          <ComponentPreview
            align="start"
            code={`<PageBar>
  <PageBarContent>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <LuSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search parents..." />
    </InputGroup>
  </PageBarContent>
  <PageBarAction>
    <Button variant="secondary">
      <LuSlidersHorizontal />
      Filter
    </Button>
    <Button>
      <LuPlus />
      Add Parent
    </Button>
  </PageBarAction>
</PageBar>`}
          >
            <div className="w-full">
              <PageBar>
                <PageBarContent>
                  <div className="w-56">
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <LuSearch className="size-4" />
                      </InputGroupAddon>
                      <InputGroupInput placeholder="Search parents..." />
                    </InputGroup>
                  </div>
                </PageBarContent>
                <PageBarAction>
                  <Button variant="secondary">
                    <LuSlidersHorizontal />
                    Filter
                  </Button>
                  <Button>
                    <LuPlus />
                    Add Parent
                  </Button>
                </PageBarAction>
              </PageBar>
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
