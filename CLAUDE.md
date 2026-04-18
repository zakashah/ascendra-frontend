# Ascendra Pay — Project Context

## What Is Ascendra Pay

Ascendra Pay is a B2B invoice-settling SaaS platform targeted at the Pakistan market. The first vertical is **schools** — enabling schools to manage parents, track student fee invoices, and ensure timely payment collection. The platform is designed to be generic enough to serve other merchant categories (e.g. clinics, tutoring centers) in the future, so all terminology is generalized: merchants (not schools), clients/parents, students.

---

## The 3 Portals

### 1. Ascendra Admin Portal
An internal dashboard for the Ascendra team. Admins can oversee all merchants and their clients, manage platform-level settings, and monitor activity across the system.

### 2. Merchant/School Admin Portal ← **Current Focus**
A dashboard for individual merchants (e.g. a school). Merchants can:
- Manage their clients (parents) and students
- Create and send invoices
- Track invoice status (pending / paid / overdue)
- Send notifications and payment reminders to parents

### 3. Parent Mobile App
A mobile application for parents. Parents can:
- View all invoices for their children
- Pay invoices
- Review payment history

A good reference for UX inspiration: **Zenda**.

---

## MVP Scope

- **Portal:** Merchant/School Admin only
- **UI-only** for now — no backend integration, all data is mocked/static
- **Pages in scope:** Parents Management (first), Dashboard/Overview, Invoice Management
- **Out of scope for MVP:** notifications, Ascendra Admin portal, Parent App, real API/auth

See [docs/merchant-admin-specs.md](docs/merchant-admin-specs.md) for detailed feature specs.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI + Base UI (`@base-ui/react`) |
| Component Library | shadcn/ui (style: `radix-nova`, color: `stone`) |
| Icons | `lucide-react` + `react-icons` |
| Auth | `next-auth` v4 |
| Forms | `react-hook-form` + `zod` |
| Data Fetching | `@tanstack/react-query` + `axios` |
| Theming | `next-themes` (dark mode) |
| Class Utility | `clsx` + `tailwind-merge` via `cn()` in `lib/utils.ts` |

Path alias: `@/` maps to the repository root (configured in `tsconfig.json`).

---

## Directory Structure

```
ascendra-pay/
├── app/
│   ├── (dashboard)/       ← All admin portal pages
│   │   ├── admin/         ← Ascendra Admin pages (overview, users, settings, analytics)
│   │   └── merchant/      ← Merchant Admin pages (parents, invoices, dashboard)
│   ├── (design)/          ← Design system showcase pages (not for production)
│   └── globals.css        ← Global CSS + Tailwind tokens
├── components/
│   ├── ui/                ← shadcn/ui base primitives (button, input, table, card, etc.)
│   └── custom/            ← Project-specific wrappers and compositions
│       ├── common-ui/     ← Badges, StatusDot, alerts, pagination
│       ├── input/         ← Enhanced Button and Input with shadow/gloss system
│       ├── layout/        ← All page structure components (PageLayout, PageBar, etc.)
│       ├── menu-header/   ← Top breadcrumb/menu header variants
│       ├── nav/           ← Navigation links and containers
│       ├── side-bar/      ← Sidebar and menu item components
│       ├── tab/           ← Tab components (TabsUI, TabsList, etc.)
│       └── ui/            ← Custom wrappers over /ui/ components
├── docs/
│   ├── design-system/     ← Full design system docs (tokens, components, layout, patterns)
│   ├── product-overview.md
│   ├── data-model.md
│   └── merchant-admin-specs.md
├── hooks/                 ← Custom React hooks
├── lib/
│   └── utils.ts           ← cn() utility function
├── providers/
│   └── tabs-context.ts    ← Tab state context
└── public/                ← Static assets
```

---

## Design System

The project has a fully documented design system. Start here:

- [docs/design-system/00-overview.md](docs/design-system/00-overview.md) — Stack, component architecture, conventions
- [docs/design-system/01-tokens.md](docs/design-system/01-tokens.md) — Color tokens, typography, spacing, shadows
- [docs/design-system/02-components.md](docs/design-system/02-components.md) — Component reference with variants
- [docs/design-system/03-layout.md](docs/design-system/03-layout.md) — Layout system and composition tree
- [docs/design-system/04-usage-patterns.md](docs/design-system/04-usage-patterns.md) — Page patterns and component cheat sheet

Design is modeled after the **Clerk dashboard** admin panel. Brand color: `#6c47ff`. Typography: Geist Sans + Geist Mono.

---

## Key Conventions

### Component Layers
- **`components/ui/`** — shadcn/ui primitives, lightly styled, avoid editing directly
- **`components/custom/`** — opinionated project wrappers, always prefer these

### Page Structure
Every page follows this composition:
```
PageLayout
├── MenuHeader (breadcrumb)
├── Nav (horizontal tabs, if needed)
└── MainContainer
    ├── SideBar (left nav, if needed)
    └── SectionMain
        └── PageWrapper
            ├── PageBar
            ├── PageHeader
            └── PageContent
                └── PageMain
```

### Three Page Patterns
1. **Table Page** — list with search, filter, pagination (e.g. Parents list)
2. **Settings Page** — grouped settings using MainSection components
3. **Form Page** — create/edit with Card containers

### Form Fields
```
Field
├── FieldLabel
├── Input / Select / Switch / etc.
├── FieldDescription
└── FieldError
```

### Styling
- Use `cn()` from `@/lib/utils` for all conditional class merging
- Use CVA (Class Variance Authority) for variant-based components
- Custom button shadows use a gloss effect (inset gradients) — see design system docs

---

## Project Docs

- [docs/product-overview.md](docs/product-overview.md) — Full product description, portals, MVP scope
- [docs/data-model.md](docs/data-model.md) — Entities and relationships
- [docs/merchant-admin-specs.md](docs/merchant-admin-specs.md) — Merchant Admin feature specs
