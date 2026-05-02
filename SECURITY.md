# Security Policy

## Supported Versions

We support the latest `main` branch and the latest production deployment.

## Reporting a Vulnerability

Please do **not** open public issues for vulnerabilities.

Report privately via:
- GitHub Security Advisories (preferred)
- or direct contact with repository owner

Include:
- affected file/module
- reproduction steps
- impact assessment
- proposed mitigation (if available)

## Security Controls in this Repository

- PR auto-fix with lint/typecheck/build gates
- security guard workflow (`npm audit` + `ci:verify`)
- safe auto-merge workflow requiring label + approval + passing checks
- GitHub Pages deploy pipeline with deterministic build/deploy steps

## Hardening Recommendations

- enable branch protection for `main` with required checks
- require signed commits for maintainers
- enforce secret scanning and Dependabot alerts
