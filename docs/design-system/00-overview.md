# Design System — Overview

This document is the entry point for the Ascendra Pay design system. It covers the tech stack, component architecture, and key conventions used across the app.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI + Base UI (`@base-ui/react`) |
| Component Library | shadcn/ui (style: `radix-nova`, base color: `stone`) |
| Icons | `lucide-react` + `react-icons` |
| Auth | `next-auth` v4 (Clerk will be added on top) |
| Forms | `react-hook-form` + `zod` |
| Data Fetching | `@tanstack/react-query` + `axios` |
| Theming | `next-themes` (dark mode) |
| Class Utility | `clsx` + `tailwind-merge` via `cn()` |

---

## Component Architecture

There are two distinct component layers:

```
/components/
├── ui/               ← shadcn/ui base components (Radix-backed primitives)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── table.tsx
│   ├── field.tsx
│   └── ...
└── custom/           ← Project-specific wrappers and compositions
    ├── common-ui/    ← Badges, status indicators, alerts
    ├── input/        ← Enhanced button and input with shadow/gloss system
    ├── layout/       ← All page structure components (35+)
    ├── menu-header/  ← Top menu / breadcrumb variants
    ├── nav/          ← Navigation links and containers
    ├── side-bar/     ← Sidebar variants (10+)
    ├── tab/          ← Tab components
    ├── ui/           ← Custom wrappers over /ui/ components
    └── util/         ← Utilities (copy text, scroll-to-top)
```

**Rule of thumb:**
- `components/ui/` = unstyled/lightly-styled primitives, safe to use anywhere
- `components/custom/` = opinionated, project-styled versions — prefer these for new pages

---

## Core Utilities

### `cn()` — Class Merger
**File:** `lib/utils.ts`

```ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Use `cn()` everywhere you need conditional or merged Tailwind classes. Never concatenate class strings manually.

### CVA — Class Variance Authority
All variant-based components (buttons, badges, inputs) use `cva()` from `class-variance-authority`.

```ts
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('base-classes', {
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { sm: '...', default: '...', lg: '...' },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
})
```

### `data-slot` Attributes
Every component sets a `data-slot` attribute for CSS targeting and debugging:

```tsx
<button data-slot="button" data-variant="primary" data-size="default" />
<div data-slot="card" />
<input data-slot="input" />
```

This enables parent-to-child styling (e.g., `[data-slot=card]:rounded-xl`) and makes component boundaries visible in DevTools.

---

## Theming

- Dark mode is controlled by `next-themes` with a `.dark` class on `<html>`
- All colors are defined as CSS custom properties in `app/globals.css`
- The color space is **OKLCH** — not hex or HSL — for perceptual uniformity
- Dark mode overrides live in `.dark { ... }` block in `globals.css`
- Tailwind reads these via `@theme inline { ... }` mappings

See `01-tokens.md` for the full token reference.

---

## File Conventions

- All interactive/stateful components are `'use client'`
- Server components are the default (no directive needed)
- Path alias `@/` maps to the repo root (`tsconfig.json`)
- Shadcn config is in `components.json`

---

## Design Inspiration

The UI is modelled after the Clerk dashboard admin panel. The `globals.css` file contains commented-out Clerk color variables (for reference) that were inspected from Clerk's actual UI. The purple brand color (`#6c47ff`) is the Clerk purple.
