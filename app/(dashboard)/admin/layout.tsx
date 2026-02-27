'use client';

import { ReactNode, useState } from 'react';

import { StatusDot } from '@/components/custom/common-ui/status-dot';
import { MainContainer } from '@/components/custom/layout/main-container';
import { PageLayout } from '@/components/custom/layout/page-layout';
import SideBarOverlay from '@/components/custom/layout/side-bar-overlay';
import { MenuHeader } from '@/components/custom/menu-header/menu-header';
import { MenuHeaderActions } from '@/components/custom/menu-header/menu-header-actions';
import { MenuHeaderBadge } from '@/components/custom/menu-header/menu-header-badge';
import { MenuHeaderChevron } from '@/components/custom/menu-header/menu-header-chevron';
import { MenuHeaderLink } from '@/components/custom/menu-header/menu-header-link';
import { MenuHeaderLinks } from '@/components/custom/menu-header/menu-header-links';
import { MenuHeaderSlash } from '@/components/custom/menu-header/menu-header-slash';
import { NameAvatar } from '@/components/custom/name-avatar';
import { Nav } from '@/components/custom/nav/nav';
import { NavLink } from '@/components/custom/nav/nav-link';
import { NavLinkBadge } from '@/components/custom/nav/nav-link-badge';
import { SideBar } from '@/components/custom/side-bar/side-bar';
import { SideBarFooter } from '@/components/custom/side-bar/side-bar-footer';
import { SideBarHeader } from '@/components/custom/side-bar/side-bar-header';
import { SideBarMain } from '@/components/custom/side-bar/side-bar-main';
import { SideBarMenu } from '@/components/custom/side-bar/side-bar-menu';
import { SideBarMenuHeader } from '@/components/custom/side-bar/side-bar-menu-header';
import { SideBarMenuSet } from '@/components/custom/side-bar/side-bar-menu-set';
import { SideBarMenuSetTitle } from '@/components/custom/side-bar/side-bar-menu-set-title';
import SideBarToggle from '@/components/custom/side-bar/side-bar-toggle';
import { SurfaceButton } from '@/components/custom/surface-button';
import { ThemeToggle } from '@/components/custom/theme-toggle';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Folder } from 'lucide-react';
import { LuCircleArrowUp } from 'react-icons/lu';
import { SideBarMenuContent } from '@/components/custom/side-bar/side-bar-menu-content';
import { SideBarMenuItem } from '@/components/custom/side-bar/side-bar-menu-item';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(true);
  const [active, setActive] = useState('users');
  return (
    <PageLayout>
      <SideBarOverlay />
      <MenuHeader>
        <MenuHeaderLinks>
          <MenuHeaderLink href="#">
            <Avatar size="sm" className="shrink-0">
              <AvatarImage src="/images/home.png" className="rounded-sm" />
            </Avatar>
            <span className="truncate">Personal Workspace</span>
            <MenuHeaderBadge variant="secondary">Hobby</MenuHeaderBadge>
          </MenuHeaderLink>
          <MenuHeaderChevron />
          <MenuHeaderSlash />
          <MenuHeaderLink href="#">
            <span className="truncate">Front Row</span>
          </MenuHeaderLink>
          <MenuHeaderChevron />
          <MenuHeaderSlash />
          <MenuHeaderLink href="#">
            <StatusDot />
            <span className="truncate">Development</span>
          </MenuHeaderLink>
          <MenuHeaderChevron />
        </MenuHeaderLinks>
        <MenuHeaderActions>
          <MenuHeaderBadge>
            <LuCircleArrowUp className="mr-1" />
            Upgrades
          </MenuHeaderBadge>
          <SurfaceButton variant={'invite'}>Invite</SurfaceButton>
          <ThemeToggle />
          <NameAvatar name="burhan shah" />
        </MenuHeaderActions>
      </MenuHeader>
      <Nav>
        <NavLink href="#">Overview</NavLink>
        <NavLink href="#">Users</NavLink>
        <NavLink href="#">Organizatioins</NavLink>
        <NavLink href="#" exact>
          Billing
          <NavLinkBadge>Beta</NavLinkBadge>
        </NavLink>
        <NavLink href="#">Configure</NavLink>
      </Nav>
      <MainContainer>
        <SideBarToggle />
        <SideBar>
          <SideBarHeader />
          <SideBarMain>
            <SideBarMenuSet>
              <SideBarMenuSetTitle>Title</SideBarMenuSetTitle>
              <SideBarMenu>
                <SideBarMenuHeader icon={Folder}>
                  User Management
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  {['overview', 'users', 'billing'].map((item) => (
                    <SideBarMenuItem key={item} value={item}>
                      {item}
                    </SideBarMenuItem>
                  ))}
                </SideBarMenuContent>
              </SideBarMenu>
              <SideBarMenu>
                <SideBarMenuHeader icon={Folder}>
                  User Management 1
                </SideBarMenuHeader>
                <SideBarMenuContent>
                  {['overview 1', 'users 1', 'billing 1'].map((item) => (
                    <SideBarMenuItem key={item}>{item}</SideBarMenuItem>
                  ))}
                </SideBarMenuContent>
              </SideBarMenu>
            </SideBarMenuSet>
          </SideBarMain>
          <SideBarFooter />
        </SideBar>
        <section className="flex-1">
          <div className="border-border h-300 border border-dashed">
            {children}
          </div>
        </section>
      </MainContainer>
    </PageLayout>
  );
}
