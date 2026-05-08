# Contributing to oh-my-gemini

Thanks for your interest in contributing. This project is a workflow and runtime layer for Gemini CLI. We welcome bug reports, feature ideas, documentation improvements, and code contributions.

## Prerequisites

Before you start, make sure you have:

- Node.js 22 or later
- npm (comes with Node.js)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed
- tmux (required for team orchestration features)

## Development Setup

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/oh-my-gemini.git
   cd oh-my-gemini
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Verify everything works:
   ```bash
   npm test
   npm run typecheck
   ```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm test` | Run the test suite |
| `npm run typecheck` | Run TypeScript type checking (no emit) |
| `npm run dev` | Run the CLI in development mode via tsx |
| `npm run clean` | Remove the `dist/` directory |

## Code Style

This project uses TypeScript with strict mode enabled. A few guidelines:

- Follow the existing patterns in the codebase.
- Use ES modules (`import` / `export`).
- Keep functions focused and small.
- Add or update tests when you change behavior.
- Run `npm run typecheck` before submitting. It catches most issues.

## Pull Request Process

1. Create a branch for your changes.
2. Make your changes and add tests if needed.
3. Run `npm test` and `npm run typecheck` locally.
4. Commit with a clear message describing what changed and why.
5. Push to your fork and open a pull request against `main`.
6. Fill out the PR description. Link any related issues.

We review PRs as quickly as possible. Larger changes may take more time.

## Issue Guidelines

- Check existing issues before opening a new one.
- Use a clear title and description.
- Include steps to reproduce for bugs.
- Mention your Node.js version and operating system.
- For feature requests, explain the use case and expected behavior.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Questions?

Open a [GitHub Discussion](https://github.com/danielsilvaperez/oh-my-gemini/discussions) or an issue. We are happy to help.
