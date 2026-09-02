# SYNARI Security Review

**Status:** Threat model and controls proposal

## Main risks and controls
- **Broken access control / IDOR:** authorize every asset and maintenance action against the authenticated user's role and scope; test direct object access with another user.
- **Credential attacks:** hash passwords with Argon2id or bcrypt, enforce a password policy, rate-limit login, invalidate sessions on logout and never log credentials.
- **Injection:** use parameterized queries or a trusted ORM; validate and bound filters, sorting and pagination.
- **XSS:** escape rendered user content, avoid unsafe HTML injection and configure a restrictive content security policy where deployment allows it.
- **CSRF:** use same-site secure cookies plus CSRF protection for cookie-authenticated state changes.
- **Sensitive data exposure:** minimize personal data, redact logs, use HTTPS, avoid returning password hashes and manage secrets outside source control.
- **Abuse and denial of service:** request size limits, rate limits, bounded pages and timeouts.
- **Audit integrity:** append audit events for role, assignment, transfer and maintenance changes; restrict audit access.

## Security process
Dependency review and secret scanning run in CI. The application exposes safe liveness/readiness checks. A pre-release review verifies authorization tests, migration safety, backup/restore expectations and environment configuration. This document describes intended controls; it is not a claim that they are implemented yet.
