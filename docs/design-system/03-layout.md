# Design System — Layout

The layout system is built from composable components in `components/custom/layout/`. Every page in the app is assembled from these building blocks.

---

## Full Page Composition Tree

```
app/(dashboard)/layout.tsx
└── PageLayout                          ← grid: 1col, rows: [auto auto 1fr], min-h-screen
    ├── MenuHeader                      ← top breadcrumb bar (row 1)
    ├── Nav                             ← horizontal nav tabs (row 2)
    └── MainContainer                   ← flex row (row 3, flex-1)
         ├── SideBar                    ← fixed left sidebar
         │    ├── SideBarHeader
         │    ├── SideBarMain
         │    │    └── SideBarMenuSet
         │    │         └── SideBarMenuItem (with icon, label, badge)
         │    └── SideBarFooter
         └── SectionMain                ← flex-1 right content area
              └── PageWrapper
                   ├── PageBar          ← top bar with breadcrumb/actions
                   │    ├── PageBarContent
                   │    └── PageBarAction
                   ├── PageHeader
                   │    ├── PageTitle
                   │    ├── PageSubTitle
                   │    └── PageHeaderGroup / PageHeaderAction
                   └── PageContent
                        └── PageMain    ← the actual page content goes here
```

---

## PageLayout

**File:** `components/custom/layout/page-layout.tsx`

Root wrapper for every page. Sets up the grid.

```tsx
import { PageLayout } from '@/components/custom/layout/page-layout';

<PageLayout>{children}</PageLayout>;
```

CSS: `grid grid-cols-1 grid-rows-[auto_auto_1fr] min-h-screen relative`

Has `id="app-layout"` and `data-sidebar="closed"` for sidebar state tracking.

---

## MainContainer

**File:** `components/custom/layout/main-container.tsx`

Flex row wrapper that holds the sidebar and main content side by side.

```tsx
import { MainContainer } from '@/components/custom/layout/main-container';

<MainContainer>
  <SideBar />
  <SectionMain>...</SectionMain>
</MainContainer>;
```

---

## SectionMain

**File:** `components/custom/layout/section-main.tsx`

The main scrollable content area to the right of the sidebar. Takes `flex-1`.

---

## PageWrapper

**File:** `components/custom/layout/page-wrapper.tsx`

Inner wrapper inside `SectionMain`. Houses `PageBar`, `PageHeader`, and `PageContent`.

---

## PageBar

**File:** `components/custom/layout/page-bar.tsx`

A slim horizontal bar above the page header. Used for breadcrumbs, secondary navigation, or quick stats.

```tsx
import {
  PageBar,
  PageBarContent,
  PageBarAction,
} from '@/components/custom/layout/page-bar';

<DataTableBar>
  <PageBarContent>Invoices / Term 1 2025</DataTableBarContent>
  <DataTableBarAction>
    <Button variant="outline" size="sm">
      Export
    </Button>
  </DataTableBarAction>
</DataTable>;
```

`PageBarContent` — left side
`PageBarAction` — right side (flex items-center gap-2)

---

## PageHeader

**File:** `components/custom/layout/page-header.tsx`

Defines the top of the page content area with title and subtitle.

```tsx
import {
  PageHeader,
  PageTitle,
  PageSubTitle,
  PageHeaderGroup,
  PageHeaderAction,
} from '@/components/custom/layout/';

<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Invoices</PageTitle>
    <PageSubTitle>Manage and track all school invoices</PageSubTitle>
  </PageHeaderGroup>
  <PageHeaderAction>
    <Button variant="primary" size="default">
      <PlusIcon />
      New Invoice
    </Button>
  </PageHeaderAction>
</PageHeader>;
```

**PageTitle:** `text-2xl font-medium`
**PageSubTitle:** `text-muted-foreground text-sm`
**PageHeaderGroup:** Wraps title + subtitle as a flex column
**PageHeaderAction:** Right-aligned action area (flex gap-2)

---

## PageContent / PageMain

**File:** `components/custom/layout/page-content.tsx`, `page-main.tsx`

```tsx
import { PageContent, PageMain } from '@/components/custom/layout/';

<PageContent>
  <PageMain>{/* Your actual content */}</PageMain>
</PageContent>;
```

`PageContent` handles the container/padding. `PageMain` is the flex column content area.

---

## MainSection — Settings Page Pattern

The `MainSection` family is used for settings-style pages: a section with a header, a panel of items, and a save footer.

```tsx
import {
  MainSection,
  MainSectionHeader,
  MainSectionPanel,
  MainSectionPanelItem,
  MainSectionFooter,
} from '@/components/custom/layout/';

<MainSection>
  <MainSectionHeader
    title="Payment Settings"
    description="Configure how fees are collected and processed"
  />
  <MainSectionPanel>
    <MainSectionPanelItem
      label="Auto-send receipts"
      description="Send email receipts automatically when payment is received"
    >
      <Switch />
    </MainSectionPanelItem>
    <MainSectionPanelItem
      label="Late fee percentage"
      description="Applied after 30 days overdue"
    >
      <Input type="number" defaultValue="5" className="w-20" />
    </MainSectionPanelItem>
  </MainSectionPanel>
  <MainSectionFooter>
    <Button variant="primary">Save changes</Button>
  </MainSectionFooter>
</MainSection>;
```

**`MainSectionPanelItem`:** Label on the left, children (control) on the right. Full-width horizontal layout with `justify-between`.

**Nesting:** Multiple `MainSection` blocks can stack vertically on the same page for grouped settings.

---

## Sidebar

**File:** `components/ui/sidebar.tsx` + `components/custom/side-bar/`

### Dimensions

| Mode                  | Width                                 |
| --------------------- | ------------------------------------- |
| Desktop               | `w-62` (248px)                        |
| Mobile                | `w-80` (320px) — Sheet/drawer overlay |
| Collapsed (icon mode) | `w-12` (48px)                         |

### State Management

- State is tracked in a cookie: `sidebar_state`
- Context exposed via `useSidebar()` hook
- Toggle keyboard shortcut: `Ctrl+B` / `Cmd+B`

### Structure

```tsx
<SideBar>
  <SideBarHeader>{/* Logo, workspace name */}</SideBarHeader>
  <SideBarMain>
    <SideBarMenuSet label="Invoice Management">
      <SideBarMenuItem href="/invoices" icon={<FileTextIcon />}>
        All Invoices
      </SideBarMenuItem>
      <SideBarMenuItem href="/invoices/create" icon={<PlusIcon />}>
        New Invoice
      </SideBarMenuItem>
    </SideBarMenuSet>
    <SideBarMenuSet label="School Management">
      <SideBarMenuItem href="/schools" icon={<SchoolIcon />}>
        Schools
      </SideBarMenuItem>
      <SideBarMenuItem href="/parents" icon={<UsersIcon />}>
        Parents
      </SideBarMenuItem>
    </SideBarMenuSet>
  </SideBarMain>
  <SideBarFooter>{/* User account, settings */}</SideBarFooter>
</SideBar>
```

**`SideBarMenuSet`:** A labeled group of menu items with a small section header.

**`SideBarMenuItem`:** A link item with icon, label, optional badge. Active state is handled via `href` matching current route.

---

## Navigation (Top Nav)

**File:** `components/custom/nav/nav.tsx`, `nav-link.tsx`, `nav-link-badge.tsx`

Horizontal tab-style navigation bar. Rendered between `MenuHeader` and `MainContainer`.

```tsx
import { Nav } from '@/components/custom/nav/nav';
import { NavLink } from '@/components/custom/nav/nav-link';
import { NavLinkBadge } from '@/components/custom/nav/nav-link-badge';

<Nav>
  <NavLink href="/dashboard">Dashboard</NavLink>
  <NavLink href="/invoices">
    Invoices
    <NavLinkBadge>12</NavLinkBadge>
  </NavLink>
  <NavLink href="/settings">Settings</NavLink>
</Nav>;
```

Active link gets an underline/highlight via route matching.

---

## MenuHeader (Top Breadcrumb Bar)

**File:** `components/custom/menu-header/`

The very top bar with breadcrumb trail, workspace switcher, and user controls.

```tsx
import { MenuHeader } from '@/components/custom/menu-header/menu-header';

<MenuHeader>{/* Breadcrumb items are configured inside */}</MenuHeader>;
```

Six variants exist for different breadcrumb layouts. See `components/custom/menu-header/` for all files.

---

## Overlay (Mobile Sidebar)

**File:** `components/custom/layout/side-bar-overlay.tsx`

Rendered alongside `SideBar` in mobile view. A semi-transparent backdrop that closes the sidebar when tapped.

---

## AsideContent

**File:** `components/custom/layout/aside-content.tsx`

Optional right-side panel for secondary content within `MainContainer`. Used for detail panels or secondary navigation.

---

## Tabs

**File:** `components/custom/tab/`

Page-level tabs for sub-navigation within a page (e.g., "Overview | Invoices | Settings" inside a school detail page).

```tsx
import {
  TabsUI,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/custom/tab/';

<TabsUI defaultValue="invoices">
  <TabsList>
    <TabsTrigger value="invoices">Invoices</TabsTrigger>
    <TabsTrigger value="students">Students</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="invoices">...</TabsContent>
  <TabsContent value="students">...</TabsContent>
  <TabsContent value="settings">...</TabsContent>
</TabsUI>;
```

Custom trigger has a bottom-border active indicator style.

---

## Layout Spacing Reference

| Location                        | Spacing                                                 |
| ------------------------------- | ------------------------------------------------------- |
| Page content sides              | `--app-layout-spacing` (1.5rem mobile / 2.5rem desktop) |
| Section gap (vertical stacking) | `gap-6`                                                 |
| PageHeader bottom               | `pb-6`                                                  |
| Panel item height               | min `h-12` or content-driven                            |
| Card to card gap                | `gap-4`                                                 |

---

## Responsive Breakpoints

The project uses Tailwind's default breakpoints:

| Prefix | Min-width | Notes                           |
| ------ | --------- | ------------------------------- |
| (none) | 0px       | Mobile-first base               |
| `sm:`  | 640px     | Rarely used                     |
| `md:`  | 768px     | Most layout changes happen here |
| `lg:`  | 1024px    |                                 |
| `xl:`  | 1280px    |                                 |

Sidebar becomes an overlay at below `md`. Container padding changes at `md`. Most responsive layout shifts use `md:` as the breakpoint.
