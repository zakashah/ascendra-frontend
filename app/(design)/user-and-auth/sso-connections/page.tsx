'use client';

import { Button } from '@/components/button/button';
import { Input } from '@/components/custom/input/input';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tab/tab-content';
import { TabList } from '@/components/custom/tab/tab-list';
import { TabTrigger } from '@/components/custom/tab/tab-trigger';
import { Tabs } from '@/components/custom/tab/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';

import { CellActionButton } from '@/components/custom/common-ui/cell-action-button';
import { PaginationButton } from '@/components/custom/common-ui/pagination-button';
import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  LuChevronDown,
  LuChevronFirst,
  LuChevronLast,
  LuChevronLeft,
  LuChevronRight,
  LuNotebookPen,
  LuSearch,
  LuTicketCheck,
  LuTrash2,
} from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';
import {
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';

export default function SSOConnectionsPage() {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 0);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);
  return (
    <>
      <PageHeader>
        <PageTitle>SSO Connections</PageTitle>
        <PageHeaderAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
              <Button>
                Add connection
                <LuChevronDown className="font-bold transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              className="w-90"
              align="end"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuItem className="flex flex-col items-start gap-0">
                <div className="font-medium">For all users</div>
                <div className="text-muted-foreground text-xs">
                  Add social SSO connection for all users
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-0">
                <div className="flex w-full items-center">
                  <span className="font-medium">
                    For special domains and organization users
                  </span>
                  <ProBadge className="ml-2">Pro</ProBadge>
                </div>
                <div className="text-muted-foreground text-xs">
                  Add social SSO connection for all users
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="all">
          <TabList>
            <TabTrigger value="all">All</TabTrigger>
            <TabTrigger value="social">Social</TabTrigger>
            <TabTrigger value="enterprise">Enterprise</TabTrigger>
          </TabList>
          <TabContent value="all">
            <MainContent>
              <InputGroup className="max-w-xs">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <LuSearch className="text-foreground size-3.5" />
                </InputGroupAddon>
                {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
              </InputGroup>
              {/* <div className="w-fit">
                <Input placeholder="Search..." />
              </div> */}
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Key</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">name</div>
                          <div className="text-muted-foreground text-xs">
                            description
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        role_set:name
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Admin
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="font-normal"
                        >
                          Member
                        </SimpleBadge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild className="group">
                            <CellActionButton />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-64"
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            <DropdownMenuItem>
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            Default role set
                            <SimpleBadge
                              variant="secondary"
                              className="ml-2 font-normal"
                            >
                              Default role set
                            </SimpleBadge>
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Default role set accross the instance
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        role_set:default
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Admin
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Member
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="font-normal"
                        >
                          name
                        </SimpleBadge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild className="group">
                            <CellActionButton />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-64"
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            <DropdownMenuItem>
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            Default role set
                            <SimpleBadge
                              variant="secondary"
                              className="ml-2 font-normal"
                            >
                              Default role set
                            </SimpleBadge>
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Default role set accross the instance
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        role_set:default
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Admin
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Member
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="font-normal"
                        >
                          name
                        </SimpleBadge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild className="group">
                            <CellActionButton />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-64"
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            <DropdownMenuItem>
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="social">
            <MainContent>Social</MainContent>
          </TabContent>
          <TabContent value="enterprise">
            <MainContent>Enterprise</MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
