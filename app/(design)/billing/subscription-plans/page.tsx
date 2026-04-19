'use client';

import { Input } from '@/components/custom/ui/input';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tab/tab-content';
import { TabList } from '@/components/custom/tab/tab-list';
import { TabTrigger } from '@/components/custom/tab/tab-trigger';
import { Tabs } from '@/components/custom/tab/tabs';

import { CellActionButton } from '@/components/custom/common-ui/cell-action-button';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { RxCrossCircled } from 'react-icons/rx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { CopyText } from '@/components/custom/util/copy-text';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import {
  LuChevronDown,
  LuCode,
  LuEye,
  LuFilter,
  LuLock,
  LuNotebookPen,
  LuSearch,
  LuSettings,
  LuTicketCheck,
  LuTrash2,
} from 'react-icons/lu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { Button } from '@/components/custom/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import { PageSubTitle } from '@/components/custom/layout/page-sub-title';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { RiDraggable } from 'react-icons/ri';

export default function RolesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Subscription plans</PageTitle>
          <PageSubTitle>
            Create subscription plans for your customers.
          </PageSubTitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="organization-plans">
          <TabList>
            <TabTrigger value="organization-plans">
              Organization Plans
            </TabTrigger>
            <TabTrigger value="user-plans">User Plans</TabTrigger>
          </TabList>
          <TabContent value="organization-plans">
            <MainContent>
              <PageBar>
                <PageBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary">
                        <LuSettings />
                        <span>Columns</span>
                        <LuChevronDown className="text-muted-foreground font-bold transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-54 px-0 py-1"
                      sideOffset={8}
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <div className="text-muted-foreground px-3 py-1 text-xs">
                        Active columns
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox disabled checked />
                          <div className="mt-1">Plan</div>
                        </div>
                        <LuLock className="text-muted-foreground size-2.5 stroke-3" />
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Trial</div>
                        </div>
                        <RiDraggable className="text-muted-foreground -mr-0.5 cursor-pointer" />
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Monthly</div>
                        </div>
                        <RiDraggable className="text-muted-foreground -mr-0.5 cursor-pointer" />
                      </div>
                      <DropdownMenuSeparator />
                      <div className="text-muted-foreground px-3 py-1 text-xs">
                        Available columns
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Plan Key</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <div className="mt-1">Annually</div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary" size="icon">
                        <LuFilter />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      className="w-54"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <DropdownMenuItem>Publicly Visible</DropdownMenuItem>
                      <DropdownMenuItem>Free Trial</DropdownMenuItem>
                      <DropdownMenuItem>Annual Amount</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </PageBarContent>
                <PageBarAction>
                  <Button>+ Create plan</Button>
                </PageBarAction>
              </PageBar>
              <div className="mt-1 -mb-2 flex flex-wrap items-center gap-2">
                <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                  <div className="flex cursor-pointer items-center gap-1 px-1.5">
                    <RxCrossCircled />
                    Publicly Visible
                  </div>
                  <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
                    Enter Value
                    <LuChevronDown className="text-muted-foreground" />
                  </div>
                </div>
                <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                  <div className="flex cursor-pointer items-center gap-1 px-1.5">
                    <RxCrossCircled />
                    Annual Amount
                  </div>
                  <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
                    Enter Value
                    <LuChevronDown className="text-muted-foreground" />
                  </div>
                </div>
                <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                  <div className="flex cursor-pointer items-center gap-1 px-1.5">
                    <RxCrossCircled />
                    Free Trial
                  </div>
                  <div className="flex cursor-pointer items-center gap-1 border-l px-1.5">
                    Enter Value
                    <LuChevronDown className="text-muted-foreground" />
                  </div>
                </div>
                <div className="text-muted-foreground cursor-pointer text-xs">
                  Clear filters
                </div>
              </div>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Plan</TableHead>
                      <TableHead>Annually</TableHead>
                      <TableHead>Plan Key</TableHead>
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Free</div>
                          <div className="text-muted-foreground text-xs">
                            Always free
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>-</TableCell>{' '}
                      <TableCell className="font-['Courier_New',monospace]">
                        free_org
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="user-plans">
            <MainContent>
              <PageBar>
                <PageBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary">
                        <LuSettings />
                        <span>Columns</span>
                        <LuChevronDown className="text-muted-foreground font-bold transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      className="w-64"
                      align="end"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
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
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="secondary" size="icon">
                    <LuFilter />
                  </Button>
                </PageBarContent>
                <PageBarAction>
                  <Button>+ Create plan</Button>
                </PageBarAction>
              </PageBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Plan</TableHead>
                      <TableHead>Annually</TableHead>
                      <TableHead>Plan Key</TableHead>
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Free</div>
                          <div className="text-muted-foreground text-xs">
                            Always free
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>-</TableCell>{' '}
                      <TableCell className="font-['Courier_New',monospace]">
                        free_org
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
