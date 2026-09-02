# SYNARI API Design

**Status:** Proposed contract; implementation not yet available

Base path: `/api/v1`

## Authentication
- `POST /auth/login` validates credentials and creates a session.
- `POST /auth/logout` invalidates the current session.
- `GET /auth/me` returns the current user's safe profile and roles.

## Assets
- `GET /assets?q=&status=&locationId=&departmentId=&page=&pageSize=` lists authorized assets.
- `POST /assets` creates an asset for asset-manager roles.
- `GET /assets/:assetId` returns current state and permitted history.
- `PATCH /assets/:assetId` updates editable asset fields.
- `POST /assets/:assetId/assignments` creates an assignment or transfer transaction.
- `GET /assets/:assetId/history` returns movements, assignments and maintenance events.

## Maintenance and administration
- `POST /assets/:assetId/maintenance-requests` creates a request.
- `PATCH /maintenance-requests/:requestId` applies an authorized status update.
- `GET /users` and `PATCH /users/:userId/roles` are administrator-only.
- `GET /dashboard/summary` returns metrics computed from database records.
- `GET /health/live` and `GET /health/ready` support operations.

## Contract rules
Successful create operations return `201`; successful updates return `200`; invalid input returns `400`; unauthenticated requests return `401`; insufficient permissions return `403`; missing resources return `404`; conflicts such as duplicate serial numbers return `409`; unexpected failures return `500` with a request ID.

All list responses include `items`, `page`, `pageSize` and `total`. Validation errors identify fields without echoing secrets. The implemented API will publish an OpenAPI document and must enforce authorization server-side.
