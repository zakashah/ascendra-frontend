# Design System — Tokens

All tokens are defined in `app/globals.css`. The file has three layers:
1. **shadcn semantic tokens** (`--background`, `--primary`, etc.) — OKLCH, consumed by Tailwind utilities
2. **Clerk raw palette** (`--color-gray-*`, `--color-purple-*`, etc.) — hex values, used by components directly
3. **Clerk semantic aliases** (`--brand`, `--positive`, `--negative`, etc.) — map palette to intent, also exposed as Tailwind utilities

---

## Layer 1 — shadcn Semantic Tokens

Used via Tailwind classes: `bg-primary`, `text-foreground`, `border-border`, etc.
Defined in OKLCH color space (perceptually uniform).

| Token | Light | Dark | Hex (light) | Tailwind class |
|---|---|---|---|---|
| `--background` | `oklch(1 0 0)` | `oklch(0.2238 ...)` | `#ffffff` / `#1b1b24` | `bg-background` |
| `--foreground` | `oklch(0.2928 ...)` | `oklch(0.9734 ...)` | `#2b2b34` / `#f6f6f7` | `text-foreground` |
| `--surface-soft` | `oklch(0.98 0 0)` | `oklch(0.22 0 0)` | `#fafafa` / `#222222` | `bg-surface-soft` |
| `--card` | `oklch(1 0 0)` | `oklch(0.216 ...)` | `#ffffff` / `≈#2b2520` | `bg-card` |
| `--card-foreground` | `oklch(0.147 ...)` | `oklch(0.985 ...)` | `≈#2b2520` / `#f6f6f7` | `text-card-foreground` |
| `--popover` | same as card | same as card | — | `bg-popover` |
| `--popover-foreground` | same as card-fg | same as card-fg | — | `text-popover-foreground` |
| `--primary` | `oklch(0.5573 0.2543 283.67)` | same | **`#6c47ff`** | `bg-primary`, `text-primary` |
| `--primary-foreground` | off-white | dark teal | — | `text-primary-foreground` |
| `--secondary` | `oklch(1 0 0)` | `oklch(0.3256 ...)` | `#ffffff` / `#33333e` | `bg-secondary` |
| `--secondary-foreground` | `oklch(0.147 ...)` | `oklch(0.985 ...)` | — | `text-secondary-foreground` |
| `--muted` | `oklch(0.9854 ...)` | `oklch(0.1785 ...)` | `#fafafb` / `#111113` | `bg-muted` |
| `--muted-foreground` | `oklch(0.4913 ...)` | `oklch(0.7507 ...)` | `#5f5f6f` / `#adadb7` | `text-muted-foreground` |
| `--accent` | `oklch(0.97 ...)` | `oklch(0.268 ...)` | `≈#f6f6f7` / `≈#2b2520` | `bg-accent` |
| `--accent-foreground` | `oklch(0.216 ...)` | `oklch(0.985 ...)` | — | `text-accent-foreground` |
| `--destructive` | `oklch(0.577 0.245 27.3)` | `oklch(0.704 ...)` | `#e02e2e` / `≈#e87b7b` | `text-destructive`, `bg-destructive` |
| `--border` | `oklch(0.9437 ...)` | `oklch(0.2582 ...)` | `#ececee` / `#232328` | `border-border` |
| `--input` | `oklch(0.923 ...)` | `oklch(1 0 0 / 15%)` | `≈#ececee` / rgba | `border-input` |
| `--ring` | `oklch(0.5573 0.2543 283.67)` | same | `#6c47ff` | `ring-ring` |

### Sidebar Tokens

| Token | Light | Dark |
|---|---|---|
| `--sidebar` | `≈#f6f6f7` | same as `--card` |
| `--sidebar-foreground` | same as `--foreground` | same as `--card-foreground` |
| `--sidebar-primary` | blue (`oklch(0.61 0.11 222)`) | lighter blue |
| `--sidebar-accent` | same as `--accent` | — |
| `--sidebar-border` | `≈#ececee` | `rgba(white, 10%)` |

### Chart Tokens (data visualization)

Five blue-range shades, identical light/dark:

| Token | Approx | Tailwind |
|---|---|---|
| `--chart-1` | light blue | `bg-chart-1` |
| `--chart-2` | medium-light blue | `bg-chart-2` |
| `--chart-3` | medium blue | `bg-chart-3` |
| `--chart-4` | `≈#6694f8` | `bg-chart-4` |
| `--chart-5` | deep blue | `bg-chart-5` |

---

## Layer 2 — Clerk Raw Color Palette

Hex values defined in `:root`. Use via `var(--color-gray-500)` in CSS or `text-[var(--color-purple-700)]` as Tailwind arbitrary values. These do **not** override Tailwind's built-in color utilities.

### Gray — 16-step scale

| Variable | Hex | Description |
|---|---|---|
| `--color-gray-50` | `#fafafb` | Near-white |
| `--color-gray-100` | `#f6f6f7` | Off-white |
| `--color-gray-200` | `#ececee` | Light border |
| `--color-gray-300` | `#dbdbe0` | Divider |
| `--color-gray-400` | `#c7c7cf` | Disabled |
| `--color-gray-500` | `#adadb7` | Placeholder, dimmed |
| `--color-gray-600` | `#90909d` | Secondary icon |
| `--color-gray-700` | `#767684` | Muted text |
| `--color-gray-800` | `#5f5f6f` | Secondary text |
| `--color-gray-900` | `#4c4c5c` | |
| `--color-gray-1000` | `#3d3d4a` | |
| `--color-gray-1100` | `#33333e` | Dark secondary surface |
| `--color-gray-1200` | `#2b2b34` | Primary dark text |
| `--color-gray-1300` | `#232328` | Dark border |
| `--color-gray-1400` | `#1b1b1f` | Dark page bg |
| `--color-gray-1500` | `#111113` | Near-black |
| `--color-gray` | `#767684` | Alias for gray-700 |

### Purple — brand family

| Variable | Hex | Description |
|---|---|---|
| `--color-purple-50` | `#f5f3ff` | Tint |
| `--color-purple-100` | `#e3e0ff` | |
| `--color-purple-200` | `#ccc8ff` | |
| `--color-purple-300` | `#bab0ff` | Syntax highlight |
| `--color-purple-400` | `#a698ff` | |
| `--color-purple-500` | `#9280ff` | |
| `--color-purple-600` | `#846bff` | Dark mode brand |
| `--color-purple-700` | **`#6c47ff`** | **Brand** |
| `--color-purple-800` | `#5f15fe` | |
| `--color-purple-900` | `#4d06d1` | |
| `--color-purple-1000` | `#3707a6` | |
| `--color-purple-1100` | `#27057c` | |
| `--color-purple-1300` | `#16034b` | |
| `--color-purple` | `#6c47ff` | Alias for purple-700 |

### Green — success

| Variable | Hex |
|---|---|
| `--color-green-100` | `#aff9bf` |
| `--color-green-400` | `#31c854` |
| `--color-green-500` | `#1eb43c` |
| `--color-green-600` | `#199d34` |
| `--color-green-700` | `#15892b` — **brand green** |
| `--color-green` | `#15892b` |

### Red — error/danger

| Variable | Hex |
|---|---|
| `--color-red-50` | `#fef8f8` |
| `--color-red-100` | `#fedddd` |
| `--color-red-200` | `#fec4c4` |
| `--color-red-500` | `#f86969` |
| `--color-red-600` | `#f73d3d` — dark mode negative |
| `--color-red-700` | `#e02e2e` — **brand red** |
| `--color-red-800` | `#c22a2a` |
| `--color-red-900` | `#aa1b1b` |
| `--color-red-1000` | `#921414` |
| `--color-red-1100` | `#7a1313` |
| `--color-red-1400` | `#3d0101` |
| `--color-red` | `#e02e2e` |

### Orange — warning

| Variable | Hex |
|---|---|
| `--color-orange-50` | `#fff8f2` |
| `--color-orange-100` | `bisque` (#ffe4c4) |
| `--color-orange-500` | `#fd7224` — **brand warning** |
| `--color-orange-600` | `#e06213` |
| `--color-orange-700` | `#c3540f` — brand orange |
| `--color-orange-800` | `#a8470c` |
| `--color-orange-1200` | `#5f1e0c` |
| `--color-orange` | `#c3540f` |

### Blue — info/link

| Variable | Hex |
|---|---|
| `--color-blue-50` | `#f6faff` |
| `--color-blue-100` | `#daeafe` |
| `--color-blue-500` | `#6694f8` |
| `--color-blue-600` | `#307ff6` — dark mode info |
| `--color-blue-700` | `#236dd7` — **brand blue** |
| `--color-blue-800` | `#1c5bb6` |
| `--color-blue-1200` | `#0b1c49` |
| `--color-blue-1300` | `#0c1637` |
| `--color-blue` | `#236dd7` |

### Base

| Variable | Value | Use |
|---|---|---|
| `--color-white` | `#fff` | |
| `--color-black` | `#000` | |
| `--color-umbra` | `#191c21` | Used in shadow rgba values |

---

## Layer 3 — Clerk Semantic Aliases

Intent-based names on top of the raw palette. These **are** available as Tailwind utilities via `@theme inline`.

| Variable | Light | Dark | Hex (light) | Tailwind class |
|---|---|---|---|---|
| `--brand` | `--color-purple-700` | `--color-purple-600` | `#6c47ff` / `#846bff` | `bg-brand`, `text-brand` |
| `--positive` | `--color-green-700` | `--color-green-400` | `#15892b` / `#31c854` | `bg-positive`, `text-positive` |
| `--negative` | `--color-red-700` | `--color-red-600` | `#e02e2e` / `#f73d3d` | `bg-negative`, `text-negative` |
| `--warning` | `--color-orange-500` | `--color-orange-500` | `#fd7224` (same) | `bg-warning`, `text-warning` |
| `--info` | `--color-blue-700` | `--color-blue-600` | `#236dd7` / `#307ff6` | `bg-info`, `text-info` |
| `--dimmed` | `--color-gray-500` | `--color-gray-800` | `#adadb7` / `#5f5f6f` | `text-dimmed` |
| `--bg-main` | `--color-white` | `--color-gray-1400` | `#ffffff` / `#1b1b1f` | (CSS var only) |
| `--bg-menu` | `--color-white` | `--color-gray-1100` | `#ffffff` / `#33333e` | (CSS var only) |
| `--bg-separator` | `--color-gray-200` | `--color-gray-1300` | `#ececee` / `#232328` | (CSS var only) |

**Note on `--brand` vs `--primary`:**
- `--primary` (shadcn) = `#6c47ff` — the same purple, used by Tailwind's `bg-primary`, `text-primary`, focus rings, buttons
- `--brand` (Clerk) = `var(--color-purple-700)` = same hex, but changes to `#846bff` in dark mode
- Use `primary` for components, `brand` for semantic intent / Clerk SDK theming

### Shadows

| Variable | Value | Use |
|---|---|---|
| `--shadow-xs` (light) | `0px 0px 2px 0px #00000014, 0px 1px 2px 0px #0000000f, 0px 0px 0px 1px #0000000a` | Subtle card/input shadow |
| `--shadow-xs` (dark) | `0px 1.5px 2px 0px #00000052, 0px -1px 0px 0px #ffffff0a, 0px 0px 0px 1px #ffffff1f` | — |

---

## Clerk Component SDK Variables

These theme `@clerk/nextjs` auth UI components (sign-in/sign-up modals). They reference our design system tokens so Clerk's UI matches our app once installed.

```css
--clerk-color-primary          → var(--brand)            /* #6c47ff */
--clerk-color-foreground       → var(--foreground)
--clerk-color-muted-foreground → var(--muted-foreground)
--clerk-color-success          → var(--positive)
--clerk-color-danger           → var(--negative)
--clerk-color-warning          → var(--warning)
--clerk-color-background       → var(--background)
--clerk-color-neutral          → var(--color-black)
--clerk-color-modal-backdrop   → #0006
--clerk-color-input            → transparent
--clerk-color-input-foreground → var(--foreground)
--clerk-color-border           → var(--border)
--clerk-font-family            → var(--font-sans)
--clerk-font-weight-bold       → 500
--clerk-font-size-xs           → 0.6875rem (11px)
--clerk-font-size-sm           → 0.75rem   (12px)
--clerk-font-size-md           → 0.875rem  (14px)
--clerk-font-size-lg           → 1rem      (16px)
--clerk-font-size-xl           → 1.125rem  (18px)
```

---

## Typography

### Fonts
- **Sans:** Geist Sans via `--font-sans` (loaded in `app/layout.tsx` via `next/font/google`)
- **Mono:** Geist Mono via `--font-geist-mono`

### Type Scale

| Usage | Class | Size |
|---|---|---|
| Page title | `text-2xl font-medium` | 1.5rem / 24px |
| Card title | `text-base font-medium leading-snug` | 1rem / 16px |
| Card title (sm) | `text-sm font-medium` | 0.875rem / 14px |
| Body | `text-sm` | 0.875rem / 14px |
| Label | `text-sm font-medium leading-none` | 0.875rem / 14px |
| Caption / helper | `text-xs` | 0.75rem / 12px |
| Badge text | `text-[0.6875rem]` | 11px |

### Font Weights
- `font-normal` (400) — body text, descriptions
- `font-medium` (500) — labels, headings, buttons, badges
- Do not use `font-bold` — not part of this design system

### Letter Spacing
- Badges: `tracking-[0.015em]`

---

## Border Radius

Base: `--radius: 0.625rem` (10px)

| Token | Value | Use |
|---|---|---|
| `rounded-sm` | 6px | XS buttons, tiny elements |
| `rounded-md` | 8px | SM buttons, checkboxes |
| `rounded-lg` | **10px** | Default — inputs, buttons, dropdowns |
| `rounded-xl` | 14px | Cards |
| `rounded-2xl` | 18px | Large cards, modals |
| `rounded-4xl` | 26px | Badges |
| `rounded-full` | 9999px | BubbleBadge, StatusDot, avatars |

---

## Shadows

### Button Shadows (copy-paste ready)

**Primary button:**
```
shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(255,255,255,0.024),0_0_0_1px_rgb(108,71,255)]
dark:shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.16),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(0,0,0,0.12)]
```

**Secondary button:**
```
shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.1)]
dark:shadow-[inset_0_1px_0.5px_0_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24),0_0_0_1px_rgba(0,0,0,0.1)]
```

**Destructive button:**
```
shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-3px_rgba(0,0,0,0.24),0_0_0_1px_#f73d3d]
```

### Input Shadows
```
/* resting */   shadow-[0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04)]
/* hover */     shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1),0_4px_4px_-2px_rgba(0,0,0,0.06)]
/* focus */     shadow-[0_0_0_3px_rgba(0,0,0,0.08),0_4px_4px_-1px_rgba(0,0,0,0.08),0_2px_2px_-1px_rgba(0,0,0,0.06)]
/* dark rest */ dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]
```

### Utility Shadows
```
/* dropdown/popover */  shadow-md ring-1 ring-foreground/10
/* card (via ring) */   ring-1 ring-foreground/10
/* small shadow */      var(--shadow-xs)  ← CSS variable
```

---

## Spacing

### Container
```css
.app-container { width: calc(100% - var(--app-layout-spacing)); max-width: 72rem; }
/* --app-layout-spacing: 1.5rem (mobile) / 2.5rem (tablet+) */
```

### Standard Gap Scale

| Class | px | Common use |
|---|---|---|
| `gap-1` | 4px | XS button gap |
| `gap-1.5` | 6px | Default button gap |
| `gap-2` | 8px | Label + input |
| `gap-3` | 12px | Checkbox group |
| `gap-4` | 16px | Card padding, field group |
| `gap-5` | 20px | FieldGroup default |
| `gap-6` | 24px | Page header bottom |

---

## Animations

### Custom: `animate-nudge`
Horizontal shake, defined in `globals.css`. Use for error feedback.

### Tailwind (from `tw-animate-css`)

| Class | Effect |
|---|---|
| `fade-in-0` / `fade-out-0` | Opacity 0↔1 |
| `zoom-in-95` / `zoom-out-95` | Scale 0.95↔1 |
| `slide-in-from-top-2` | Slide from above |
| `slide-in-from-bottom-2` | Slide from below |
| `data-open:animate-accordion-down` | Accordion expand |
| `data-closed:animate-accordion-up` | Accordion collapse |

---

## Scrollbar

6px width/height, transparent track, `rgba(0,0,0,0.25)` thumb (light) / `rgba(255,255,255,0.25)` (dark).

```html
<div class="no-scrollbar">...</div>  <!-- hides scrollbar, keeps scroll -->
```
