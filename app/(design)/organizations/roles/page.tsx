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
import {
  LuCheck,
  LuNotebookPen,
  LuTicketCheck,
  LuTrash2,
} from 'react-icons/lu';
import { PageSubTitle } from '@/components/custom/layout/page-sub-title';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CopyText } from '@/components/custom/util/copy-text';

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
          <TabContent value="role-sets">
            <MainContent>
              <PageBar className="-mb-2">
                <PageBarContent>
                  <Input placeholder="Search..." />
                  <div>Sort by select</div>
                </PageBarContent>
                <PageBarAction>
                  <div className="text-[11px]">3/10 used</div>
                  <div>action button</div>
                </PageBarAction>
              </PageBar>
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
                        <CopyText value="role_set:name" />
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
                        <CopyText value="role_set:default" showTooltip />
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
                          <DropdownMenuTrigger asChild>
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
            <MainContent>
              <PageBar className="-mb-2">
                <PageBarContent>
                  <Input placeholder="Search..." />
                  <div>Sort by select</div>
                </PageBarContent>
                <PageBarAction>
                  <div>action button</div>
                </PageBarAction>
              </PageBar>
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
                          <div className="font-medium">Admin</div>
                          <div className="text-muted-foreground text-xs">
                            Role with elevated permissions in the organization.
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="org:admin" showTooltip />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Mange Organization
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Delete Organization
                        </SimpleBadge>
                        <span className="text-muted-foreground text-xs text-nowrap">
                          6+ more
                        </span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
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
                          <div className="font-medium">Member</div>
                          <div className="text-muted-foreground text-xs">
                            Role with non-privileged permissions in the
                            organization.
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="org:member" />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Read members
                        </SimpleBadge>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Read billing
                        </SimpleBadge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
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
                          <div className="font-medium">name</div>
                          <div className="text-muted-foreground text-xs">
                            description or role
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="org:name" />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          name_1
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
        </Tabs>
      </PageMain>
    </>
  );
}
