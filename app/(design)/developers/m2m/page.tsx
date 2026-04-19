'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';

import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { Input } from '@/components/custom/ui/input';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { Anchor } from '@/components/custom/common-ui/anchor';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import { Switch } from '@/components/custom/ui/switch';
import {
  EmptyBody,
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import {
  LuInfo,
  LuLockKeyhole,
  LuSearch,
  LuShield,
  LuTrash2,
} from 'react-icons/lu';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { RowActionButton } from '@/components/custom/common-ui/row-action-button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { InfoIcon } from 'lucide-react';
import { Button } from '@/components/custom/ui/button';

export default function M2MPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>M2M Authentication</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="configure">
          <TabList>
            <TabTrigger value="configure">Configure</TabTrigger>
            <TabTrigger value="logs">Logs</TabTrigger>
          </TabList>
          <TabContent value="configure">
            <MainContent></MainContent>
          </TabContent>
          <TabContent value="logs">
            <MainContent></MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
