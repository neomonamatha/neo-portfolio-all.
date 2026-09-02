# SYNARI Deployment Plan

**Status:** Not deployed

## Local target
A future implementation should start with Docker Compose for PostgreSQL and the API, plus a documented `.env.example` containing placeholders only. The frontend can run through the API's configured local URL.

## CI/CD target
GitHub Actions should install dependencies, lint, type-check, test, build and publish artifacts on pull requests and `main`. Deployment credentials must be stored as GitHub environment secrets. No credentials belong in the repository.

## Release and rollback
Use immutable build artifacts, reviewed database migrations, a health check after deployment and a documented rollback path. Database migrations must be backward-compatible during rolling application updates where required.
