'use client';

import { BubbleBadge } from '@/components/custom/common-ui/bubble-badge';
import { SecondaryButton } from '@/components/custom/input/secondary-button';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Tabs } from '@/components/custom/tab/tabs';
import { TabsContent } from '@/components/custom/tab/tabs-content';
import { TabsList } from '@/components/custom/tab/tabs-list';
import { TabsTrigger } from '@/components/custom/tab/tabs-trigger';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { Switch } from '@/components/custom/ui/switch';
import { cn } from '@/lib/utils';
import { LuChevronDown, LuCode, LuEye } from 'react-icons/lu';

export default function UserAndAuthenticationPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>User & Auhtentication</PageTitle>
        <PageHeaderAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SecondaryButton className="w-full">
                Preview
                <LuChevronDown className="text-muted-foreground" />
              </SecondaryButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              className="w-64"
              align="end"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <LuEye /> Preview Sign Up
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LuEye />
                  Preview Sign In
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LuCode /> Sample User Object
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        {/* <PageContent>page content</PageContent> */}
        <Tabs defaultValue="email">
          <TabsList>
            <TabsTrigger value="email">
              <BubbleBadge color="green" size="sm" />
              Email
            </TabsTrigger>
            <TabsTrigger value="phone">Phone</TabsTrigger>
            <TabsTrigger value="username">Username</TabsTrigger>
            <TabsTrigger value="password" disabled>
              Password
            </TabsTrigger>
            <TabsTrigger value="passkeys">Passkeys</TabsTrigger>
            <TabsTrigger value="user-model">User Model</TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <div className="space-y-6">
              <section className="bg-muted rounded-2xl">
                <header className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base">Sign-up with email</label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to sign up with their email address
                  </p>
                </header>
                <div className="grid h-auto opacity-100">
                  <div className="">
                    <div
                      className={cn(
                        'bg-background mx-1 h-30 rounded-xl border border-[#191C21]/4',
                        'm-1 p-1 shadow-[0_1px_2px_0_rgba(25,28,33,0.06),rgba(0,0,0,0.08)] ring-1 ring-[#191C21]/4 dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)] dark:ring-black/20'
                      )}
                    >
                      bottom div
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-muted h-20 rounded-lg">bottom</section>
            </div>
          </TabsContent>
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
