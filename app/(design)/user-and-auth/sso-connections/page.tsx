'use client';

import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Tabs } from '@/components/custom/tab/tabs';
import { TabsContent } from '@/components/custom/tab/tabs-content';
import { TabsList } from '@/components/custom/tab/tabs-list';
import { TabsTrigger } from '@/components/custom/tab/tabs-trigger';

export default function SSOConnectionsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>SSO Connections</PageTitle>
        <PageHeaderAction>primay button</PageHeaderAction>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>
          <TabsContent value="all">All</TabsContent>
          <TabsContent value="social">Social</TabsContent>
          <TabsContent value="enterprise">Enterprise</TabsContent>
        </Tabs>
      </PageMain>
    </>
  );
}
