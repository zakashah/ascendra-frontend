# Merchant Admin Portal — Feature Specs

This document describes the feature breakdown for the Merchant/School Admin Portal. This is the primary focus of the MVP.

For data shapes, see [data-model.md](data-model.md). For UI patterns and components, see [design-system/04-usage-patterns.md](design-system/04-usage-patterns.md).

---

## Portal Structure

```
Merchant Admin
├── Dashboard (overview)
├── Parents          ← MVP focus, build first
│   ├── Parents list
│   ├── Add parent
│   ├── Edit parent
│   └── Parent detail
├── Invoices
│   ├── Invoices list
│   ├── Create invoice
│   └── Invoice detail
└── Settings (post-MVP)
```

---

## 1. Parents Management

> **Build this first.** Parents are the central entity — everything else (students, invoices) flows from them.

### 1.1 Parents List Page

**Route:** `/merchant/parents`

**Purpose:** Show all parents registered under this merchant with quick-access actions.

**Layout:** Table page pattern (see design system usage patterns)

**Table columns:**

| Column | Description |
|---|---|
| Name | Parent's full name |
| Phone | Primary contact number |
| Email | Email address (may be empty) |
| Students | Number of linked students (badge) |
| Status | `Active` / `Inactive` (colored badge) |
| Actions | View, Edit, Deactivate |

**Page controls:**
- Search bar — filter by name or phone number
- "Add Parent" button (primary) — opens Add Parent dialog
- Pagination (if list exceeds page size)
- Empty state — shown when no parents exist yet

**Row actions:**
- **View** — navigate to Parent Detail page
- **Edit** — open Edit Parent dialog (same form as Add, pre-filled)
- **Deactivate / Activate** — toggle parent status

---

### 1.2 Add Parent Dialog / Drawer

**Trigger:** "Add Parent" button on the Parents list page

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Full Name | Text input | Yes | Parent's legal name |
| Phone | Text input | Yes | Pakistani format (+92...) |
| Email | Email input | No | Optional in MVP |

**Students section:**
- One student row by default (students are always added with a parent)
- Each student row:
  - Student Name (text, required)
  - Grade / Class (text, optional — e.g. "Grade 3", "O-Level")
- "Add another student" link — appends a new student row
- Remove button on each student row (except when only one remains)

**Actions:**
- **Save** — validates form, creates parent + students, closes dialog, refreshes list
- **Cancel** — discards and closes

**Validation:**
- Full Name: required, min 2 chars
- Phone: required, valid phone format
- Student Name: required for each student row
- At least one student must be present

---

### 1.3 Edit Parent Dialog

Same form as Add Parent, pre-filled with existing data.

**Additional behaviour:**
- Existing students are shown in the student list
- Students can be edited or removed
- New students can be added
- Removing an existing student shows a confirmation (if they have invoices)

---

### 1.4 Parent Detail Page

**Route:** `/merchant/parents/[id]`

**Layout:** Two-panel or stacked sections

**Sections:**

**Parent Info card**
- Full name, phone, email, status
- Edit button

**Students section**
- List of linked students (name, grade, status)
- "Add Student" action
- Each student row: Edit, Deactivate actions

**Invoices section**
- List of all invoices for this parent (across all their students)
- Columns: Invoice title, Student, Amount, Due Date, Status
- "Create Invoice" button → navigates to invoice creation pre-filled with this parent
- Clicking an invoice → Invoice Detail page

---

## 2. Dashboard / Overview

**Route:** `/merchant/dashboard` or `/merchant`

**Purpose:** Give the merchant a quick pulse on their account.

**Layout:** Stats cards + recent activity list

**Stats cards (top row):**

| Stat | Description |
|---|---|
| Total Parents | Count of active parents |
| Total Students | Count of active students |
| Invoices This Month | Count of invoices issued in current month |
| Outstanding | Sum of all unpaid invoice amounts (PKR) |
| Collected This Month | Sum of paid invoice amounts in current month |

**Recent Activity section:**
- List of the most recent invoices (latest 10)
- Columns: Parent, Student, Invoice, Amount, Due Date, Status
- "View all" link → Invoices list page

---

## 3. Invoice Management

### 3.1 Invoices List Page

**Route:** `/merchant/invoices`

**Layout:** Table page pattern

**Table columns:**

| Column | Description |
|---|---|
| Invoice | Title of the invoice |
| Parent | Parent's name (linked to parent detail) |
| Student | Student's name |
| Amount | Invoice amount (PKR) |
| Due Date | Payment due date |
| Status | `Pending`, `Paid`, `Overdue` (colored badge) |
| Actions | View, Mark as Paid |

**Filters:**
- Search — by parent name or invoice title
- Status filter — All / Pending / Paid / Overdue
- Date range filter (issued date)

**Page controls:**
- "Create Invoice" button (primary)
- Pagination

---

### 3.2 Create Invoice

**Route:** `/merchant/invoices/new` or a dialog from the list page

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Parent | Select (search) | Yes | Dropdown of active parents |
| Student | Select | Yes | Filtered by selected parent's students |
| Title | Text input | Yes | e.g. "April 2025 School Fee" |
| Description | Textarea | No | Optional notes |
| Amount | Number input | Yes | In PKR |
| Due Date | Date picker | Yes | |

**Actions:**
- **Create Invoice** — saves and navigates to invoice detail
- **Cancel** — returns to invoices list

---

### 3.3 Invoice Detail Page

**Route:** `/merchant/invoices/[id]`

**Sections:**

**Invoice summary card**
- Title, description, amount, due date, status
- Issued date
- Parent name (linked), Student name (linked)

**Payment status section**
- If paid: paid date, payment method, reference (if any)
- If pending/overdue: "Mark as Paid" button → opens payment confirmation dialog

**Mark as Paid dialog:**
- Payment method (cash, bank transfer, JazzCash, EasyPaisa, other)
- Reference number (optional)
- Notes (optional)
- Confirm button

---

## Status Badges Reference

| Status | Color |
|---|---|
| Active | Green |
| Inactive | Gray |
| Pending | Yellow / Amber |
| Paid | Green |
| Overdue | Red |

Use `SimpleBadge` or `BubbleBadge` from `components/custom/common-ui/` for all status indicators.
