# Coinsplit

Coinsplit is a temporary-group money sharing app for trips, dinners, and similar events. It exists to keep a trusted shared ledger of what happened, derive each participant's balance from that history, and help the group settle up cleanly.

## Language

**Ledger**:
The accounting boundary for one temporary event.
_Avoid_: Trip, event, group

**Participant**:
A person inside one ledger who can pay, owe, send, or receive money.
_Avoid_: User, member, friend

**Expense**:
A record where one participant paid a total amount for one or more participants.
_Avoid_: Purchase, transaction

**Expense allocation**:
The stored owed amount for one participant within one expense.
_Avoid_: Split rule, share preview

**Transfer**:
A direct movement of money from one participant to another inside a ledger.
_Avoid_: Reimbursement, payout

**Balance**:
The current signed amount a participant should receive or owes, derived from expenses and transfers.
_Avoid_: Debt, total

**Settlement**:
The process of bringing all participant balances in a ledger to zero.
_Avoid_: Archive, close

**Settlement recommendation**:
The computed minimal set of transfers that would settle the current ledger.
_Avoid_: Plan, instruction set

**Active ledger**:
A ledger whose history and participants can still be changed.
_Avoid_: Open, unlocked

**Archived ledger**:
A read-only ledger that has been settled to zero but may later be unarchived.
_Avoid_: Locked, closed forever

## Relationships

- A **Ledger** contains one or more **Participants**
- A **Ledger** contains zero or more **Expenses**
- A **Ledger** contains zero or more **Transfers**
- An **Expense** has exactly one payer **Participant**
- An **Expense** has one or more **Expense allocations**
- An **Expense allocation** belongs to exactly one **Participant**
- A **Transfer** moves money from one **Participant** to one other **Participant**
- A **Balance** is derived from **Expense allocations** and **Transfers**
- A **Settlement recommendation** is derived from current **Balances**
- An **Archived ledger** may be returned to an **Active ledger** by unarchiving

## Example Dialogue

> **Dev:** "If Anna paid for dinner for Anna, Ben, and Clara, is that one **Transfer** or one **Expense**?"
> **Domain expert:** "That is one **Expense** in the **Ledger**. The app stores one **Expense allocation** per **Participant**, derives each **Balance**, and later suggests **Transfers** during **Settlement**."

## Design system

**Theme**: Centralised style tokens in `src/theme/index.ts`. All screens import from there — no page-level StyleSheet allowed. If a value appears in more than one file it belongs in the theme.

**Color palette**: Black-to-white only (`#000000` → `#ffffff` with semantic gray stops). No strong color by design — the UI intentionally reads as a wireframe placeholder until a real visual design is applied.

**Typography scale**: Three levels — `title` (28px/700), `body` (16px/400), `label` (12px/600, uppercase).

**Buttons**: Two variants — `primary` (black background, white text) and `secondary` (white background, black border and text). Pure black/white enforces the wireframe constraint and avoids color debates.

**Light/dark mode**: The `src/theme/` folder structure is intentional — exporting named token objects makes it straightforward to add a dark theme later without restructuring.

## Localization

**Locale resolution**: The active locale is determined in priority order: (1) user-selected language from the in-app picker, (2) device system language via `expo-localization`, (3) English hard fallback. Translation strings live in per-locale JSON files; adding a language requires no code changes.
_Avoid_: Language detection, auto-detect only

## Flagged ambiguities

- "user" was used to mean **Participant**; resolved: v1 has no account system, only ledger-local **Participants**.
- "trip" was used to mean the top-level record; resolved: the canonical term is **Ledger** because the same model also covers dinners and other temporary events.
- "lock" and "archive" were used interchangeably; resolved: v1 uses **Active ledger** and **Archived ledger**, and archive is reversible via unarchive.
- "transaction" was used to mean both **Expense** and **Transfer**; resolved: these are distinct record types with different meanings.
