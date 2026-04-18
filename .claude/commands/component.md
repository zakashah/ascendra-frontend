Create a new component for this project. The component name or description: $ARGUMENTS

## Before writing anything

Read the design system docs first — every time, no exceptions:

- `docs/design-system/00-overview.md` — stack, component architecture, conventions
- `docs/design-system/01-tokens.md` — color tokens, typography, spacing, shadows
- `docs/design-system/02-components.md` — existing component reference
- `docs/design-system/03-layout.md` — layout composition
- `docs/design-system/04-usage-patterns.md` — page patterns and cheat sheet

Then scan `components/custom/` and `components/ui/` — never recreate something that already exists.

If told to mimic clerk exactly or to create a component that they have check their website in order to mimic it identically

---

## Visual standard: Clerk

This project's UI is modeled after the **Clerk dashboard** (clerk.com). Every component you build should look like it belongs there. Key Clerk design traits:

- Minimal, clean surfaces — `bg-card` or `bg-background` with `border border-border` and `rounded-lg`
- Typography is tight — labels use `text-sm`, descriptions use `text-muted-foreground`
- Primary actions use the brand purple with the gloss shadow system (see `01-tokens.md`)
- Secondary actions are muted and never visually loud
- Badges are small, pill-shaped, soft background + matching text color
- Tables have no visible borders — borderless rows with subtle hover states
- Empty states: centered icon, short heading, single CTA
- Dialogs: clean, `max-w-sm` or `max-w-md`, no decorative headers
- Form fields: label above input, description text below when needed, consistent vertical rhythm
- Spacing: `p-6` inside cards, `gap-4`–`gap-6` between sections

---

## Component placement

| Component type | Location |
|---|---|
| Raw primitive, no project opinion | `components/ui/` |
| Project-specific composition or wrapper | `components/custom/[category]/` |

Categories in `components/custom/`:
`common-ui/`, `input/`, `layout/`, `menu-header/`, `nav/`, `side-bar/`, `tab/`, `ui/`

---

## Code rules

- `cn()` from `@/lib/utils` for all class merging
- CVA when the component has multiple variants
- TypeScript with explicit prop interfaces
- `data-slot` on the root element
- Semantic color tokens only (`bg-card`, `text-muted-foreground`, `border-border`) — not raw Tailwind palette colors
- Brand color: `var(--brand)` (`#6c47ff`)
- Forms: `react-hook-form` + `zod`, composed with `Field`/`FieldLabel`/`FieldDescription`/`FieldError`
- Icons: `lucide-react` first, `react-icons` only if Lucide doesn't have it
- No new packages without asking
- No `any` in TypeScript
- No comments on obvious code
