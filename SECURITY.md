# Security Policy

## Reporting vulnerabilities
Please do not open public issues for vulnerabilities. Report privately to repository maintainers.

## Security baseline
- `.env` must never be committed.
- Secrets must be stored in GitHub Actions Secrets.
- CI/CD workflows follow least-privilege permissions.
