# SYNARI Requirements

**Status:** Proposal / pre-implementation

## Functional requirements
- FR-01: Users can register or be provisioned, sign in and sign out securely.
- FR-02: Administrators can manage users and roles.
- FR-03: Asset managers can create, edit, view and archive assets.
- FR-04: Users can search assets by identifier, name, serial number or category.
- FR-05: Users can filter and paginate assets by status, location, department and condition.
- FR-06: Asset managers can assign and transfer assets.
- FR-07: Staff members can report damage or request maintenance.
- FR-08: Technicians can update maintenance request status and record work completed.
- FR-09: Authorised users can view an asset's movement, assignment and maintenance history.
- FR-10: Authorised users can view dashboards whose metrics come from persisted records.
- FR-11: The system records audit events for security-sensitive and business-critical changes.
- FR-12: The API exposes an OpenAPI document for supported endpoints.

## Non-functional requirements
- NFR-01: Passwords are hashed with a modern password-hashing algorithm; plaintext passwords are never stored.
- NFR-02: Server-side validation and authorization apply to every write endpoint.
- NFR-03: List endpoints use bounded pagination and indexed filters.
- NFR-04: The UI supports keyboard navigation, readable focus states and responsive layouts from 320px upward.
- NFR-05: Errors are structured, actionable and do not expose secrets or stack traces to clients.
- NFR-06: Health and readiness checks report dependency state without leaking configuration.
- NFR-07: Automated tests cover domain rules, API authorization and critical user journeys.
- NFR-08: Configuration and secrets are supplied by environment variables or a secret manager.

## Acceptance baseline
A first MVP is acceptable when an authorized asset manager can create an asset, assign it, transfer it, view its history, and see the resulting data reflected in the dashboard, with tests covering unauthorized access and invalid input.
