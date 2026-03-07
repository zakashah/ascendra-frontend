'use client';

import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { SimpleAlert } from '@/components/custom/common-ui/simple-alert';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { SecondaryButton } from '@/components/custom/input/secondary-button';
import { AsideContent } from '@/components/custom/layout/aside-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionPanelItemPartGroup } from '@/components/custom/layout/main-section-panel-item-part-group';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Anchor } from '@/components/custom/nav/anchor';
import { TabContent } from '@/components/custom/tab/tab-content';
import { TabList } from '@/components/custom/tab/tab-list';
import { TabTrigger } from '@/components/custom/tab/tab-trigger';
import { Tabs } from '@/components/custom/tab/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { Switch } from '@/components/custom/ui/switch';
import { useState } from 'react';
import { LuChevronDown, LuCode, LuEye, LuInfo } from 'react-icons/lu';

export default function UserAndAuthenticationPage() {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(false);
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
        <Tabs defaultValue="email">
          <TabList>
            <TabTrigger value="email" dirty>
              Email
            </TabTrigger>
            <TabTrigger value="phone">Phone</TabTrigger>
            <TabTrigger value="username">Username</TabTrigger>
            <TabTrigger value="password">Password</TabTrigger>
            <TabTrigger value="passkeys" disabled>
              Passkeys
            </TabTrigger>
            <TabTrigger value="user-model">User Model</TabTrigger>
          </TabList>
          <TabContent value="email">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch
                      onClick={() => setHidden((prev) => !prev)}
                      checked={!hidden}
                    />
                    <label className="text-base font-medium">
                      Sign-up with email
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to sign up with their email address
                  </p>
                </MainSectionHeader>
                <MainSectionPanel collapsed={hidden}>
                  <MainSectionPanelItem>
                    <MainSectionPanelItemPartGroup>
                      <div>
                        <div className="flex items-center gap-2">
                          <Switch />
                          <label className="text-base font-medium">
                            Require email address
                          </label>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-10 text-xs">
                          Users must provide an email address to sign up and
                          must maintain one on their account at all times.
                        </p>
                      </div>
                      <SimpleAlert className="ml-10">
                        <LuInfo className="text-sm" />
                        <div>
                          Email is the only enabled sign-up option and is
                          therefore required.
                        </div>
                      </SimpleAlert>
                    </MainSectionPanelItemPartGroup>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <label className="text-base font-medium">
                          Verify at sign-up
                          <SimpleBadge className="ml-1" variant={'blue'}>
                            Recommended
                          </SimpleBadge>
                        </label>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-10 text-xs">
                        Require users to verify their email addresses before
                        they can sign-up
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  this is footer of main section
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch
                      onClick={() => setHidden1((prev) => !prev)}
                      checked={!hidden1}
                    />
                    <label className="text-base font-medium">
                      Sign-up with email
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to sign up with their email address
                  </p>
                </MainSectionHeader>
                <MainSectionPanel collapsed={hidden1}>
                  <MainSectionPanelItem>
                    <MainSectionPanelItemPartGroup>
                      <div>
                        <div className="flex items-center gap-2">
                          <Switch />
                          <label className="text-base font-medium">
                            Require email address
                          </label>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-10 text-xs">
                          Users must provide an email address to sign up and
                          must maintain one on their account at all times.
                        </p>
                      </div>
                      <SimpleAlert className="ml-10">
                        <LuInfo className="mt-0.5" />
                        <div>
                          Email is the only enabled sign-up option and is
                          therefore required.
                        </div>
                      </SimpleAlert>
                    </MainSectionPanelItemPartGroup>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <label className="text-base font-medium">
                          Verify at sign-up
                          <SimpleBadge className="ml-1" variant={'blue'}>
                            Recomended
                          </SimpleBadge>
                        </label>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-10 text-xs">
                        Require users to verify their email addresses before
                        they can sign-up
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  this is footer of main section
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Sign-in with email
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to sign in with their email address
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  this is footer of main section
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="phone">
            <MainContent>
              <SimpleAlert>
                <LuInfo className="text-sm" />
                <div>
                  SMS functionality is restricted to phone numbers from
                  countries enabled on your SMS allowlist.
                  <Anchor>Manage allowlist settings.</Anchor>
                </div>
              </SimpleAlert>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Sign-up with phone
                      <ProBadge className="ml-2">Pro</ProBadge>
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to sign up with a phone number
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Sign-up with phone
                      <ProBadge className="ml-2">Pro</ProBadge>
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to sign up with a phone number
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="username">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Sign-up with username
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to add a username during sign-up
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Sign-up with username
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 pl-10 text-xs">
                    Allow users to add a username during sign-up
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
            <AsideContent>right content this</AsideContent>
          </TabContent>
          <TabContent value="password">password</TabContent>
          <TabContent value="passkeys">passkeys</TabContent>
          <TabContent value="user-model">user-model</TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
