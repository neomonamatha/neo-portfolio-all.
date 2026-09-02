# SYNARI Implementation Roadmap

**Current status:** Planning only. No functioning backend or deployment is claimed.

1. **Foundation:** create a separate `neo-smart-asset-tracker` repository or clearly isolated application workspace; establish TypeScript, linting, test runner, environment validation and module boundaries.
2. **Database:** add PostgreSQL migrations, seed only clearly labelled development data, repositories and transaction tests.
3. **Authentication:** implement password hashing, sessions, logout, role checks and abuse controls.
4. **Core assets:** implement asset/category/location/department APIs with validation, search, filters and pagination.
5. **Workflows:** implement assignment, transfer, movement history and maintenance state transitions transactionally.
6. **Frontend:** build login, dashboard, asset list/detail/forms, maintenance and administration views with loading, empty, error and confirmation states.
7. **Quality:** add unit, API/integration and end-to-end coverage for login -> create -> assign -> history.
8. **Security:** run authorization, injection, dependency and secret checks; review logs and data minimization.
9. **Operations:** add Docker Compose for local development, health endpoints, structured logs and CI quality gates.
10. **Cloud proposal:** after local verification, choose a minimal AWS deployment, document IAM, database, secrets, logging, rollback and cost boundaries.
11. **Portfolio integration:** update the hub only with verified repository, documentation, screenshots and deployment links; change status from Planning only when evidence exists.

Each milestone must pass its focused checks before the next begins.
