# SYNARI Engineering Decisions

**Status:** Initial proposal decisions

## Decision log

| ID | Decision | Reason | Consequence |
| --- | --- | --- | --- |
| ADR-001 | Use PostgreSQL | Asset relationships, constraints, history and reporting are relational. | Requires migrations and managed database operations. |
| ADR-002 | Start with a modular monolith | MVP needs atomic transfers and a smaller operational surface. | Module boundaries must remain explicit for future growth. |
| ADR-003 | Use REST with OpenAPI | The contract is easy to inspect and consume from web or future clients. | Versioning and pagination conventions must be maintained. |
| ADR-004 | Keep deployment provider-agnostic initially | No cloud account or deployment evidence is available yet. | Cloud-specific work follows a tested MVP. |
