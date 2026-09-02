# SYNARI Business Analysis

**Status:** Proposal / pre-implementation

## Problem statement
Universities and similar organisations can struggle to maintain a reliable view of equipment ownership, location, assignment, condition and maintenance. SYNARI proposes a traceable asset workflow that makes those records easier to manage without claiming that a particular institution currently uses the system.

## Objectives
- Maintain one authoritative record per asset.
- Make assignment, transfer and maintenance history traceable.
- Reduce ambiguous ownership and location records.
- Provide role-appropriate operational views and reports.

## Stakeholders and needs
- **Administrator:** manage users, roles and system configuration.
- **Asset manager:** register, search, assign, transfer and report on assets.
- **Staff member:** view assets assigned to them and report issues.
- **Technician:** receive maintenance work and record status/outcomes.

These are intended user roles for the product, not evidence of current users.

## Assumptions and constraints
- Initial deployment is for one organisation; multi-tenancy is deferred.
- PostgreSQL is available for transactional data.
- Asset identifiers and user identities are organisation-managed.
- Sensitive personal information is minimised.
- No production deployment, integrations or service-level metrics are claimed at this stage.

## Scope
Asset records, categories, departments, locations, assignments, movements, maintenance requests, audit events, role-based access, search/filtering and data-backed dashboards.

## Out of scope for the MVP
Procurement, depreciation/accounting, barcode hardware integration, mobile offline sync, predictive maintenance, cross-organisation sharing and automated email delivery.

## Business rules
- An asset has one current lifecycle status and at most one active assignment.
- A transfer closes the previous assignment and creates a movement event in one transaction.
- Maintenance status changes are attributable to an authenticated user.
- Deleted assets are soft-deleted when history must be retained.
- Users may only perform actions permitted by their role.

## Risks and opportunities
Risks include inaccurate seed data, over-collection of personal data, unauthorised asset access and unclear ownership of records. Opportunities include barcode scanning, import validation, scheduled reports and integration with institutional identity providers after the core workflow is proven.
