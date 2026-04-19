'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { CellActionButton } from '@/components/custom/common-ui/cell-action-button';
import { LuEye, LuSearch, LuSettings, LuTrash2 } from 'react-icons/lu';
import { Separator } from '@/components/ui/separator';
import { CopyText } from '@/components/custom/util/copy-text';
import { Button } from '@/components/custom/ui/button';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageSubTitle } from '@/components/custom/layout/page-sub-title';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';

export default function FeaturesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Features</PageTitle>
          <PageSubTitle>
            Grant access to your privileged content and data using features.
          </PageSubTitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <PageBar className="-mb-2">
                <PageBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </PageBarContent>
                <PageBarAction>
                  <Button>+ Add feature</Button>
                </PageBarAction>
              </PageBar>
              <MainSection className="pb-0">
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Key</TableHead>
                        <TableHead className="w-0"></TableHead>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">burhan</TableCell>
                        <TableCell className="font-['Courier_New',monospace]">
                          burhan
                        </TableCell>
                        <TableCell className="w-0">
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
                                <LuSettings /> Edit feature
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">
                                <LuTrash2 /> Delete feature
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          feature name
                        </TableCell>
                        <TableCell className="font-['Courier_New',monospace]">
                          feature_name
                        </TableCell>
                        <TableCell className="w-0">
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
                                <LuSettings /> Edit feature
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">
                                <LuTrash2 /> Delete feature
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
