# Security Policy

## Supported Versions

Only the latest released version of oh-my-gemini receives security updates.

| Version | Supported |
|---------|-----------|
| 0.0.0   | Yes       |
| < 0.0.0 | No        |

## Reporting a Vulnerability

If you discover a security issue, please report it privately. Do not open a public issue.

You can report vulnerabilities in one of two ways:

- **GitHub Private Vulnerability Reporting:** Use the [Security Advisories](https://github.com/danielsilvaperez/oh-my-gemini/security/advisories) page on this repository.
- **Email:** Send details to daniel@example.com with "oh-my-gemini Security" in the subject line.

Please include:
- A description of the vulnerability
- Steps to reproduce
- Affected versions
- Any suggested fixes or mitigations

## Response Timeline

We aim to acknowledge reports within 48 hours. After that, we will:

1. Confirm the issue and assess severity
2. Develop and test a fix
3. Release a patched version and publish a security advisory
4. Credit the reporter (unless they prefer anonymity)

## Disclosure Policy

We follow coordinated disclosure. We ask reporters to give us a reasonable amount of time to fix an issue before disclosing it publicly. Once a fix is released, we will publish a security advisory with full details.

## Security Best Practices for Users

- Keep your Node.js installation up to date
- Run `npm audit` regularly and address any reported vulnerabilities
- Review the source code and scripts before running them, especially when cloning from forks or pull requests
- Be cautious with API keys or credentials. Do not commit them to the repository
- Keep Gemini CLI and tmux updated to their latest stable versions
