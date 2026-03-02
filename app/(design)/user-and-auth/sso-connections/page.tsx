'use client';

import { Button } from '@/components/button/button';
import { Input } from '@/components/custom/input/input';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Tabs } from '@/components/custom/tab/tabs';
import { TabsContent } from '@/components/custom/tab/tabs-content';
import { TabsList } from '@/components/custom/tab/tabs-list';
import { TabsTrigger } from '@/components/custom/tab/tabs-trigger';
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
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className='max-w-[280px]'>
              <Input placeholder="Search..." />
            </div>
          </TabsContent>
          <TabsContent value="social">Social</TabsContent>
          <TabsContent value="enterprise">Enterprise</TabsContent>
        </Tabs>
      </PageMain>
    </>
  );
}
