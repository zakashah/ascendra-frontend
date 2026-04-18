# Design System — Components

Reference for every reusable UI component: variants, sizes, props, and usage notes.

---

## Buttons

Two button implementations exist. Choose carefully.

### 1. Custom Button — Primary CTAs
**File:** `components/custom/input/button.tsx`

Use this for all primary call-to-action buttons. It has the multi-layer shadow/gloss system that matches the Clerk-style design.

```tsx
import { Button } from '@/components/custom/input/button'

<Button variant="primary" size="default">Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Learn more</Button>
<Button variant="link">View docs</Button>
```

**Variants:**

| Variant | Background | Shadow | Use |
|---|---|---|---|
| `primary` | `bg-primary` (#6c47ff) | 4-layer shadow + purple ring | Main actions |
| `secondary` | `bg-secondary` (white/dark gray) | Subtle 2-layer shadow + black ring | Secondary actions |
| `destructive` | `#e02e2e` (red) | 4-layer shadow + red ring | Delete/remove |
| `ghost` | Transparent | None | Tertiary, inline |
| `link` | Transparent | None | Text links with underline |

**Sizes:**

| Size | Height | Padding | Text | Radius | Use |
|---|---|---|---|---|---|
| `xs` | 20px | `p-[8px]` | 11px | `rounded-[4px]` | Compact inline |
| `sm` | 28px (`h-7`) | `px-2.5` | 12px | `rounded-[0.3125rem]` | Tight layouts |
| `default` | 32px (`h-8`) | `px-3` | 14px | `rounded-[0.375rem]` | Standard |
| `lg` | 40px (`h-10`) | `px-4` | 16px | `rounded-[0.5rem]` | Hero/modal |
| `icon` | 32×32px | — | — | `rounded-[0.375rem]` | Icon-only |

**Gloss effect:** Primary and destructive have a `before:` pseudo-element with a white-to-transparent gradient that disappears on hover. Secondary has a subtle dark overlay.

**Focus:** `focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-3`

**Disabled:** `disabled:opacity-40 disabled:cursor-not-allowed`

---

### 2. UI Button — Inline/System Actions
**File:** `components/ui/button.tsx`

Use for ghost actions, icon buttons, outline buttons inside tables, cards, and toolbars. No shadow system.

```tsx
import { Button } from '@/components/ui/button'

<Button variant="outline" size="sm">Filter</Button>
<Button variant="ghost" size="icon"><PlusIcon /></Button>
<Button variant="destructive" size="sm">Remove</Button>
```

**Variants:**

| Variant | Style |
|---|---|
| `default` | `bg-primary text-primary-foreground` |
| `outline` | Border + transparent bg, hover muted |
| `secondary` | `bg-secondary`, hover 80% opacity |
| `ghost` | Transparent, hover muted |
| `destructive` | `bg-destructive/10 text-destructive`, hover 20% |
| `link` | Text only with underline on hover |

**Sizes:**

| Size | Height | Notes |
|---|---|---|
| `xs` | `h-6` | `text-xs`, icons at `size-3` |
| `sm` | `h-7` | icons at `size-3.5` |
| `default` | `h-8` | Standard |
| `lg` | `h-9` | Larger |
| `icon` | `size-8` | Square |
| `icon-xs` | `size-6` | Square |
| `icon-sm` | `size-7` | Square |
| `icon-lg` | `size-9` | Square |

**Note on icons:** Any `<svg>` inside the button without an explicit `size-*` class is automatically set to `size-4` by the base styles. You don't need to size icons manually.

**`asChild` prop:** Renders as a different element (e.g., a `<Link>`) while keeping button styles:
```tsx
<Button asChild variant="outline">
  <Link href="/settings">Go to settings</Link>
</Button>
```

---

## Badges

Four badge types for different contexts.

### SimpleBadge — Status Labels
**File:** `components/custom/common-ui/simple-badge.tsx`

Inline text badges for labelling statuses, categories, or types.

```tsx
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge'

<SimpleBadge variant="default">Active</SimpleBadge>
<SimpleBadge variant="green">Paid</SimpleBadge>
<SimpleBadge variant="orange">Pending</SimpleBadge>
<SimpleBadge variant="secondary">Inactive</SimpleBadge>
<SimpleBadge variant="blue">New</SimpleBadge>
<SimpleBadge variant="blueDashed">Draft</SimpleBadge>
```

**Variants:**

| Variant | Text Color | Background | Ring |
|---|---|---|---|
| `default` | `text-primary` (#6c47ff) | `bg-primary/4` | `ring-primary/16` |
| `secondary` | `#5f5f6f` / `#adadb7` dark | `bg-[#767684]/4` | `ring-[#767684]/16` |
| `orange` | `#fd7224` | `bg-[#c3540f]/4` | `ring-[#c3540f]/16` |
| `green` | `#15892b` / `#31c854` dark | `bg-[#15892b]/4` | `ring-[#15892b]/16` |
| `blue` | `#236dd7` / `#307ff6` dark | `bg-[#236dd7]/4` | `ring-[#236dd7]/16` |
| `blueDashed` | `#236dd7` / `#307ff6` dark | Transparent | Dashed border, no ring |

All variants share: `text-[0.6875rem] tracking-[0.015em] rounded-[4px] px-1 py-0.5 ring-1 ring-inset`

**For invoices:** Use `green` for Paid, `orange` for Pending, `secondary` for Cancelled/Void, `default` for Draft.

---

### BubbleBadge — Rounded Gradient Chips
**File:** `components/custom/common-ui/bubble-badge.tsx`

Larger pill badges with gradient backgrounds and inner highlight. Use for counts, tags, or prominent labels.

```tsx
import { BubbleBadge } from '@/components/custom/common-ui/bubble-badge'

<BubbleBadge color="blue" size="md">3 overdue</BubbleBadge>
<BubbleBadge color="green" size="sm">12</BubbleBadge>
```

**Sizes:** `sm` (p-[3px] text-[11px]) / `md` (p-[5px] text-xs) / `lg` (p-[8px] text-sm)

**Colors:** `gray` / `blue` / `green` / `red` / `amber` / `orange`

All are `rounded-full` with gradient backgrounds and inset highlight.

---

### ProBadge — Premium Indicator
**File:** `components/custom/common-ui/pro-badge.tsx`

Blue-purple gradient badge for marking premium features.

```tsx
import { ProBadge } from '@/components/custom/common-ui/pro-badge'

<ProBadge>Pro</ProBadge>
```

Style: `rounded-[.35rem]`, white text, gradient background, inset highlight + ring.

---

### StatusDot — Inline Status Indicator
**File:** `components/custom/common-ui/status-dot.tsx`

A `size-1.5` dot with a color-matched halo ring. Use inline next to text.

```tsx
import { StatusDot } from '@/components/custom/common-ui/status-dot'

<StatusDot variant="emerald" /> {/* Active / Paid */}
<StatusDot variant="orange" />  {/* Pending */}
<StatusDot variant="rose" />    {/* Failed / Cancelled */}
<StatusDot variant="primary" /> {/* In progress */}
```

**Variants:** `orange` / `emerald` / `sky` / `violet` / `rose` / `amber` / `red` / `primary`

Shadow ring: `shadow-[0_0_0_3px_<color-at-opacity>]`

---

### Base Badge (shadcn)
**File:** `components/ui/badge.tsx`

Only use when you need a standard shadcn badge. Prefer `SimpleBadge` for project-specific usage.

Variants: `default` / `secondary` / `destructive` / `outline` / `ghost` / `link`
Base size: `h-5 rounded-4xl px-2 py-0.5 text-xs font-medium`

---

## Form Inputs

### Input
Two implementations — use the custom one for all user-facing forms.

**Custom Input** — `components/custom/input/input.tsx`
Detects pointer vs keyboard focus, applies correct shadow in each case. Supports dark mode ring.

```tsx
import { Input } from '@/components/custom/input/input'

<Input placeholder="School name" />
<Input type="email" placeholder="parent@email.com" />
<Input readOnly value="Read only value" />
<Input full />  {/* Full width */}
```

**States:**
- Default: `ring-1 ring-[#191c21]/12`
- Hover: enhanced shadow + ring
- Focus (pointer): shadow-based focus ring (no outline)
- Focus (keyboard): standard outline-based ring
- Read-only: `bg-gray-100 dark:bg-white/5`
- Dark: `dark:bg-secondary dark:ring-[#3d3d4a]/88`

**Base Input** (shadcn) — `components/ui/input.tsx`
Simpler, use only in shadcn-composed patterns or inside `InputGroup`.
```
h-8 px-2.5 py-1 rounded-lg border border-input
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3
```

---

### Textarea
**File:** `components/ui/textarea.tsx`

Same styling as base Input but multiline. `min-h-16 field-sizing-content` (auto-expands with content).

```tsx
import { Textarea } from '@/components/ui/textarea'

<Textarea placeholder="Add a note..." />
```

---

### Select
**File:** `components/custom/ui/select.tsx` (wraps `components/ui/select.tsx`)

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select term" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="term1">Term 1</SelectItem>
    <SelectItem value="term2">Term 2</SelectItem>
  </SelectContent>
</Select>
```

**Trigger sizes:** `default` (h-8) / `sm` (h-7)

Content: `p-1 rounded-lg shadow-md ring-1 ring-foreground/10`, animated with zoom + fade + slide.

---

### Switch
**File:** `components/custom/ui/switch.tsx` (wraps `components/ui/switch.tsx`)

```tsx
import { Switch } from '@/components/ui/switch'

<Switch />
<Switch defaultChecked />
```

**Sizes:** default (`h-[18.4px] w-[32px]`) / sm (`h-[14px] w-[24px]`)

Checked state uses `--primary` color.

---

### Checkbox
**File:** `components/custom/ui/checkbox.tsx` (wraps `components/ui/checkbox.tsx`)

```tsx
import { Checkbox } from '@/components/ui/checkbox'

<Checkbox id="terms" />
<label htmlFor="terms">Accept terms</label>
```

Style: `size-4 rounded-[4px] border-input`. Checked: `border-primary bg-primary` with `CheckIcon size-3.5`.

---

### Radio Group
**File:** `components/custom/ui/radio-group.tsx` (wraps `components/ui/radio-group.tsx`)

```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

<RadioGroup defaultValue="monthly">
  <RadioGroupItem value="monthly" id="monthly" />
  <label htmlFor="monthly">Monthly</label>
  <RadioGroupItem value="annual" id="annual" />
  <label htmlFor="annual">Annual</label>
</RadioGroup>
```

Style: `size-4 rounded-full border-input`. Checked: primary border + `size-2` filled dot.

---

### Field System — Form Composition
**File:** `components/ui/field.tsx`

The field system composes form fields with labels, descriptions, and error messages. Always use this instead of raw `<label>` + `<input>` pairs.

```tsx
import { Field, FieldLabel, FieldContent, FieldDescription, FieldError, FieldGroup } from '@/components/ui/field'

{/* Vertical field (default) */}
<Field>
  <FieldLabel htmlFor="email">Email address</FieldLabel>
  <Input id="email" type="email" />
  <FieldDescription>Used for payment receipts</FieldDescription>
  <FieldError>Invalid email address</FieldError>
</Field>

{/* Horizontal field */}
<Field orientation="horizontal">
  <FieldLabel>Auto-send receipts</FieldLabel>
  <Switch />
</Field>

{/* Group of fields */}
<FieldGroup>
  <Field>...</Field>
  <Field>...</Field>
</FieldGroup>
```

**`Field` orientations:**
- `vertical` (default) — label above input, full width
- `horizontal` — label left, control right, `items-center`
- `responsive` — vertical on mobile, horizontal on md+

**`FieldGroup`:** `gap-5 flex flex-col` container for multiple fields. Uses `@container/field-group` for responsive adjustments. Checkbox groups get `gap-3` automatically.

**Error handling:** `FieldError` accepts a string or array of strings and deduplicates them. Shown in `text-destructive text-sm`.

**Invalid state:** Set `data-invalid="true"` on `<Field>` to apply red text color to all child text.

---

## Cards
**File:** `components/ui/card.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Invoice Settings</CardTitle>
    <CardDescription>Configure how invoices are generated</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon"><SettingsIcon /></Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* content */}
  </CardContent>
  <CardFooter>
    <Button variant="primary">Save</Button>
  </CardFooter>
</Card>
```

**Card sizes:**

| Prop | Padding | Title size |
|---|---|---|
| `size="default"` (default) | `py-4 px-4` | `text-base` |
| `size="sm"` | `py-3 px-3` | `text-sm` |

**Structural details:**
- Card: `ring-1 ring-foreground/10 rounded-xl bg-card text-card-foreground gap-4`
- CardHeader: `rounded-t-xl`, grid layout with `CardAction` auto-positioned at top-right
- CardFooter: `bg-muted/50 border-t rounded-b-xl p-4`

Pass `size` prop to `<Card>` — it cascades to all sub-components via CSS container queries.

---

## Tables
**File:** `components/ui/table.tsx`

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice #</TableHead>
      <TableHead>Student</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>Ali Hassan</TableCell>
      <TableCell>PKR 15,000</TableCell>
      <TableCell><SimpleBadge variant="green">Paid</SimpleBadge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Styles:**
- Container: `relative w-full overflow-x-auto`
- Table: `w-full caption-bottom text-sm`
- Row: `border-b transition-colors hover:bg-muted/50`
- Row (selected): `data-[state=selected]:bg-muted`
- Head cell: `h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground`
- Data cell: `p-2 align-middle whitespace-nowrap`
- Footer: `bg-muted/50 font-medium border-t`

**Table `th` note:** `globals.css` resets `font-weight: inherit` on `th` so head cells use `font-medium` from the class, not browser bold default.

For table action buttons (edit/delete per row), use `CellActionButton` from `components/custom/common-ui/cell-action-button.tsx`.

---

## Dropdown Menu
**File:** `components/ui/dropdown-menu.tsx`

```tsx
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon"><MoreHorizontalIcon /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem>View invoice</DropdownMenuItem>
    <DropdownMenuItem>Send reminder</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Content:** `min-w-32 p-1 rounded-lg shadow-md ring-1 ring-foreground/10 bg-popover`

**Item:** `px-1.5 py-1 rounded-md gap-1.5 text-sm`

**Destructive item:** red text + red focus background

**Separator:** `-mx-1 my-1 h-px bg-border`

**Animations:** slide-in from position + zoom-in-95 + fade-in-0 on open; reverse on close.

---

## Accordion
**File:** `components/ui/accordion.tsx`

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="fees">
    <AccordionTrigger>Fee structure</AccordionTrigger>
    <AccordionContent>
      Term fees are due on the 1st of each term...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

Trigger: `py-2.5 text-sm font-medium`. ChevronDown icon rotates on expand.
Content: animated with `data-open:animate-accordion-down` / `data-closed:animate-accordion-up`.

---

## Tooltip
**File:** `components/ui/tooltip.tsx`

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon"><InfoIcon /></Button>
  </TooltipTrigger>
  <TooltipContent>Fee includes GST</TooltipContent>
</Tooltip>
```

`TooltipProvider` is already wrapping the entire app in `app/layout.tsx`.

---

## Skeleton
**File:** `components/ui/skeleton.tsx`

```tsx
import { Skeleton } from '@/components/ui/skeleton'

<Skeleton className="h-4 w-48" />       {/* Text line */}
<Skeleton className="h-8 w-full" />     {/* Input placeholder */}
<Skeleton className="size-10 rounded-full" />  {/* Avatar */}
```

Uses `animate-pulse bg-muted`.

---

## Separator
**File:** `components/ui/separator.tsx`

```tsx
import { Separator } from '@/components/ui/separator'

<Separator />                             {/* Horizontal */}
<Separator orientation="vertical" />      {/* Vertical */}
```

`bg-border` color, `shrink-0`.
