'use client';

import { Input } from '@/components/custom/input/input';
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
  TableFoot,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { LuNotebookPen, LuTicketCheck, LuTrash2 } from 'react-icons/lu';
import { PageSubTitle } from '@/components/custom/layout/page-sub-title';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';

export default function RolesPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Roles & Permissions</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="role-sets">
          <TabList>
            <TabTrigger value="role-sets">Role sets</TabTrigger>
            <TabTrigger value="all-roles">All roles</TabTrigger>
          </TabList>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="order-1 flex flex-wrap items-center gap-2 sm:order-0">
              <Input placeholder="Search..." />
              <div>Sort by select</div>
            </div>
            <div className="ml-auto flex sm:ml-0">
              <div>action button</div>
            </div>
          </div>
          <TabContent value="role-sets">
            <MainContent>
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
                  </TableBody>
                </Table>
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="all-roles">
            <MainContent>All roles</MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
