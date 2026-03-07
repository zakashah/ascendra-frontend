'use client';

import { Button } from '@/components/button/button';
import { Input } from '@/components/custom/input/input';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Tabs } from '@/components/custom/tab/tabs';
import { TabContent } from '@/components/custom/tab/tab-content';
import { TabList } from '@/components/custom/tab/tab-list';
import { TabTrigger } from '@/components/custom/tab/tab-trigger';
import { LuChevronDown } from 'react-icons/lu';

export default function SSOConnectionsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>SSO Connections</PageTitle>
        <PageHeaderAction>
          <Button>
            Add connection
            <LuChevronDown />
          </Button>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="all">
          <TabList>
            <TabTrigger value="all">All</TabTrigger>
            <TabTrigger value="social">Social</TabTrigger>
            <TabTrigger value="enterprise">Enterprise</TabTrigger>
          </TabList>
          <TabContent value="all">
            <MainContent>
              <div className="max-w-[280px]">
                <Input placeholder="Search..." />
              </div>
            </MainContent>
          </TabContent>
          <TabContent value="social">
            <MainContent>Social</MainContent>
          </TabContent>
          <TabContent value="enterprise">
            <MainContent>Enterprise</MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
