'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { MainContainer } from '@/components/custom/layout/main-container';
import { PageLayout } from '@/components/custom/layout/page-layout';
import SideBarOverlay from '@/components/custom/side-bar/side-bar-overlay';
import { MenuHeader } from '@/components/custom/menu-header/menu-header';
import { MenuHeaderActions } from '@/components/custom/menu-header/menu-header-actions';
import { MenuHeaderChevron } from '@/components/custom/menu-header/menu-header-chevron';
import { MenuHeaderLink } from '@/components/custom/menu-header/menu-header-link';
import { MenuHeaderLinks } from '@/components/custom/menu-header/menu-header-links';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { NameAvatar } from '@/components/custom/common-ui/name-avatar';
import { Nav } from '@/components/custom/nav/nav';
import { NavLink } from '@/components/custom/nav/nav-link';
import { SideBar } from '@/components/custom/side-bar/side-bar';
import { SideBarFooter } from '@/components/custom/side-bar/side-bar-footer';
import { SideBarHeader } from '@/components/custom/side-bar/side-bar-header';
import { SideBarMain } from '@/components/custom/side-bar/side-bar-main';
import { SideBarMenu } from '@/components/custom/side-bar/side-bar-menu';
import { SideBarMenuContent } from '@/components/custom/side-bar/side-bar-menu-content';
import { SideBarMenuHeader } from '@/components/custom/side-bar/side-bar-menu-header';
import { SideBarMenuItem } from '@/components/custom/side-bar/side-bar-menu-item';
import { SideBarMenuItemGroup } from '@/components/custom/side-bar/side-bar-menu-item-group';
import { SideBarMenuSet } from '@/components/custom/side-bar/side-bar-menu-set';
import { SideBarMenuSetTitle } from '@/components/custom/side-bar/side-bar-menu-set-title';
import SideBarToggle from '@/components/custom/side-bar/side-bar-toggle';
import { ThemeToggle } from '@/components/custom/util/theme-toggle';
import { SectionMain } from '@/components/custom/layout/section-main';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { LuUsers, LuFileText, LuSettings, LuLayoutDashboard } from 'react-icons/lu';

export default function MerchantLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname === '/invoices/create';

  return (
    <PageLayout>
      <SideBarOverlay />
      <MenuHeader>
        <MenuHeaderLinks>
          <MenuHeaderLink href="#">
            <Avatar size="sm" className="shrink-0">
              <AvatarImage src="/images/home.png" className="rounded-sm" />
            </Avatar>
            <span className="truncate">Greenfield Academy</span>
            <SimpleBadge variant="secondary">Merchant</SimpleBadge>
          </MenuHeaderLink>
          <MenuHeaderChevron />
        </MenuHeaderLinks>
        <MenuHeaderActions>
          <ThemeToggle />
          <NameAvatar name="School Admin" />
        </MenuHeaderActions>
      </MenuHeader>
      <Nav>
        <NavLink href="/dashboard">Overview</NavLink>
        <NavLink href="/parents">Parents</NavLink>
        <NavLink href="/invoices">Invoices</NavLink>
        <NavLink href="/settings">Settings</NavLink>
      </Nav>
      <MainContainer>
        {!hideSidebar && <SideBarToggle />}
        {!hideSidebar && (
        <SideBar>
          <SideBarHeader />
          <SideBarMain>
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Manage</SideBarMenuSetTitle>
              <SideBarMenu basePath="/parents">
                <SideBarMenuHeader icon={LuUsers}>Parents</SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/parents">All Parents</SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu basePath="/invoices">
                <SideBarMenuHeader icon={LuFileText}>Invoices</SideBarMenuHeader>
                <SideBarMenuContent>
                  <SideBarMenuItem path="/invoices">All Invoices</SideBarMenuItem>
                  <SideBarMenuItem path="/invoices/create">Create Invoice</SideBarMenuItem>
                </SideBarMenuContent>
              </SideBarMenu>
            </SideBarMenuSet>
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Account</SideBarMenuSetTitle>
              <SideBarMenuItemGroup>
                <SideBarMenuItem
                  alternate="stand-alone"
                  icon={LuSettings}
                  path="/settings"
                >
                  Settings
                </SideBarMenuItem>
              </SideBarMenuItemGroup>
            </SideBarMenuSet>
          </SideBarMain>
          <SideBarFooter />
        </SideBar>
        )}
        <SectionMain>{children}</SectionMain>
      </MainContainer>
    </PageLayout>
  );
}
