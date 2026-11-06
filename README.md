# First Savvy — From Stars to Legacy

<div align="center">

![First Savvy Logo](https://img.shields.io/badge/First%20Savvy-Platform%20v1.0.0-324154?style=for-the-badge&logoColor=white)
<br />
**The connected ecosystem unifying youth financial literacy with enterprise-grade personal wealth management.**

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.10-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase PostgreSQL](https://img.shields.io/badge/Supabase-PostgreSQL%2015-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vitest Passing](https://img.shields.io/badge/Tests-24%2F24%20Passing-brightgreen?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Ready-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev/)
[![COPPA Compliant](https://img.shields.io/badge/COPPA-Compliant%20Audit%20Ready-4FA3CD?style=flat-square)](docs/security.md)

</div>

---

## 📑 Table of Contents

- [Vision & Value Proposition](#-vision--value-proposition)
- [Platform Architecture & Dual-Experience Design](#-platform-architecture--dual-experience-design)
  - [1. Public Marketing Experience](#1-public-marketing-experience-1stsavvycom)
  - [2. Supervised Kid Space & Family Hub](#2-supervised-kid-space--family-hub-kid-view)
  - [3. Adult Personal Finance Suite](#3-adult-personal-finance-suite-appfirstsavvycom)
- [Zero-Setup Standalone Demo Mode](#-zero-setup-standalone-demo-mode-the-miller-family)
- [Technology Stack](#-technology-stack)
- [Quick Start & Local Development](#-quick-start--local-development)
- [Available Scripts](#-available-scripts)
- [Environment Configuration](#-environment-configuration)
- [Database Schema & Supabase RLS](#-database-schema--supabase-rls)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [Security, Data Integrity & COPPA Compliance](#-security-data-integrity--coppa-compliance)
- [Repository Structure](#-repository-structure)
- [Technical Documentation Index](#-technical-documentation-index)
- [License](#-license)

---

## 💡 Vision & Value Proposition

Traditional personal finance software focuses strictly on adult balances and transactions, leaving youth financial education to separate gamified apps disconnected from real family finances.

**First Savvy bridges this divide.** It provides a single, secure ecosystem where:
- **Children** develop lifelong financial habits through age-appropriate chores, an immutable star-earning ledger, patient savings goals, and supervised reward redemptions.
- **Parents & Adults** manage their entire financial picture—accounts, transactions, zero-based envelope budgets, recurring bill calendars, investments, and net worth—while supervising their children's progress with zero risk of exposing household assets.

---

## 🏛️ Platform Architecture & Dual-Experience Design

First Savvy employs clean architectural separation between public discovery and authenticated user workflows:

### 1. Public Marketing Experience (`1stsavvy.com`)
- **12 Comprehensive Pages**: Home, Family, Personal Finance, About Us, Contact, FAQ, Feature Updates, Privacy Policy, Terms of Use, Beta Terms, Children's Privacy Notice, and Cookie Preferences.
- **Interactive Demos**: Live interactive workflow previews for both the Family reward system and the Adult financial dashboard.
- **Waitlist & Lead Capture**: Submissions equipped with client-side validation, rate limiting, and spam protection.
- **SEO & Discovery**: Automated dynamic XML sitemap (`/sitemap.xml`), search engine directives (`robots.txt`), and rich OpenGraph/Twitter social cards.

### 2. Supervised Kid Space & Family Hub (`/kid-view`)
- **Task & Chore Manager**: Daily, weekly, and custom chore schedules with star values, parent approval requirements, and custom notes.
- **Immutable Star Ledger**: Complete append-only audit trail logging every earned, awarded, deducted, and redeemed star.
- **Savings & Reward Goals**: Wishlists and monetary savings goals with visual progress bars and milestone indicators.
- **Dedicated Child Portal (`/kid-login`, `/kid-view`)**: High-contrast, age-friendly interface protected by a 4-digit PIN. Children have access exclusively to their own chores, star balances, and wishlist goals—adult accounts, banking balances, and household net worth are strictly inaccessible.
- **COPPA & Guardian Consent**: Mandatory parental consent audit logging before profile creation, salted SHA-256 PIN hashing, and parental rights to export or permanently erase records.

### 3. Adult Personal Finance Suite (`app.firstsavvy.com`)
- **Executive Net Worth Dashboard**: Real-time aggregation of total assets, liabilities, liquid cash reserves, debt ratio, and 6-month historical trajectory graphs powered by Recharts.
- **Banking & Plaid Integration**: Tokenized read-only account aggregation via Plaid Link modal, manual asset/debt tracking, advanced multi-criteria transaction filters, bulk categorization, and automated rule engines.
- **Envelope & Zero-Based Budgeting**: Monthly spending plans across 30+ pre-seeded categories, real-time pace indicators, and over-budget alerts.
- **Financial Planning Calendar**: Interactive Month and Day views consolidating upcoming bill due dates, subscription renewals, anticipated payroll deposits, and meal plans.
- **Investments & Holdings**: Asset allocation across stocks, ETFs, crypto, fixed-income instruments, and real estate with real-time gain/loss tracking.
- **Contacts & Advisory Network**: Secure directory for family emergency contacts, trustees, and verified financial advisors.
- **Roadmap Previews**: Realistic, interactive previews for Credit Score monitoring, Estate Planning, Password Vault, and Partner Integrations.

---

## ⚡ Zero-Setup Standalone Demo Mode ("The Miller Family")

First Savvy runs completely standalone in offline demo mode with zero external service dependencies or cloud database requirements. Launching the project instantly pre-populates a rich, realistic scenario:

| Entity | Details |
| :--- | :--- |
| **Household Members** | **John Miller** (Adult Owner), **Sarah Miller** (Spouse), **Oliver Miller** (Age 10, PIN: `1234`), **Chloe Miller** (Age 7, PIN: `5678`) |
| **Connected Accounts** | Primary Checking, High-Yield Savings, 2 Credit Cards, 401(k), Roth IRA, Auto Loan, Primary Mortgage |
| **Transaction History** | 90+ days of realistic, categorized household transactions |
| **Family Tasks & Stars** | Active chores (pet feeding, homework, room cleanup) and an active Star Ledger balance |
| **Budgets & Goals** | Active monthly budget allocations, family vacation savings goals, and children's reward wishlists |

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [Next.js 14 (App Router)](https://nextjs.org/), [React 18](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Design System** | [Tailwind CSS 3](https://tailwindcss.com/), Radix UI Primitives, Lucide Icons, Class Variance Authority |
| **Typography** | Cormorant Garamond (Editorial serif headlines), Inter (Crisp tabular and dashboard UI) |
| **Color Tokens** | Deep Navy (`#324154`), Sky Blue (`#4FA3CD`), Supporting Blue (`#66AFD3`), Soft Blue (`#A4CDE1`), Off-White (`#F9F7F8`) |
| **Motion & Scroll** | [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) smooth scrolling |
| **Charts & Data Viz** | [Recharts](https://recharts.org/) (Responsive Area, Line, Bar, and Pie components) |
| **Database & Auth** | [Supabase](https://supabase.com/) (PostgreSQL 15 with Row-Level Security) + In-memory persistent sandbox store |
| **Testing** | [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/), [Playwright](https://playwright.dev/) |
| **Validation & State** | [Zod](https://zod.dev/), React Hook Form, Custom Reactive Storage Adapter |

---

## 🚀 Quick Start & Local Development

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **Package Manager**: `npm` (v9+)

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/Ruhan-AI/1stsavvy.git
cd 1stsavvy

# 2. Install dependencies
npm.cmd install

# 3. Run the development server
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser:

| Route | Description | Credentials / Access |
| :--- | :--- | :--- |
| `/` | Public Marketing Home Page | Open to public |
| `/family` | Family Experience Overview & Demo | Interactive demo |
| `/personal-finance` | Personal Finance Overview & Demo | Interactive demo |
| `/login` | Adult App Sign In | Click "Explore Demo" or enter demo credentials |
| `/dashboard` | Adult Net Worth & Financial Suite | Authenticated adult portal |
| `/kid-login` | Supervised Kid Space Sign In | Select Child & enter PIN (`1234` for Oliver, `5678` for Chloe) |
| `/kid-view` | Child Chores & Star Rewards Dashboard | Supervised child portal |

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm.cmd run dev` | Starts the Next.js local development server with Hot Module Replacement (HMR) |
| `npm.cmd run build` | Compiles and builds the production-ready Next.js application |
| `npm.cmd run build:hostinger` | Builds the app and prepares static assets for Hostinger or static hosting deployments |
| `npm.cmd start` | Starts the production server using the compiled `.next` build |
| `npm.cmd run lint` | Runs ESLint across all TypeScript and React files |
| `npm.cmd test` | Runs the Vitest test suite (financial math, star ledger, COPPA validation) |
| `npm.cmd run test:watch` | Runs Vitest in interactive watch mode for active TDD |
| `npm.cmd run test:e2e` | Executes Playwright end-to-end integration and responsive viewport tests |

---

## ⚙️ Environment Configuration

Copy `.env.example` to `.env.local` to configure live credentials:

```bash
cp .env.example .env.local
```

| Key | Description | Required For |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | Base URL of the authenticated application (e.g. `https://app.firstsavvy.com`) | Production Routing |
| `NEXT_PUBLIC_MARKETING_URL` | Base URL of the marketing website (e.g. `https://1stsavvy.com`) | Canonical & Sitemap URLs |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project API URL | Live Cloud Database |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous public client key | Live Cloud Database |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase privileged service role key (Server-only) | Administrative Tasks |
| `PLAID_CLIENT_ID` | Plaid API developer client ID | Live Banking Connections |
| `PLAID_SECRET` | Plaid API developer secret | Live Banking Connections |
| `PLAID_ENV` | Plaid environment (`sandbox`, `development`, `production`) | Banking Aggregator |
| `RESEND_API_KEY` | Resend API key for transactional emails & notifications | Email Deliverability |

> **Note**: In local demo mode, all cloud environment variables are optional. The platform automatically activates the self-contained offline Miller Family sandbox store.

---

## 🗄️ Database Schema & Supabase RLS

The production database is architected on PostgreSQL 15 via Supabase with **37+ normalized relational tables**, explicit foreign keys, cascading constraints, and stringent Row Level Security (RLS) policies:

- **Strict Multi-Tenant Isolation**: Every household's records are partitioned by `household_id`.
- **Row Level Security (RLS)**: Enforces access control at the database level—parents can query and modify family accounts, whereas child sessions are strictly restricted to assigned tasks and personal star ledger rows.
- **Integer Cents Precision**: All financial amounts (`balance_cents`, `amount_cents`) are stored as 64-bit integers (`BIGINT`) to prevent IEEE-754 floating-point rounding errors.
- **Append-Only Ledger**: The `star_ledger` table enforces immutability, ensuring that points and stars cannot be retroactively altered without generating an explicit counter-transaction.

Migrations are maintained in `supabase/migrations/`. To apply them to your Supabase project:

```bash
supabase db push
```

---

## 🧪 Testing & Quality Assurance

First Savvy adheres to strict test-driven standards across financial calculations and child safety protocols:

```bash
# Execute the full Vitest unit test suite
npm.cmd test
```

### Verified Test Suites:
- `src/tests/starLedger.test.ts` — Star addition, deduction, redemption limits, and balance calculation.
- `src/tests/coppa.test.ts` — Explicit parental consent validation, age boundary constraints, and PIN hashing checks.
- `src/tests/calculations.test.ts` — Zero-based budget reconciliation and integer cents conversion logic.
- `src/tests/format.test.ts` — Currency formatting, masked account strings, and localized date handling.
- `src/tests/familyHeroDemo.test.tsx` — Interactive marketing demo component behavior and state synchronization.
- `src/tests/appDialog.test.tsx` — Modal focus trapping, screen reader accessibility, and viewport escape handling.
- `src/tests/brandLoader.test.tsx` — Brand splash screen mobile viewports and scroll release logic.

---

## 🔒 Security, Data Integrity & COPPA Compliance

1. **COPPA (Children's Online Privacy Protection Act)**:
   - Children cannot sign up independently. All child profiles require an authenticated parent or legal guardian.
   - Profile creation requires an explicit, unchecked consent acknowledgement stored with an audit timestamp and IP identifier.
   - Child accounts feature a dedicated right-to-erase workflow offering parents the choice of full deletion or record anonymization.
2. **PIN Protection & Cryptographic Hashing**:
   - 4-digit child access PINs are salted and hashed before storage. Raw PINs are never stored or transmitted in plain text.
3. **Hard Separation of Roles**:
   - Child views are sandboxed from adult financial records. Children cannot view bank balances, credit card statements, investment holdings, or household net worth.
4. **Read-Only Tokenized Banking**:
   - First Savvy never handles or stores banking login credentials. Account connectivity is handled exclusively via secure Plaid aggregator tokens.
   - Account numbers are permanently masked in the UI (e.g. `•••• 4812`).

---

## 📂 Repository Structure

```plaintext
Firstsavvy-Website-main/
├── .agents/                      # Agent workflows and skill configurations
├── docs/                         # Comprehensive engineering documentation
│   ├── architecture.md           # Domain separation & system architecture
│   ├── current-state-audit.md    # Production readiness & feature checklist
│   ├── data-model.md             # Supabase schema definitions & ER relationships
│   ├── deployment.md             # Production hosting & DNS configuration
│   ├── mobile-responsive-verification.md # Viewport & mobile verification records
│   ├── responsive-system.md      # Breakpoint & layout design systems
│   └── security.md               # COPPA, child privacy & security specifications
├── public/                       # Static public assets, vector logos & icons
├── scripts/                      # Build, audit, and deployment utility scripts
│   ├── mobile-audit.mjs          # Responsive accessibility & layout checks
│   ├── mobile-dialog-audit.mjs   # Modal viewport verification
│   ├── mobile-navigation-audit.mjs # Nav header & drawer checks
│   └── prepare-hostinger.mjs     # Static export bundler
├── src/
│   ├── app/
│   │   ├── (auth)/               # Adult & child authentication flows
│   │   ├── (marketing)/          # Public marketing & legal pages (12 routes)
│   │   ├── (app)/                # Authenticated application shell & dashboards
│   │   │   ├── banking/          # Plaid link, manual assets, transactions
│   │   │   ├── budget/           # Envelope budgeting & cash flow
│   │   │   ├── calendar/         # Bills, payroll & meal planner
│   │   │   ├── dashboard/        # Executive net worth summary
│   │   │   ├── family/           # Chores, stars, wishlists, allowances
│   │   │   ├── investments/      # Equity, ETF & crypto portfolio
│   │   │   ├── kid-view/         # Sandboxed child dashboard
│   │   │   └── settings/         # Profile, security, notifications & COPPA
│   │   ├── api/                  # API endpoints (waitlist, contact, Plaid webhooks)
│   │   ├── layout.tsx            # Global root layout with typography and metadata
│   │   └── sitemap.ts            # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── brand/                # Vector SVG logos, badges & brand assets
│   │   ├── layout/               # Navbars, footers, sidebars & mobile drawers
│   │   └── ui/                   # Accessible UI components (Radix primitives)
│   ├── lib/
│   │   ├── store/                # Reactive demo data store (The Miller Family)
│   │   ├── types/                # Strict TypeScript domain interfaces
│   │   └── utils/                # Date, currency, string & math helpers
│   └── tests/                    # Vitest and React Testing Library suites
├── supabase/
│   └── migrations/               # PostgreSQL schema & RLS policy migrations
├── package.json                  # Dependencies & execution scripts
├── playwright.config.ts          # Playwright E2E configuration
├── tailwind.config.ts            # Custom design tokens, colors & typography
├── tsconfig.json                 # Strict TypeScript configuration
└── vitest.config.ts              # Unit test runner setup
```

---

## 📚 Technical Documentation Index

For in-depth architectural and operational guides, consult the dedicated documentation in [`docs/`](docs/):

- 📐 [**System Architecture & Technical Specifications**](docs/architecture.md)
- 🔒 [**Security, Child Privacy & COPPA Compliance Guide**](docs/security.md)
- 🗃️ [**Database Data Model & Relational Schema**](docs/data-model.md)
- 🚀 [**Production Deployment & Domain Setup Guide**](docs/deployment.md)
- 📱 [**Responsive System & Breakpoint Design**](docs/responsive-system.md)
- 📋 [**Production Readiness Audit & Feature Verification**](docs/current-state-audit.md)

---

## 📄 License & Intellectual Property

Copyright © 2026 First Savvy. All rights reserved.  
Unauthorized copying, modification, distribution, or deployment of this software without express written permission is strictly prohibited.
