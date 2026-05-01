'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { DataTableBar } from '@/components/custom/layout/data-table-bar';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';
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
        code={`import { PageBar, PageBarContent, PageBarAction } from "@/components/custom/layout/page-bar";

<DataTableBar>
  <PageBarContent>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <LuSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  </DataTableBarContent>
  <DataTableBarAction>
    <Button>
      <LuPlus />
      Add
    </Button>
  </DataTableBarAction>
</DataTable>`}
      >
        <div className="w-full">
          <DataTableBar>
            <DataTableBarContent>
              <div className="w-56">
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <LuSearch className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Search..." />
                </InputGroup>
              </div>
            </DataTableBarContent>
            <DataTableBarAction>
              <Button>
                <LuPlus />
                Add
              </Button>
            </DataTableBarAction>
          </DataTableBar>
        </div>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-foreground text-sm font-medium">
            Search + Filter + Action
          </h3>
          <p className="text-muted-foreground text-xs">
            Full toolbar pattern: search on the left, filter and primary CTA on
            the right.
          </p>
          <ComponentPreview
            align="start"
            code={`<DataTableBar>
  <PageBarContent>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <LuSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search parents..." />
    </InputGroup>
  </DataTableBarContent>
  <DataTableBarAction>
    <Button variant="secondary">
      <LuSlidersHorizontal />
      Filter
    </Button>
    <Button>
      <LuPlus />
      Add Parent
    </Button>
  </DataTableBarAction>
</DataTableBar>`}
          >
            <div className="w-full">
              <DataTableBar>
                <DataTableBarContent>
                  <div className="w-56">
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <LuSearch className="size-4" />
                      </InputGroupAddon>
                      <InputGroupInput placeholder="Search parents..." />
                    </InputGroup>
                  </div>
                </DataTableBarContent>
                <DataTableBarAction>
                  <Button variant="secondary">
                    <LuSlidersHorizontal />
                    Filter
                  </Button>
                  <Button>
                    <LuPlus />
                    Add Parent
                  </Button>
                </DataTableBarAction>
              </DataTableBar>
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
