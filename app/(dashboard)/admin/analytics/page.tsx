'use client';

import { SecondaryButton } from '@/components/custom/input/secondary-button';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubTitle } from '@/components/custom/layout/page-sub-title';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Anchor } from '@/components/custom/nav/anchor';
import { Tabs } from '@/components/custom/tab/tabs';
import { TabsContent } from '@/components/custom/tab/tab-content';
import { TabsList } from '@/components/custom/tab/tab-list';
import { TabsTrigger } from '@/components/custom/tab/tab-trigger';
import { LuChevronDown } from 'react-icons/lu';

export default function OverviewPage() {
  return (
    <>
      <PageHeader>
        {/* <PageTitle>Account Portal</PageTitle> */}
        <PageHeaderGroup>
          <PageTitle>Account Portal</PageTitle>
          <PageSubTitle>
            Clerks Account Portal is the fastest way to add authentication and
            user management to your application. We provide a fully managed and
            hosted solution that lives on your domain.
            <Anchor>Learn more</Anchor>
          </PageSubTitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <SecondaryButton className="w-full">
            Preview
            <LuChevronDown className="text-muted-foreground" />
          </SecondaryButton>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        {/* <PageContent>page content</PageContent> */}
        <Tabs defaultValue="username">
          <TabsList>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="phone">Phone</TabsTrigger>
            <TabsTrigger value="username">Username</TabsTrigger>
            <TabsTrigger value="password" disabled>
              Password
            </TabsTrigger>
            <TabsTrigger value="passkeys">Passkeys</TabsTrigger>
            <TabsTrigger value="user-model">User Model</TabsTrigger>
          </TabsList>
          <TabsContent value="email">email</TabsContent>
          <TabsContent value="phone">phone</TabsContent>
          <TabsContent value="username">username</TabsContent>
          <TabsContent value="password">password</TabsContent>
          <TabsContent value="passkeys">passkeys</TabsContent>
          <TabsContent value="user-model">user-model</TabsContent>
        </Tabs>
      </PageMain>
    </>
  );
}
