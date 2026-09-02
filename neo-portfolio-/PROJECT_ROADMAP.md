# Project Roadmap

Future projects should move from a clearly researched problem to requirements, user stories, architecture, data and API design, UI/UX, implementation, testing, security, CI/CD, deployment, monitoring and documentation.

## Local: Johannesburg, Pretoria and Gauteng

- **SME operations toolkit:** lightweight stock, invoicing and cash-flow workflows for township and early-stage businesses.
- **Municipal service navigator:** a plain-language status and escalation layer for local service requests, with privacy-aware reporting.

## National: South Africa

- **Public service queue intelligence:** privacy-preserving analysis of waiting times and service demand to support staffing decisions.
- **Small-business payment resilience:** an offline-tolerant payments and reconciliation concept for intermittent connectivity.

## Regional: SADC and Southern Africa

- **Cross-border logistics visibility:** event-driven shipment milestones, document checks and exception alerts across regional corridors.
- **Climate-smart agriculture exchange:** data-informed coordination between growers, logistics providers and buyers.

## International

- **Digital identity consent layer:** user-controlled sharing of verified attributes with auditable access decisions.
- **Cloud security evidence platform:** continuous mapping of infrastructure controls to compliance evidence and actionable risks.

Each proposal should earn its complexity through research and measurable user value. Avoid building disconnected CRUD applications just to increase repository count.

## Portfolio ecosystem sequence

The projects below are a staged direction, not completed applications. Each should receive its own repository only after the problem, requirements and MVP scope are understood.

1. **SYNARI Smart Asset Tracker:** modular monolith with PostgreSQL, role-based access, asset history, maintenance workflow, tests and documented deployment. Current state: planning and API foundation.
2. **SME Business Operations Platform:** South African small-business workflows for quotations, invoices, inventory and expenses. Add multi-tenant boundaries, financial data validation and auditability only after research.
3. **Africa Logistics Platform:** shipment and delivery visibility across regional corridors. Introduce geolocation, proof of delivery, background jobs and event-driven updates when the workflow justifies them.
4. **Health Services Administration Platform:** appointments, provider schedules, documents and administrative records. Treat privacy, access control, audit trails and data retention as first-class requirements; do not present it as a diagnostic system.
5. **Data and BI Platform:** synthetic-data analytics with a documented warehouse model, ETL/ELT, SQL KPIs and reproducible dashboards. Label all synthetic data clearly.
6. **AI Business Platform:** document ingestion, retrieval and workflow assistance where AI provides measurable value. Include privacy boundaries, prompt/version management, rate limits, cost controls and deterministic fallbacks.
7. **Cloud Engineering Platform:** a focused AWS/Terraform/Docker system demonstrating IAM, networking, CI/CD, monitoring and environment separation without unnecessary application complexity.
8. **Web3 Platform:** a problem-led blockchain workflow with Solidity tests, wallet integration and explicit reasoning for on-chain data. Avoid tokenisation unless it is appropriate to the problem.

## Promotion rule

A project moves from Planning to In Development only after its problem definition and acceptance baseline exist. It moves to Deployed only after a real deployment, tests, configuration and rollback path are verified. The portfolio must link only to repositories, demos and documentation that actually exist.