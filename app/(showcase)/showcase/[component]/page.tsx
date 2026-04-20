import { notFound } from 'next/navigation';
import { registry } from '@/lib/showcase/registry';
import { navConfig } from '@/lib/showcase/nav-config';
import { ButtonDocContent } from '@/components/custom/showcase/previews/button-preview';
import { SimpleBadgeDocContent } from '@/components/custom/showcase/previews/simple-badge-preview';
import { BubbleBadgeDocContent } from '@/components/custom/showcase/previews/bubble-badge-preview';
import { StatusDotDocContent } from '@/components/custom/showcase/previews/status-dot-preview';
import { SimpleAlertDocContent } from '@/components/custom/showcase/previews/simple-alert-preview';
import { ProBadgeDocContent } from '@/components/custom/showcase/previews/pro-badge-preview';
import { InputDocContent } from '@/components/custom/showcase/previews/input-preview';
import { InputGroupDocContent } from '@/components/custom/showcase/previews/input-group-preview';
import { CheckboxDocContent } from '@/components/custom/showcase/previews/checkbox-preview';
import { RadioGroupDocContent } from '@/components/custom/showcase/previews/radio-group-preview';
import { SwitchDocContent } from '@/components/custom/showcase/previews/switch-preview';
import { SelectDocContent } from '@/components/custom/showcase/previews/select-preview';
import { AnchorDocContent } from '@/components/custom/showcase/previews/anchor-preview';
import { NavLinkDocContent } from '@/components/custom/showcase/previews/nav-link-preview';
import { HeaderDocContent } from '@/components/custom/showcase/previews/header-preview';
import { DialogDocContent } from '@/components/custom/showcase/previews/dialog-preview';
import { SheetDocContent } from '@/components/custom/showcase/previews/sheet-preview';
import { DropdownMenuDocContent } from '@/components/custom/showcase/previews/dropdown-menu-preview';
import { TableDocContent } from '@/components/custom/showcase/previews/table-preview';
import { EmptyDocContent } from '@/components/custom/showcase/previews/empty-preview';
import { MainSectionDocContent } from '@/components/custom/showcase/previews/main-section-preview';
import { PageHeaderDocContent } from '@/components/custom/showcase/previews/page-header-preview';
import { PageBarDocContent } from '@/components/custom/showcase/previews/page-bar-preview';
import { AsideContentDocContent } from '@/components/custom/showcase/previews/aside-content-preview';
import { TabsDocContent } from '@/components/custom/showcase/previews/tabs-preview';
import { SidebarMenuDocContent } from '@/components/custom/showcase/previews/sidebar-menu-preview';
import { CopyTextDocContent } from '@/components/custom/showcase/previews/copy-text-preview';
import { NameAvatarDocContent } from '@/components/custom/showcase/previews/name-avatar-preview';
import { ThemeToggleDocContent } from '@/components/custom/showcase/previews/theme-toggle-preview';
import { PaginationButtonDocContent } from '@/components/custom/showcase/previews/pagination-button-preview';
import { RowActionButtonDocContent } from '@/components/custom/showcase/previews/row-action-button-preview';

type DocComponent = React.ComponentType;

const docComponents: Partial<Record<string, DocComponent>> = {
  'button': ButtonDocContent,
  'simple-badge': SimpleBadgeDocContent,
  'bubble-badge': BubbleBadgeDocContent,
  'status-dot': StatusDotDocContent,
  'simple-alert': SimpleAlertDocContent,
  'pro-badge': ProBadgeDocContent,
  'input': InputDocContent,
  'input-group': InputGroupDocContent,
  'checkbox': CheckboxDocContent,
  'radio-group': RadioGroupDocContent,
  'switch': SwitchDocContent,
  'select': SelectDocContent,
  'anchor': AnchorDocContent,
  'nav-link': NavLinkDocContent,
  'header': HeaderDocContent,
  'dialog': DialogDocContent,
  'sheet': SheetDocContent,
  'dropdown-menu': DropdownMenuDocContent,
  'table': TableDocContent,
  'empty': EmptyDocContent,
  'main-section': MainSectionDocContent,
  'page-header': PageHeaderDocContent,
  'page-bar': PageBarDocContent,
  'aside-content': AsideContentDocContent,
  'tabs': TabsDocContent,
  'sidebar-menu': SidebarMenuDocContent,
  'copy-text': CopyTextDocContent,
  'name-avatar': NameAvatarDocContent,
  'theme-toggle': ThemeToggleDocContent,
  'pagination-button': PaginationButtonDocContent,
  'row-action-button': RowActionButtonDocContent,
};

export async function generateStaticParams() {
  return navConfig
    .flatMap((c) => c.items)
    .filter((item) => item.slug !== '')
    .map((item) => ({ component: item.slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;
  const meta = registry[component];

  if (!meta) notFound();

  const DocContent = docComponents[component];

  return (
    <div className="mx-auto max-w-3xl px-8 py-12">
      {/* Component heading */}
      <div className="mb-8">
        <h1 className="mb-1.5 text-2xl font-semibold tracking-tight text-foreground">
          {meta.name}
        </h1>
        <p className="text-sm text-muted-foreground">{meta.description}</p>
      </div>

      {/* Doc content or coming-soon placeholder */}
      {DocContent ? (
        <DocContent />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed py-16 text-center">
          <p className="text-sm font-medium text-foreground">Documentation coming soon</p>
          <p className="text-xs text-muted-foreground">
            Import from{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
              {meta.importPath}
            </code>
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            {`import { ${meta.importNames.join(', ')} } from "${meta.importPath}"`}
          </p>
        </div>
      )}
    </div>
  );
}
