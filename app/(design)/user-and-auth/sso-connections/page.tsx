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
  LuTicketCheck,
  LuTrash2,
} from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';

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
              {/* <InputGroup className="max-w-xs">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
              </InputGroup> */}
              <div className="w-fit">
                <Input placeholder="Search..." />
              </div>
              <div className="bg-muted flex flex-col rounded-xl py-1">
                <div
                  ref={scrollRef}
                  className="-mb-px overflow-x-auto overflow-y-auto pb-px"
                >
                  <table className="w-full border-separate border-spacing-0">
                    <thead
                      className={cn(
                        'sticky top-0 z-10',
                        scrolled ? 'bg-muted' : ''
                      )}
                    >
                      <tr className="text-secondary-foreground text-left text-xs">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Key</th>
                        <th className="px-4 py-3">Roles</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody
                      className={cn(
                        'relative isolate',
                        'before:bg-background before:absolute before:inset-0 before:-z-10 before:mx-1 before:rounded-lg',
                        'before:ring-1 before:ring-[#191C21]/4 dark:before:ring-black/20',
                        'before:shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)]',
                        'dark:before:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,2),0_0_3px_0_rgba(0,0,0,0.2)]'
                      )}
                    >
                      <tr className="group cursor-pointer transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4">
                        <td className="border-border border-b p-4 text-sm">
                          <div>
                            <div className="font-medium">name</div>
                            <div className="text-muted-foreground text-xs">
                              description
                            </div>
                          </div>
                        </td>
                        <td className="border-border border-b p-4 font-['Courier_New',monospace]">
                          role_set:name
                        </td>
                        <td className="border-border border-b py-4 pr-5 pl-4">
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
                        </td>
                        <td className="border-border border-b p-4 text-sm">
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
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4">
                        <td className="border-border border-b p-4 text-sm">
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
                        </td>
                        <td className="border-border border-b p-4 font-['Courier_New',monospace] text-sm">
                          role_set:default
                        </td>
                        <td className="border-border border-b p-4 text-sm">
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
                        </td>
                        <td className="border-border border-b p-4 text-sm">
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
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4">
                        <td className="p-4 text-sm">
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
                        </td>
                        <td className="p-4 font-['Courier_New',monospace] text-sm">
                          role_set:default
                        </td>
                        <td className="p-4 text-sm">
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
                        </td>
                        <td className="p-4 text-sm">
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <footer className="text-muted-foreground p-4 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex w-full items-center gap-1">
                      <span>1-1</span>
                      <span>of</span>
                      <span>1</span>
                      <Separator orientation="vertical" className="mx-2" />
                      <span className="mr-2">Results per page</span>
                      <Select>
                        <SelectTrigger className="h-5! w-15! rounded-sm text-xs">
                          <SelectValue placeholder="10" />
                        </SelectTrigger>
                        <SelectContent className="w-15! text-xs">
                          <SelectItem value="10" className="w-15! text-xs">
                            10
                          </SelectItem>
                          <SelectItem value="20" className="w-15! text-xs">
                            20
                          </SelectItem>
                          <SelectItem value="30" className="w-15! text-xs">
                            30
                          </SelectItem>
                          <SelectItem value="40" className="w-15! text-xs">
                            40
                          </SelectItem>
                          <SelectItem value="50" className="w-15! text-xs">
                            50
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <PaginationButton className="border-0 bg-transparent">
                        <LuChevronFirst />
                      </PaginationButton>
                      <PaginationButton>
                        <LuChevronLeft />
                      </PaginationButton>
                      <span className="font-medium">1/1</span>
                      <PaginationButton>
                        <LuChevronRight />
                      </PaginationButton>
                      <PaginationButton className="border-0 bg-transparent">
                        <LuChevronLast />
                      </PaginationButton>
                    </div>
                  </div>
                </footer>
              </div>
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
