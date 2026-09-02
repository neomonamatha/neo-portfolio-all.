# SYNARI Cloud Architecture

**Status:** Proposed, not deployed

A minimal AWS option is:

- **CloudFront + S3:** deliver the static React client with caching and HTTPS.
- **ECS/Fargate:** run the API container without managing servers.
- **RDS PostgreSQL:** managed relational storage with backups and restricted network access.
- **Secrets Manager:** store database credentials and session secrets outside the repository.
- **CloudWatch:** collect structured logs, health signals and actionable alarms.
- **IAM:** least-privilege roles for deployment and runtime access.

The API should sit behind an HTTPS load balancer in private network paths where practical, with RDS inaccessible from the public internet. Terraform may be introduced after the application boundary is stable. Costs, backup retention, regions, rollback and environment separation must be documented before deployment. No AWS resources are currently claimed.
