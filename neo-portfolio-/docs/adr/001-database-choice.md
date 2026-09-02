# ADR-001: PostgreSQL for Transactional Data

- **Status:** Proposed
- **Date:** 2026-09-02

## Context
SYNARI needs current asset state plus related assignments, movements, maintenance and audit history. Transfers require consistent updates across related records.

## Decision
Use PostgreSQL as the primary transactional database.

## Alternatives considered
A document database could simplify isolated records, but would make relational constraints, history queries and reporting consistency less direct for this domain. SQLite is useful for tests and local prototypes but is not the intended shared deployment database.

## Consequences
The project will use migrations, foreign keys, indexes, transactions and a documented backup strategy. Query access must remain parameterized and the schema must evolve through reviewed migrations.
