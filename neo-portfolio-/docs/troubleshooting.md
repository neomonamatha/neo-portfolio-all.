# SYNARI Troubleshooting

This project is currently in planning, so these are future operational notes.

- If the API cannot connect to PostgreSQL, verify the configured host, port, database and secret through environment validation; do not print credentials.
- If readiness fails while liveness passes, inspect dependency logs and database migration state.
- If a user receives `403`, verify the assigned role and the endpoint policy rather than bypassing authorization in the UI.
- If search is slow, inspect query plans and confirm indexes for the supported filters.
- If a deployment fails, stop traffic to the unhealthy revision, inspect the request ID and roll back the application artifact before attempting a schema rollback.
