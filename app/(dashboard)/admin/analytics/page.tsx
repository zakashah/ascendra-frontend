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
import { TabContent } from '@/components/custom/tab/tab-content';
import { TabList } from '@/components/custom/tab/tab-list';
import { TabTrigger } from '@/components/custom/tab/tab-trigger';
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
          <TabList>
            <TabTrigger value="email">Email</TabTrigger>
            <TabTrigger value="phone">Phone</TabTrigger>
            <TabTrigger value="username">Username</TabTrigger>
            <TabTrigger value="password" disabled>
              Password
            </TabTrigger>
            <TabTrigger value="passkeys">Passkeys</TabTrigger>
            <TabTrigger value="user-model">User Model</TabTrigger>
          </TabList>
          <TabContent value="email">email</TabContent>
          <TabContent value="phone">phone</TabContent>
          <TabContent value="username">username</TabContent>
          <TabContent value="password">password</TabContent>
          <TabContent value="passkeys">passkeys</TabContent>
          <TabContent value="user-model">user-model</TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
