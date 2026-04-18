# Product Overview

## What Is Ascendra Pay

Ascendra Pay is a B2B invoice-settling SaaS platform built for the Pakistan market. It enables businesses (merchants) to manage their clients and automate the collection of outstanding invoices.

The first vertical is **schools** — the most immediate pain point in Pakistan's private education sector, where fee collection is largely manual, error-prone, and dependent on WhatsApp or paper-based reminders. Ascendra Pay replaces this with a structured, digital-first system.

The platform is intentionally designed to be **merchant-agnostic**. While schools are the launch vertical, the same system can serve clinics, tutoring centers, gyms, or any recurring-fee business.

---

## Target Users

| User | Role | Portal |
|---|---|---|
| Ascendra team | Platform admins — oversee all merchants and clients | Ascendra Admin Portal |
| School administrator | Manages parents, students, invoices for their school | Merchant Admin Portal |
| Parent | Views and pays invoices for their children | Parent Mobile App |

---

## The 3 Portals

### 1. Ascendra Admin Portal
An internal control panel for the Ascendra operations team.

**Key capabilities:**
- View and manage all merchants on the platform
- View each merchant's client (parent) list
- Monitor platform-wide invoice and payment activity
- Manage merchant account status (active, suspended, etc.)
- Platform-level settings and configuration

**Primary users:** Ascendra internal team

---

### 2. Merchant/School Admin Portal
A web dashboard for individual merchants. Each merchant has their own isolated workspace.

**Key capabilities:**
- Manage parents (add, edit, view, deactivate)
- Manage students linked to parents
- Create invoices for students/parents
- Track invoice status: pending, paid, overdue
- Send payment reminders and notifications to parents
- View payment history and financial summaries

**Primary users:** School administrators, finance staff

---

### 3. Parent Mobile App
A mobile application for parents to stay informed and pay their bills.

**Key capabilities:**
- View all children linked to their account
- See all invoices per child (current and historical)
- Pay invoices in-app
- Receive notifications for new invoices and reminders
- View payment receipts

**UX reference:** Zenda app

**Primary users:** Parents with children enrolled at a merchant school

---

## MVP Scope

The MVP focuses exclusively on the **Merchant/School Admin Portal**, UI-only (no live backend). The goal is to validate the product flow and design before investing in infrastructure.

### In Scope (MVP)
- Parents Management — list, add, edit parents and their linked students
- Dashboard/Overview — summary stats (total parents, invoice counts, collected vs outstanding)
- Invoice Management — list invoices, create new invoice, view invoice detail

### Out of Scope (Post-MVP)
- Ascendra Admin Portal
- Parent Mobile App
- Live backend API integration
- SMS/email notification system
- Payment gateway integration
- Multi-language support (Urdu)
- Role-based access control (within merchant)
- Reporting and export (CSV, PDF)

---

## Key Design Decisions

**Merchant-agnostic terminology**
The data model uses `Merchant` (not School) and `Client`/`Parent` to keep the system extensible. UI copy may say "school" in the v1 product for clarity with the target market, but the underlying model is generic.

**Web-first for merchants, mobile-first for parents**
School administrators work at desks — a web dashboard suits them. Parents are typically mobile — hence a native app (React Native or similar) for the parent experience.

**Pakistan context**
- Primary payment methods: bank transfer, JazzCash, EasyPaisa
- Communication channel preference: WhatsApp and SMS over email
- Language: English UI in v1, Urdu support planned post-MVP
