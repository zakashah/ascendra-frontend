import { MainContent } from '@/components/custom/layout/main-content';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';

export default function Web3Page() {
  return (
    <>
      <PageHeader>
        <PageTitle>User & Auhtentication</PageTitle>
      </PageHeader>
      <PageMain>
        <PageContent>
          <MainContent>
            <div>section 1</div>
            <div>section 2</div>
          </MainContent>
        </PageContent>
      </PageMain>
    </>
  );
}
