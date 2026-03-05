'use client';

import { BubbleBadge } from '@/components/custom/common-ui/bubble-badge';
import { SecondaryButton } from '@/components/custom/input/secondary-button';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Anchor } from '@/components/custom/nav/anchor';
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
import { LuChevronDown, LuCode, LuEye, LuInfo } from 'react-icons/lu';

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
            <TabsTrigger value="password">Password</TabsTrigger>
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
          <TabsContent value="phone">
            <div
              className={cn(
                /* 'relative flex max-w-6xl items-baseline gap-2 rounded-md p-2',
                'bg-ceramic-blue/4 dark:bg-ceramic-blue/12',
                'ring-ceramic-blue/12 ring-1 ring-inset',
                'text-ceramic-body-3 rich-text-info', */
                'inline-flex max-w-6xl items-start gap-2 rounded-md p-2',
                'bg-blue-700/4 dark:bg-blue-700/12',
                'ring-1 ring-blue-700/12 ring-inset',
                'text-xs text-blue-800/80'
              )}
            >
              <LuInfo className="mt-0.5" />
              <div>
                SMS functionality is restricted to phone numbers from countries
                enabled on your SMS allowlist.
                <Anchor>Manage allowlist settings.</Anchor>
              </div>
            </div>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex min-w-105 flex-1 flex-col gap-6">
                <section className="bg-muted flex flex-col rounded-xl py-1">
                  <header className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <label className="text-base font-medium">
                        Sign-up with phone
                      </label>
                      <span
                        className={cn(
                          'relative inline-flex shrink-0 items-center rounded-[.35rem] text-white',
                          'overflow-hidden px-1 py-0.5 text-[10px]',
                          'bg-[linear-gradient(120deg,rgb(73,90,193)_0%,rgb(64,63,115)_16%,rgb(99,131,162)_50%,rgb(81,36,82)_87%,rgb(132,61,112)_100%)] shadow-[inset_0_2px_0_rgba(43,117,225,0.35)] ring-1 ring-black/42 ring-inset dark:bg-[linear-gradient(120deg,rgb(39,46,123)_0%,rgb(48,47,91)_16%,rgb(73,95,119)_50%,rgb(66,35,57)_87%,rgb(92,46,79)_100%)] dark:shadow-none dark:ring-white/12'
                        )}
                      >
                        <span className="px-0.5">Pro</span>
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                      Allow users to sign up with a phone number
                    </p>
                  </header>
                </section>
                <section className="bg-muted flex flex-col rounded-xl py-1">
                  <header className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <label className="text-base font-medium">
                        Sign-up with phone
                      </label>
                      <span
                        className={cn(
                          'relative inline-flex shrink-0 items-center rounded-[.35rem] text-white',
                          'overflow-hidden px-1 py-0.5 text-[10px]',
                          'bg-[linear-gradient(120deg,rgb(73,90,193)_0%,rgb(64,63,115)_16%,rgb(99,131,162)_50%,rgb(81,36,82)_87%,rgb(132,61,112)_100%)] shadow-[inset_0_2px_0_rgba(43,117,225,0.35)] ring-1 ring-black/42 ring-inset dark:bg-[linear-gradient(120deg,rgb(39,46,123)_0%,rgb(48,47,91)_16%,rgb(73,95,119)_50%,rgb(66,35,57)_87%,rgb(92,46,79)_100%)] dark:shadow-none dark:ring-white/12'
                        )}
                      >
                        <span className="px-0.5">Pro</span>
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                      Allow users to sign up with a phone number
                    </p>
                  </header>
                </section>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="username">
            <div>message</div>
            <div className="flex flex-wrap items-start gap-8">
              <main className="flex min-w-full flex-1 flex-col gap-6 sm:min-w-min">
                <section className="bg-muted flex flex-col rounded-xl py-1">
                  <header className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <label className="text-base font-medium">
                        Sign-up with username
                      </label>
                    </div>
                    <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                      Allow users to add a username during sign-up
                    </p>
                  </header>
                </section>
                <section className="bg-muted flex flex-col rounded-xl py-1">
                  <header className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <label className="text-base font-medium">
                        Sign-in with username
                      </label>
                    </div>
                    <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                      Allow users to sign in with their username
                    </p>
                  </header>
                </section>
              </main>
              <aside className="w-full max-w-sm sm:w-fit">
                right content this is long content
              </aside>
            </div>
            {/* <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-1 basis-0 flex-col gap-6">
                <section className="bg-muted flex flex-col rounded-xl py-1">
                  <header className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <label className="text-base font-medium">
                        Sign-up with username
                      </label>
                    </div>
                    <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                      Allow users to add a username during sign-up
                    </p>
                  </header>
                </section>
                <section className="bg-muted flex flex-col rounded-xl py-1">
                  <header className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Switch />
                      <label className="text-base font-medium">
                        Sign-in with username
                      </label>
                    </div>
                    <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                      Allow users to sign in with their username
                    </p>
                  </header>
                </section>
              </div>
              <div className="w-fit max-w-full">right content</div>
            </div> */}
          </TabsContent>
          <TabsContent value="password">password</TabsContent>
          <TabsContent value="passkeys">passkeys</TabsContent>
          <TabsContent value="user-model">user-model</TabsContent>
        </Tabs>
      </PageMain>
    </>
  );
}
