'use client';

import { Input } from '@/components/custom/input/input';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';

export default function Web3Page() {
  return (
    <>
      <PageHeader>
        <PageTitle>User & Auhtentication</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <div
            data-slot="content-action-bar"
            className="mt-8 mb-4 flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div className="order-1 flex flex-wrap items-center gap-2 sm:order-0">
              <Input placeholder="Search..." />
              <div>Sort by select</div>
            </div>
            <div className="ml-auto flex sm:ml-0">
              <div>action button</div>
            </div>
          </div>
          <PageContent>
            <MainContent>
              <div>section 1</div>
              <div>section 2</div>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
