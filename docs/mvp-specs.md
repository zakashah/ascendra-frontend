# MVP Specifications

## Overview

This document is the single source of truth for what gets built in the Ascendra Pay MVP. It covers all three portals — Ascendra Admin, Merchant Admin, and Parent Web App — and defines every feature to the level a developer needs to implement it: screens, data fields, actions, user flows, states, and validation rules.

The MVP is UI-only. All data is mocked. No backend integration, no real payments, no live notifications.

**How to use this doc:**
- Each portal is a numbered part
- Each feature within a portal is a numbered section
- Each screen within a feature is described with a consistent structure
- Implementation order is not prescribed here — refer to the project task board

**Status badges used across all portals:**

| Status | Color | Applies to |
|---|---|---|
| Active | Green | Merchant, Client |
| Inactive / Suspended | Gray | Merchant, Client |
| Pending | Yellow | Invoice |
| Paid | Green | Invoice |
| Overdue | Red | Invoice |

---

---

# Part 1 — Ascendra Admin Portal

The internal control panel for the Ascendra operations team. Admins oversee all merchants, manage their accounts, and can step into any merchant's workspace to operate it on their behalf.

---

## Feature 1: Merchant Management

**Purpose:** Allow Ascendra admins to browse, onboard, and manage all merchants on the platform.

**Screens in this feature:**
1. Merchant List
2. Add Merchant
3. Merchant Detail

---

#### Screen: Merchant List

**Entry point:** Default landing screen after admin login. Also accessible via main navigation.

**Layout pattern:** Table Page — search bar + action button at top, data table, pagination.

**Displayed data:**

| Column | Type | Notes |
|---|---|---|
| Business Name | Text | Clickable — navigates to Merchant Detail |
| Business Type | Badge | school / clinic / tutoring center / other |
| Primary Contact | Text | Name + phone on separate lines |
| Status | Status badge | Active / Suspended |
| Date Added | Date | Formatted: DD MMM YYYY |
| Actions | Menu | Row-level dropdown |

**Actions:**
- Search bar → filters table by business name or contact name (client-side for mock)
- Filter by status (All / Active / Suspended) → dropdown or tab strip
- "Add Merchant" button (top right) → opens Add Merchant screen
- Row action menu:
  - **View** → navigates to Merchant Detail
  - **Assume Role** → triggers Assume Role confirmation (Feature 2)
  - **Suspend** → changes status to Suspended (confirm dialog: "Suspend [Name]? They will lose access.")
  - **Activate** → changes status to Active (no confirm needed)

**User flows:**

1. **Browse merchants** — Admin lands on list → scrolls or paginates through all merchants → clicks a row or "View" to go to detail
2. **Search for a merchant** — Admin types in search bar → table filters in real time → clicks the result
3. **Onboard a new merchant** — Admin clicks "Add Merchant" → completes form → merchant appears in list with Active status
4. **Suspend a merchant** — Admin opens row actions → clicks Suspend → confirms in dialog → status badge updates to Suspended

**States:**
- Empty state: "No merchants yet. Add your first merchant to get started." + "Add Merchant" button
- No search results: "No merchants match '[query]'." + clear search link

---

#### Screen: Add Merchant

**Entry point:** "Add Merchant" button on Merchant List.

**Layout pattern:** Form Page (full page) or wide Dialog — single-column form inside a Card.

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Business Name | Text input | Yes | Name of the school, clinic, etc. |
| Business Type | Select | Yes | Options: School, Clinic, Tutoring Center, Gym, Other |
| Primary Contact Name | Text input | Yes | Name of the admin/owner |
| Phone Number | Text input | Yes | Pakistan format — 03XX-XXXXXXX |
| Email Address | Email input | No | Optional contact email |
| Address | Textarea | No | Physical address of the business |
| Status | Toggle / Select | Yes | Default: Active |

**Actions:**
- "Add Merchant" / "Save" button → validates and saves, redirects to new merchant's detail page
- "Cancel" → returns to Merchant List without saving

**User flows:**

1. **Successfully add a merchant** — Admin fills all required fields → clicks Save → merchant detail page opens with a success toast → merchant appears in list

**States:**
- Inline validation errors appear per field on blur and on submit attempt

**Validation:**
- Business Name: required, max 100 chars
- Business Type: required, must select one
- Primary Contact Name: required, max 100 chars
- Phone Number: required, must match Pakistan mobile format (11 digits, starts with 03)
- Email: optional, must be valid email format if provided
- Status: required, defaults to Active

---

#### Screen: Merchant Detail

**Entry point:** Clicking a merchant name on the Merchant List, or "View" in row actions.

**Layout pattern:** Detail Page — profile card at top, stats row, activity section below.

**Displayed data:**

*Profile card:*
| Field | Notes |
|---|---|
| Business Name | Large heading |
| Business Type | Badge |
| Primary Contact | Name + phone + email |
| Address | If provided |
| Status | Status badge |
| Date Added | Formatted date |

*Summary stats row:*
| Stat | Notes |
|---|---|
| Total Clients | Count of all clients under this merchant |
| Total Invoices | Lifetime invoice count |
| Outstanding Amount | Sum of all pending/overdue invoice amounts (PKR) |
| Collected This Month | Sum of invoices paid in current calendar month (PKR) |

*Recent Invoices:* Last 10 invoices across all clients — columns: Client Name, Title, Amount, Due Date, Status.

**Actions:**
- "Edit" button → opens edit form (same fields as Add Merchant, pre-filled)
- "Assume Role" button → triggers Assume Role flow (Feature 2)
- Status action button: "Suspend" if active / "Activate" if suspended → confirm dialog for suspend

**User flows:**

1. **Review a merchant's activity** — Admin navigates from list → reads profile and stats → scans recent invoices
2. **Edit merchant info** — Admin clicks Edit → updates fields → saves → detail page refreshes with updated info
3. **Suspend a merchant** — Admin clicks Suspend → confirms → status badge updates → stat cards remain visible for reference

**States:**
- No invoices yet: Recent Invoices section shows "No invoices recorded yet for this merchant."

---

## Feature 2: Merchant Role Access

**Purpose:** Allow an Ascendra admin to step into any merchant's workspace and operate it fully on their behalf, with a persistent visual indicator that they are acting as that merchant.

**Screens in this feature:**
1. Assume Role Confirmation
2. Acting-as Banner (persistent UI element across all Merchant Admin screens)

---

#### Screen: Assume Role Confirmation

**Entry point:** "Assume Role" button on Merchant Detail page, or "Assume Role" in row actions on Merchant List.

**Layout pattern:** Modal dialog (not a full page).

**Displayed data:**
| Element | Notes |
|---|---|
| Merchant name | Prominent, bold |
| Warning message | "You will enter [Business Name]'s workspace. All actions you take will be performed as this merchant. You can exit at any time." |

**Actions:**
- "Enter Workspace" → confirms, redirects to that merchant's Dashboard (Merchant Admin Portal)
- "Cancel" → closes dialog, stays on current admin screen

**User flows:**

1. **Enter a merchant workspace** — Admin clicks Assume Role → dialog appears → clicks "Enter Workspace" → redirected to merchant's Dashboard with Acting-as Banner visible at top

---

#### UI Element: Acting-as Banner

**Scope:** Persistent — visible at the top of every screen while admin is acting as a merchant. Replaces or sits above the normal page header area.

**Displayed content:**
- Icon (e.g. user-switch or eye icon)
- Text: "Acting as: [Business Name]"
- "Exit Workspace" button (right-aligned)

**Actions:**
- "Exit Workspace" → returns admin to Ascendra Admin Portal (Merchant Detail of the merchant they were acting as)

---

---

# Part 2 — Merchant Admin Portal

The primary workspace for individual merchants. Each merchant manages their own clients and invoices in an isolated environment.

---

## Feature 1: Dashboard

**Purpose:** Give the merchant admin an at-a-glance summary of their business — client count, invoice activity, and outstanding payments.

**Screens in this feature:**
1. Dashboard Overview

---

#### Screen: Dashboard Overview

**Entry point:** Default landing screen after merchant login. Also accessible via "Dashboard" in the sidebar navigation.

**Layout pattern:** Stats cards row at top, recent activity list below.

**Displayed data:**

*Stats cards (4 cards in a row):*
| Card | Value | Notes |
|---|---|---|
| Total Clients | Count | All clients regardless of status |
| Active Invoices | Count | Invoices with status = Pending or Overdue |
| Outstanding Amount | PKR amount | Sum of all pending + overdue invoice amounts |
| Collected This Month | PKR amount | Sum of invoices marked paid in current calendar month |

*Recent Activity list:* Last 10 invoice events — each item shows:
- Invoice title
- Client name
- Event description (e.g. "Invoice created", "Marked as paid", "Now overdue")
- Timestamp (relative: "2 hours ago", "Yesterday")

**Actions:**
- "View all invoices" link at bottom of activity list → navigates to Invoice List (Feature 3)
- "Add Client" shortcut button → opens Add Client dialog (Feature 2)

**States:**
- New merchant (no data): Stats all show 0 / PKR 0. Activity list shows "No activity yet. Start by adding a client."

---

## Feature 2: Client Management

**Purpose:** Allow the merchant to maintain a directory of their clients — the individuals who receive and pay invoices.

**Screens in this feature:**
1. Client List
2. Add Client (dialog)
3. Edit Client (dialog)
4. Client Detail

---

#### Screen: Client List

**Entry point:** "Clients" in the sidebar navigation.

**Layout pattern:** Table Page — search bar + "Add Client" button, data table, pagination.

**Displayed data:**

| Column | Type | Notes |
|---|---|---|
| Full Name | Text | Clickable — navigates to Client Detail |
| Phone | Text | |
| Email | Text | Shown if available, "—" if not |
| Status | Status badge | Active / Inactive |
| Invoices | Count | Total invoices linked to this client |
| Actions | Menu | Row-level dropdown |

**Actions:**
- Search bar → filters by name or phone (client-side for mock)
- "Add Client" button (top right) → opens Add Client dialog
- Row action menu:
  - **View** → navigates to Client Detail
  - **Edit** → opens Edit Client dialog pre-filled with client data
  - **Deactivate** → changes status to Inactive (confirm: "Deactivate [Name]? They will no longer appear in active selections.")
  - **Activate** → changes status to Active (no confirm)

**User flows:**

1. **Browse clients** — Merchant admin lands on list → scrolls or searches → clicks a client to view detail
2. **Add a new client** — Clicks "Add Client" → fills dialog form → saves → client appears in list
3. **Deactivate a client** — Opens row actions → Deactivate → confirms → status updates to Inactive

**States:**
- Empty state: "No clients yet. Add your first client to start issuing invoices." + "Add Client" button
- No search results: "No clients match '[query]'." + clear search link

---

#### Dialog: Add Client

**Entry point:** "Add Client" button on Client List or Dashboard.

**Layout pattern:** Modal dialog — single-column form.

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Full Name | Text input | Yes | |
| Phone Number | Text input | Yes | Pakistan format — 03XX-XXXXXXX |
| Email Address | Email input | No | |
| Address | Textarea | No | |
| Status | Select | Yes | Default: Active |

**Actions:**
- "Add Client" / "Save" → validates, saves, closes dialog, new client appears at top of list with a success toast
- "Cancel" / close (×) → discards changes, closes dialog

**Validation:**
- Full Name: required, max 100 chars
- Phone: required, must match Pakistan mobile format
- Email: optional, valid email format if provided
- Status: required, defaults to Active

---

#### Dialog: Edit Client

**Entry point:** "Edit" in row actions on Client List, or "Edit" button on Client Detail.

**Layout pattern:** Same as Add Client dialog, all fields pre-filled.

**Behavior differences from Add:**
- "Save Changes" button label
- On save: updates record, closes dialog, refreshes row in table (or detail page), success toast

**Validation:** Same as Add Client.

---

#### Screen: Client Detail

**Entry point:** Clicking a client name on the Client List, or "View" in row actions.

**Layout pattern:** Detail Page — profile card at top, invoice history table below.

**Displayed data:**

*Profile card:*
| Field | Notes |
|---|---|
| Full Name | Large heading |
| Phone | |
| Email | If available |
| Address | If available |
| Status | Status badge |

*Invoice history table:*
| Column | Notes |
|---|---|
| Invoice Title | Clickable — navigates to Invoice Detail |
| Amount (PKR) | |
| Due Date | |
| Status | Status badge |

**Actions:**
- "Edit" button → opens Edit Client dialog pre-filled
- "Create Invoice" button → navigates to Create Invoice form with this client pre-selected
- "Deactivate" / "Activate" → same behavior as from list

**User flows:**

1. **Review client and their invoices** — Admin clicks client name → reads profile → scans invoice history → clicks an invoice to view its detail
2. **Create invoice from client context** — Admin clicks "Create Invoice" → form opens with client pre-filled

**States:**
- No invoices yet: Invoice history shows "No invoices issued to this client yet." + "Create Invoice" button

---

## Feature 3: Invoice Management

**Purpose:** Allow the merchant to create, track, and update the payment status of all invoices issued to their clients.

**Screens in this feature:**
1. Invoice List
2. Create Invoice
3. Invoice Detail
4. Mark as Paid (dialog)

---

#### Screen: Invoice List

**Entry point:** "Invoices" in the sidebar navigation.

**Layout pattern:** Table Page — search bar, status filter, date filter, "Create Invoice" button, data table, pagination.

**Displayed data:**

| Column | Type | Notes |
|---|---|---|
| Invoice Title | Text | Clickable — navigates to Invoice Detail |
| Client Name | Text | Clickable — navigates to Client Detail |
| Amount (PKR) | Currency | Right-aligned |
| Due Date | Date | Highlighted in red if overdue |
| Status | Status badge | Pending / Paid / Overdue |
| Actions | Menu | Row-level dropdown |

**Filters:**
| Filter | Options |
|---|---|
| Status | All / Pending / Paid / Overdue |
| Due Date | All / This Month / Last Month / Custom range |

**Actions:**
- Search bar → filters by invoice title or client name
- "Create Invoice" button (top right) → navigates to Create Invoice screen
- Row action menu:
  - **View** → navigates to Invoice Detail
  - **Mark as Paid** → opens Mark as Paid dialog (if status is Pending or Overdue)
  - **Mark as Overdue** → changes status to Overdue (if status is Pending; useful for manual override)

**User flows:**

1. **Review all invoices** — Admin lands on list → scans statuses → filters by Overdue to find urgent items
2. **Find a specific invoice** — Admin types client name or title in search → locates invoice → clicks to view detail
3. **Quick mark as paid** — Admin opens row actions → Mark as Paid → records payment details in dialog

**States:**
- Empty state: "No invoices yet. Create your first invoice to start tracking payments." + "Create Invoice" button
- No results after filter: "No invoices match the selected filters." + reset filters link

---

#### Screen: Create Invoice

**Entry point:** "Create Invoice" button on Invoice List or Dashboard; "Create Invoice" on Client Detail (client pre-filled).

**Layout pattern:** Form Page — single Card with form fields, action buttons at bottom.

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Client | Searchable select | Yes | Dropdown showing Active clients — name + phone. Pre-filled if opened from Client Detail. |
| Invoice Title | Text input | Yes | e.g. "Monthly Tuition — Jan 2025" |
| Description | Textarea | No | Additional context e.g. "Child: Zara, Grade 5" |
| Amount (PKR) | Number input | Yes | Positive number only, up to 2 decimal places |
| Due Date | Date picker | Yes | Cannot be in the past |

**Actions:**
- "Create Invoice" → validates, saves, redirects to new Invoice Detail page with success toast
- "Cancel" → returns to Invoice List (or previous page) without saving

**User flows:**

1. **Create an invoice for a client** — Admin selects client → fills title, amount, due date → optionally adds description → clicks Create Invoice → lands on Invoice Detail
2. **Create from Client Detail** — Client is pre-filled → admin only needs to fill remaining fields

**States:**
- If no active clients exist: Client select shows "No active clients. Add a client first." with link to Client List

**Validation:**
- Client: required, must select an active client
- Invoice Title: required, max 150 chars
- Description: optional, max 500 chars
- Amount: required, must be a positive number greater than 0
- Due Date: required, must be today or a future date

---

#### Screen: Invoice Detail

**Entry point:** Clicking an invoice title on Invoice List, or after creating an invoice.

**Layout pattern:** Detail Page — invoice summary card, status section with action, optionally payment record section.

**Displayed data:**

*Invoice summary card:*
| Field | Notes |
|---|---|
| Invoice Title | Large heading |
| Client Name | Linked to Client Detail |
| Description | If provided |
| Amount (PKR) | Prominent display |
| Due Date | Highlighted in red if overdue |
| Status | Status badge (Pending / Paid / Overdue) |
| Date Created | Formatted date |

*Payment record section (visible only when status = Paid):*
| Field | Notes |
|---|---|
| Payment Method | cash / bank transfer / JazzCash / EasyPaisa / other |
| Reference No | If provided |
| Payment Notes | If provided |
| Date Marked Paid | Formatted date and time |

**Actions:**
- "Mark as Paid" button (visible when status = Pending or Overdue) → opens Mark as Paid dialog
- "Mark as Overdue" button (visible when status = Pending) → changes status to Overdue (confirm: "Mark this invoice as overdue?")
- Back link → returns to Invoice List

**User flows:**

1. **Review invoice** — Admin navigates from list → reads all details → decides next action
2. **Record payment** — Admin clicks Mark as Paid → fills dialog → saves → status updates to Paid, payment record section appears
3. **Flag overdue invoice** — Admin clicks Mark as Overdue → confirms → status badge updates

---

#### Dialog: Mark as Paid

**Entry point:** "Mark as Paid" on Invoice Detail or row action on Invoice List.

**Layout pattern:** Modal dialog — small form.

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Payment Method | Select | Yes | Options: Cash, Bank Transfer, JazzCash, EasyPaisa, Other |
| Reference Number | Text input | No | Bank ref, JazzCash TID, etc. |
| Notes | Textarea | No | Any additional notes about the payment |

**Actions:**
- "Confirm Payment" → saves, closes dialog, invoice status updates to Paid, payment record section appears on Invoice Detail, success toast shown
- "Cancel" → closes dialog without changes

**Validation:**
- Payment Method: required, must select one

---

---

# Part 3 — Parent Web App

A responsive web application for clients (parents) to view their invoices and complete payments. Optimized for mobile browsers. All payment processing is UI-only in MVP — no real transactions occur.

---

## Feature 1: Invoice List

**Purpose:** Give the client a clear view of all their outstanding and historical invoices.

**Screens in this feature:**
1. Invoice List (app home)

---

#### Screen: Invoice List

**Entry point:** Root route of the Parent Web App — this is the home screen after login.

**Layout pattern:** Card-based list (not a data table — optimized for mobile). Filter strip at top.

**Displayed data (per invoice card):**

| Element | Notes |
|---|---|
| Invoice Title | Bold, prominent |
| Description preview | Truncated to 1 line — provides per-child or per-purpose context |
| Amount (PKR) | Right-aligned, large |
| Due Date | Below amount — "Due: DD MMM YYYY". Red if overdue |
| Status badge | Pending / Paid / Overdue |
| Merchant name | Subtle — "From: [Business Name]" |

**Filters:**
- Tab strip or segmented control: All / Pending / Paid / Overdue

**Actions:**
- Tap/click invoice card → navigates to Invoice Detail
- Filter tabs → filter invoice list by status (client-side for mock)

**User flows:**

1. **Check outstanding invoices** — Parent opens app → taps "Pending" filter → sees all unpaid invoices sorted by due date (soonest first) → taps one to view detail
2. **Review payment history** — Parent taps "Paid" filter → sees all settled invoices in reverse chronological order

**States:**
- Empty (all invoices): "You have no invoices yet." 
- Empty (filtered): "No [status] invoices." + link to clear filter
- Overdue invoices present: A dismissible banner at top of the All view: "You have [n] overdue invoice(s). Please settle them as soon as possible."

**Sort order:**
- Pending and Overdue invoices: sorted by due date ascending (most urgent first)
- Paid invoices: sorted by payment date descending (most recent first)
- All: Overdue first, then Pending (sorted by due date), then Paid (sorted by date desc)

---

## Feature 2: Invoice Detail & Payment

**Purpose:** Let the client view the full details of an invoice and complete payment through a guided UI flow.

**Screens in this feature:**
1. Invoice Detail
2. Payment Flow — Method Selection
3. Payment Flow — Review & Confirm
4. Payment Confirmation

---

#### Screen: Invoice Detail

**Entry point:** Tapping an invoice card on the Invoice List.

**Layout pattern:** Detail Page — invoice card + action button + payment record (if paid).

**Displayed data:**

*Invoice details:*
| Field | Notes |
|---|---|
| Invoice Title | Large heading |
| Description | Full text, no truncation |
| Merchant Name | "From: [Business Name]" |
| Amount (PKR) | Prominent — large font |
| Due Date | "Due: DD MMM YYYY". Red if overdue |
| Status badge | Pending / Paid / Overdue |
| Date Issued | "Issued: DD MMM YYYY" |

*Payment record (only when status = Paid):*
| Field | Notes |
|---|---|
| Payment Method | Displayed as label (e.g. "JazzCash") |
| Date Paid | "Paid on: DD MMM YYYY" |
| Reference No | If available |

**Actions:**
- "Pay Now" button (prominent, full-width) — visible when status = Pending or Overdue → starts Payment Flow
- "Download Receipt" button — visible when status = Paid → triggers a mocked receipt download / print view
- Back navigation → returns to Invoice List

---

#### Screen: Payment Flow — Method Selection

**Entry point:** "Pay Now" on Invoice Detail.

**Layout pattern:** Step 1 of 3 — full screen, step indicator at top. Large selectable cards for each method.

**Displayed data:**
- Step indicator: "Step 1 of 3 — Select Payment Method"
- Invoice summary strip at top (title + amount) for reference throughout the flow

**Payment method options (selectable cards):**
| Option | Icon | Notes |
|---|---|---|
| JazzCash | JazzCash logo/icon | |
| EasyPaisa | EasyPaisa logo/icon | |
| Bank Transfer | Bank icon | |
| Cash | Cash icon | To be settled in person — informational |

**Actions:**
- Tap a method card → selects it (highlighted state)
- "Continue" button → enabled only after a method is selected → navigates to Review & Confirm

---

#### Screen: Payment Flow — Review & Confirm

**Entry point:** "Continue" from Method Selection.

**Layout pattern:** Step 2 of 3 — summary card + confirm button.

**Displayed data:**
| Element | Notes |
|---|---|
| Step indicator | "Step 2 of 3 — Review" |
| Invoice Title | |
| Amount (PKR) | Large, prominent |
| Selected Payment Method | With icon |
| Instructions | Method-specific guidance: e.g. for Bank Transfer: "Transfer PKR [amount] to [Account Name], [Account No], [Bank]. Use your name as the reference." For JazzCash/EasyPaisa: "Send PKR [amount] to [mobile number]. Screenshot your transaction for your records." For Cash: "Visit [Business Name] to settle this invoice in person." |

**Actions:**
- "Confirm Payment" → navigates to Payment Confirmation screen
- "Back" → returns to Method Selection

---

#### Screen: Payment Confirmation

**Entry point:** "Confirm Payment" from Review & Confirm.

**Layout pattern:** Full-screen success state — centered illustration/icon, message, and action buttons.

**Displayed data:**
| Element | Notes |
|---|---|
| Success illustration | Large checkmark or success graphic |
| Heading | "Payment Submitted" |
| Message | "Your payment has been recorded. The merchant will verify and update your invoice status." |
| Invoice reference | Title + amount |

**Actions:**
- "View Invoice" → returns to Invoice Detail (invoice status may still show Pending until merchant marks it paid)
- "Back to Invoices" → returns to Invoice List

**Note:** In the real product, the merchant manually marks the invoice as paid after verifying receipt. The parent's payment confirmation is an intent — not an automatic status update. This should be clear from the confirmation message.
