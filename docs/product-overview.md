# Product Overview

## What Is Ascendra Pay

Ascendra Pay is a SaaS platform that enables businesses to digitise and automate invoice collection from their clients. It targets the Pakistan market, starting with private schools — where fee collection is largely manual, error-prone, and managed through WhatsApp and paper-based reminders.

The platform operates across two commercial layers. At the platform level, Ascendra sells software access to businesses (merchants) — this is a **B2B** relationship. Within the platform, each merchant uses it to issue and collect invoices from their own clients (e.g. parents paying school fees) — this is a **B2C** relationship. Ascendra facilitates both.

The platform is built merchant-agnostic from the ground up. While schools are the launch vertical, the same system serves clinics, tutoring centers, gyms, or any business that collects recurring fees.

---

## Portals

Ascendra Pay is composed of three distinct portals, each serving a specific user group.

---

### Ascendra Admin Portal

An internal control panel for the Ascendra operations team. Admins have full visibility across the entire platform and can step into any merchant's workspace to manage it on their behalf — effectively holding a superset of every merchant admin's permissions.

**Capabilities:**
- View and manage all merchants — onboarding, account status, activity monitoring
- Assume any merchant's role and operate their full workspace on their behalf
- Monitor platform-wide invoice volume, payment activity, and financial health
- Configure platform-level settings

---

### Merchant Admin Portal

A web dashboard for individual merchants. Each merchant operates in an isolated workspace. The core function is straightforward: manage your clients and their outstanding invoices.

**Capabilities:**
- Manage clients — add, edit, view profile, deactivate
- Create and issue invoices to clients
- Track invoice lifecycle — pending, paid, overdue
- Send payment reminders and notifications to clients
- View payment history and financial summaries

**Invoicing model:** An invoice is owned by the merchant and records what a specific client owes. Invoice descriptions can carry contextual detail — for example, "Monthly tuition — Jan 2025 — Child A" — but the core model has no student or child entity. That relationship is managed offline, or may be introduced as a future module outside the invoicing core.

---

### Parent Web App

A responsive web application for clients (parents) to view and settle their outstanding invoices. The experience is optimized for mobile browsers, modeled after the Zenda app — clean, action-oriented, and focused on the payment task.

**Capabilities:**
- View all invoices — current and historical
- Access invoice detail (description, amount, due date, status)
- Complete invoice payment (UI flow)
- Receive notifications for new invoices and payment reminders
- View and download payment receipts

---

## Target Users

| User | Role | Portal |
|---|---|---|
| Ascendra team | Oversee all merchants, resolve issues, configure the platform | Ascendra Admin Portal |
| Merchant administrator | Manage clients and invoices for their business | Merchant Admin Portal |
| Client (parent) | View and pay invoices issued by the merchant | Parent Web App |

---

## MVP Scope

The MVP delivers all three portals as a UI-only prototype — no live backend, all data mocked. The goal is to validate product flows and design decisions before committing to infrastructure.

| Portal | In-Scope Features |
|---|---|
| Ascendra Admin Portal | Merchant list and management; assume-merchant-role access |
| Merchant Admin Portal | Client management; Dashboard overview (summary stats); Invoice list, creation, and detail |
| Parent Web App | Invoice list; Invoice detail and payment flow (UI only) |

### Out of Scope

- Live backend and API integration
- Payment gateway integration
- SMS / email notification delivery
- Parent native mobile app (iOS / Android)
- Role-based access control within merchant accounts
- Reporting and data export (CSV, PDF)
- Multi-language support (Urdu)

---

## Roadmap & Delivery

**MVP scope is fixed.** The features listed above define the MVP boundary. Anything beyond this scope is logged as a product backlog item and is not built until the MVP is complete and validated.

**Iterative delivery post-MVP.** Development follows a sprint-based model. Each sprint delivers a defined set of backlog items and ships as a named release. Every sprint and release is governed by its own specification document, maintained separately from this overview. This document covers the MVP only.

---

## Key Design Decisions

**Merchant-agnostic terminology**
The data model uses `Merchant` and `Client` rather than vertical-specific labels like `School` and `Parent`. This keeps the codebase extensible across verticals without structural changes. UI copy in v1 may use school-specific language for clarity with the launch market, but the underlying system is domain-neutral.

**Web-first across all portals**
All three portals launch as web applications. Merchant admins work at desks — a web dashboard is the natural fit. Clients (parents) are served via a responsive web app optimized for mobile browsers in the MVP. A native mobile app for clients is a post-MVP release.

**Pakistan market context**
- Primary payment methods: bank transfer, JazzCash, EasyPaisa
- Preferred communication channel: WhatsApp and SMS (email is secondary)
- Language: English UI in v1; Urdu localization planned post-MVP
