# Data Model

This document describes the core entities in Ascendra Pay, their fields, and their relationships. This is the conceptual model — the actual database schema will be designed when backend work begins.

---

## Entity Overview

```
Merchant
  └── has many → Parents
  └── has many → Students (through Parents)
  └── has many → Invoices

Parent
  ├── belongs to → Merchant
  └── has many → Students
  └── has many → Invoices

Student
  ├── belongs to → Parent
  ├── belongs to → Merchant
  └── has many → Invoices

Invoice
  ├── belongs to → Student
  ├── belongs to → Parent
  ├── belongs to → Merchant
  └── has many → Payments

Payment
  └── belongs to → Invoice
```

---

## Entities

### Merchant
Represents a school or any business using Ascendra Pay.

| Field | Type | Description |
|---|---|---|
| id | string (uuid) | Unique identifier |
| name | string | Business name (e.g. "The City School") |
| logo_url | string? | Logo image URL |
| email | string | Primary contact email |
| phone | string | Primary contact phone |
| address | string? | Physical address |
| status | enum | `active`, `suspended`, `inactive` |
| created_at | datetime | Account creation timestamp |

---

### Parent
Represents a client of the merchant — a parent or guardian who is financially responsible.

| Field | Type | Description |
|---|---|---|
| id | string (uuid) | Unique identifier |
| merchant_id | string | Foreign key → Merchant |
| full_name | string | Parent's full name |
| email | string? | Email address |
| phone | string | Phone number (primary contact) |
| status | enum | `active`, `inactive` |
| created_at | datetime | Record creation timestamp |

**Notes:**
- A parent belongs to one merchant. Cross-merchant parent records are separate entries.
- Phone is the primary identifier for parents (email may be optional in early MVP).

---

### Student
Represents a child linked to a parent, enrolled at a merchant (school).

| Field | Type | Description |
|---|---|---|
| id | string (uuid) | Unique identifier |
| parent_id | string | Foreign key → Parent |
| merchant_id | string | Foreign key → Merchant |
| full_name | string | Student's full name |
| grade | string? | Grade or class (e.g. "Grade 5", "O-Level") |
| roll_number | string? | School-assigned roll/registration number |
| status | enum | `active`, `inactive` |
| created_at | datetime | Record creation timestamp |

**Notes:**
- A student belongs to exactly one parent in a given merchant context.
- A parent can have multiple students.

---

### Invoice
Represents a fee or charge raised against a student/parent.

| Field | Type | Description |
|---|---|---|
| id | string (uuid) | Unique identifier |
| merchant_id | string | Foreign key → Merchant |
| parent_id | string | Foreign key → Parent |
| student_id | string | Foreign key → Student |
| title | string | Invoice label (e.g. "March 2025 Fee") |
| description | string? | Additional details |
| amount | number | Total invoice amount (PKR) |
| due_date | date | Payment due date |
| status | enum | `pending`, `paid`, `overdue`, `cancelled` |
| issued_at | datetime | When the invoice was created/sent |
| paid_at | datetime? | When the invoice was fully paid (null if unpaid) |

**Status transitions:**
```
pending → paid       (payment received)
pending → overdue    (due_date passed, auto or manual)
overdue → paid       (late payment received)
pending → cancelled  (invoice voided by merchant)
overdue → cancelled  (invoice voided by merchant)
```

---

### Payment
Represents a payment record against an invoice.

| Field | Type | Description |
|---|---|---|
| id | string (uuid) | Unique identifier |
| invoice_id | string | Foreign key → Invoice |
| amount_paid | number | Amount paid in this transaction (PKR) |
| method | enum | `cash`, `bank_transfer`, `jazzcash`, `easypaisa`, `other` |
| reference | string? | Transaction reference number (if applicable) |
| paid_at | datetime | Timestamp of the payment |
| notes | string? | Any notes from the merchant |

**Notes:**
- An invoice can have multiple partial payments (though MVP will treat invoices as fully paid/unpaid).
- `amount_paid` across all payments for an invoice should sum to `Invoice.amount` for a `paid` status.

---

## Key Relationships Summary

| Relationship | Cardinality |
|---|---|
| Merchant → Parents | One-to-many |
| Parent → Students | One-to-many |
| Student → Invoices | One-to-many |
| Parent → Invoices | One-to-many (denormalized for easy querying) |
| Invoice → Payments | One-to-many |

---

## MVP Simplifications

For the UI-only MVP, mock data will follow this shape but with these simplifications:

- Payments are not tracked per-transaction — an invoice is simply marked paid or unpaid
- No partial payments
- No invoice cancellation UI (status is read-only in list view)
- No cross-merchant scenarios

These constraints will be lifted when backend integration begins.
