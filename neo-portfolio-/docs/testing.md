# SYNARI Testing Strategy

**Status:** Planned; no backend tests exist yet.

- **Unit:** validation schemas, role policies, status-transition rules and transfer transaction command logic.
- **Integration:** API plus PostgreSQL for authentication, authorization, asset CRUD, assignment/transfer atomicity and maintenance transitions.
- **End-to-end:** login -> create asset -> assign asset -> view history; invalid input and unauthorized access journeys.
- **Security regression:** IDOR attempts, privilege escalation, rate-limit behavior and secret/log redaction.

The future CI pipeline should run lint, type-check, unit/integration tests and a production build. Test data must be synthetic and clearly separated from production configuration.
