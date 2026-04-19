# Data Model

This document describes the core entities in Ascendra Pay, their fields, and their relationships. This is the conceptual model — the actual database schema will be designed when backend work begins.

---

## Entity Overview

```
Merchant
  ├── has many → Users        (merchant admin staff accounts)
  ├── has many → Clients
  └── has many → Invoices

Client
  ├── belongs to → Merchant
  ├── has one   → User        (client portal account)
  └── has many  → Invoices

User
  ├── belongs to → Merchant   (if role = merchant_admin)
  └── belongs to → Client     (if role = client)

Invoice
  ├── belongs to → Merchant
  ├── belongs to → Client
  ├── has many  → Payments
  └── has many  → Notifications

Payment
  ├── belongs to → Invoice
  └── belongs to → User       (recorded_by — the merchant user who logged the payment)

Notification
  ├── belongs to → Invoice
  └── belongs to → Client
```

---

## Entities

### Merchant
Represents a business using Ascendra Pay to issue and collect invoices from its clients.

| Field | Type | Description |
|---|---|---|
| id | uuid | Unique identifier |
| name | string | Business name |
| business_type | enum | `school`, `clinic`, `tutoring_center`, `gym`, `other` |
| contact_name | string | Name of the primary contact person |
| email | string | Primary contact email |
| phone | string | Primary contact phone |
| address | string? | Physical business address |
| logo_url | string? | Logo image URL |
| status | enum | `active`, `suspended` |
| created_at | datetime | Account creation timestamp |

**Notes:**
- `suspended` is set by an Ascendra admin — the merchant loses platform access while suspended.
- Business type is used for display and reporting purposes only; it does not affect system behavior.

---

### User
Represents an authenticated account in the system. Every person who logs into any portal has a User record. Users are scoped by role to their respective portals.

| Field | Type | Description |
|---|---|---|
| id | uuid | Unique identifier |
| email | string | Login identifier (unique) |
| role | enum | `ascendra_admin`, `merchant_admin`, `client` |
| merchant_id | uuid? | FK → Merchant — required when role = `merchant_admin` |
| client_id | uuid? | FK → Client — required when role = `client` |
| status | enum | `active`, `inactive` |
| created_at | datetime | Account creation timestamp |
| last_login_at | datetime? | Timestamp of last successful login |

**Role-to-portal mapping:**

| Role | Portal Access |
|---|---|
| `ascendra_admin` | Ascendra Admin Portal — full platform access |
| `merchant_admin` | Merchant Admin Portal — scoped to their merchant |
| `client` | Parent Web App — scoped to their client record |

**Notes:**
- A merchant can have multiple `merchant_admin` users (e.g. admin + finance staff), though the MVP treats each merchant as single-user for simplicity.
- When an Ascendra admin assumes a merchant's role, no User record is created — it is a session-level context switch, not a permanent record.

---

### Client
Represents a client of a merchant — the individual or entity that receives and pays invoices. In the schools vertical this is a parent or guardian; the model is generic across verticals.

| Field | Type | Description |
|---|---|---|
| id | uuid | Unique identifier |
| merchant_id | uuid | FK → Merchant |
| full_name | string | Client's full name |
| phone | string | Primary contact — used as a key identifier |
| email | string? | Email address |
| address | string? | Physical address |
| status | enum | `active`, `inactive` |
| created_at | datetime | Record creation timestamp |

**Notes:**
- A client belongs to exactly one merchant. If the same person is a client of two merchants, two separate Client records exist.
- Phone is treated as the primary identifier because email is not universally available in the Pakistan market.
- An `inactive` client cannot be selected when creating new invoices, but their existing invoices and history remain accessible.

---

### Invoice
Represents a financial obligation raised by a merchant against a client — a specific amount owed, with a due date and tracked status.

| Field | Type | Description |
|---|---|---|
| id | uuid | Unique identifier |
| merchant_id | uuid | FK → Merchant |
| client_id | uuid | FK → Client |
| title | string | Invoice label (e.g. "Monthly Tuition — Jan 2025") |
| description | string? | Additional context (e.g. per-purpose or per-beneficiary detail) |
| amount | decimal | Total invoice amount (PKR) |
| due_date | date | Payment due date |
| status | enum | `pending`, `paid`, `overdue`, `cancelled` |
| issued_at | datetime | When the invoice was created |
| paid_at | datetime? | When the invoice was fully settled — null if unpaid |

**Status transitions:**

```
pending  →  paid        Invoice fully settled
pending  →  overdue     Due date passed (manual trigger or automated)
overdue  →  paid        Late settlement received
pending  →  cancelled   Merchant voids the invoice
overdue  →  cancelled   Merchant voids the invoice
```

**Notes:**
- `description` is a free-text field for optional context — for example, a school might write "Child: Zara Ahmed, Grade 5" to clarify the invoice purpose. This is not a structured relationship; the core model has no child or student entity.
- Once an invoice is `paid` or `cancelled`, its status cannot be changed.

---

### Payment
Represents a payment record against an invoice — capturing how, when, and how much was paid. Recorded by the merchant admin when they confirm receipt.

| Field | Type | Description |
|---|---|---|
| id | uuid | Unique identifier |
| invoice_id | uuid | FK → Invoice |
| recorded_by | uuid | FK → User (the merchant admin who logged this payment) |
| amount_paid | decimal | Amount paid in this transaction (PKR) |
| method | enum | `cash`, `bank_transfer`, `jazzcash`, `easypaisa`, `other` |
| reference | string? | Transaction reference number or receipt ID |
| notes | string? | Free-text notes from the merchant |
| paid_at | datetime | When the payment was made (as reported by the merchant) |
| recorded_at | datetime | When this Payment record was created in the system |

**Notes:**
- The model supports multiple partial payments per invoice (`amount_paid` across all payments sums to `Invoice.amount` for a `paid` status), though the MVP treats each invoice as fully paid in a single event.
- `paid_at` is the real-world payment time (e.g. when the client transferred money). `recorded_at` is when the merchant logged it in the system — these may differ.
- `recorded_by` provides an audit trail for accountability, especially when Ascendra admins are operating as a merchant.

---

### Notification
Represents a communication sent (or attempted) to a client in relation to an invoice — a reminder, alert, or confirmation. Tracked for delivery status and audit history.

| Field | Type | Description |
|---|---|---|
| id | uuid | Unique identifier |
| invoice_id | uuid | FK → Invoice |
| client_id | uuid | FK → Client (denormalized for easy querying) |
| merchant_id | uuid | FK → Merchant (denormalized for easy querying) |
| type | enum | `invoice_created`, `payment_reminder`, `overdue_alert`, `payment_confirmed` |
| channel | enum | `whatsapp`, `sms`, `email`, `in_app` |
| message | text | The actual message content sent |
| status | enum | `pending`, `sent`, `delivered`, `failed` |
| sent_at | datetime? | Timestamp of successful dispatch — null if pending or failed |
| created_at | datetime | When the notification was triggered |

**Notes:**
- Notification delivery is out of scope for the MVP but the entity is defined here for completeness. The backend will implement the delivery pipeline post-MVP.
- `client_id` and `merchant_id` are denormalized — they can be derived via `invoice_id` but are stored directly for query efficiency.
- The preferred channels in the Pakistan market are WhatsApp and SMS. Email is secondary.

---

## Key Relationships

| Relationship | Cardinality | Notes |
|---|---|---|
| Merchant → Clients | One-to-many | Client belongs to exactly one merchant |
| Merchant → Users | One-to-many | A merchant can have multiple staff users |
| Merchant → Invoices | One-to-many | All invoices issued by the merchant |
| Client → User | One-to-one | Client's portal login account |
| Client → Invoices | One-to-many | All invoices issued to this client |
| Invoice → Payments | One-to-many | Payment history against the invoice |
| Invoice → Notifications | One-to-many | All communications triggered by this invoice |

---

## MVP Simplifications

The UI-only MVP uses mocked data shaped to this model but applies these simplifications:

| Simplification | Detail |
|---|---|
| Single payment per invoice | Invoices are marked fully paid in one action — no partial payments |
| No notification delivery | Notifications are not sent; the entity exists in the model but has no UI or dispatch logic |
| Single user per merchant | Each merchant account is treated as single-admin in the UI |
| No payment gateway | Payment is recorded manually by the merchant after receiving offline confirmation |
| No cancellation UI | Invoice cancellation is modelled in the status transitions but has no UI in MVP |

These constraints will be lifted when backend integration begins.
