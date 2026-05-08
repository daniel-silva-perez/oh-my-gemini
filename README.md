# oh-my-gemini

Workflow and runtime layer for Gemini CLI. Persistent project state, reusable workflows, and tmux-backed team execution.

[![npm version](https://img.shields.io/npm/v/@danielsilvaperez/oh-my-gemini)](https://www.npmjs.com/package/@danielsilvaperez/oh-my-gemini)
[![CI](https://github.com/danielsilvaperez/oh-my-gemini/actions/workflows/ci.yml/badge.svg)](https://github.com/danielsilvaperez/oh-my-gemini/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/danielsilvaperez/oh-my-gemini/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org/)

---

## Features

- **Ralph loop execution** - Self-referential development loops that run until completion
- **Tmux-backed team orchestration** - Coordinate multiple agents in parallel tmux sessions
- **Persistent project state** - Workflows, plans, and memory survive across sessions
- **Gemini extension bundle** - Hooks, skills, and commands that extend the Gemini CLI
- **Deep interview workflows** - Socratic requirements gathering before autonomous execution
- **Heads-up display (HUD)** - Real-time status of running agents and modes
- **Explore mode** - Automated codebase research and context building

---

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed and authenticated
- [tmux](https://github.com/tmux/tmux) installed (required for team execution)

---

## Installation

```bash
npm install -g @danielsilvaperez/oh-my-gemini
```

---

## Quick Start

Run the setup command to initialize oh-my-gemini in your project:

```bash
omg setup
```

This creates the project structure, state directories, and default configuration.

---

## Usage

### Check your environment

```bash
omg doctor
```

Verifies that Node.js, Gemini CLI, and tmux are present and correctly configured.

### Run a Ralph loop

```bash
omg ralph "Implement user authentication with JWT"
```

Starts a self-referential execution loop that plans, codes, and verifies until the task is done.

### Spin up a team

```bash
omg team "Refactor the database layer"
```

Launches multiple agents in tmux panes, each with a focused sub-task, and coordinates their work.

### Deep interview before building

```bash
omg deep-interview
```

Runs a Socratic interview to crystallize requirements before any code is written.

### Plan a complex task

```bash
omg plan "Add OAuth2 login with Google and GitHub"
```

Generates a detailed execution plan, breaks it into steps, and persists it to the project state.

### Monitor active work

```bash
omg hud
```

Opens the heads-up display to see which agents are running, their current phase, and overall progress.

### Explore a codebase

```bash
omg explore
```

Automatically maps the codebase, identifies key files, and builds context for upcoming tasks.

---

## Architecture

The project is organized as a monorepo with three main packages:

- **`packages/core`** - Shared state management, configuration, and workflow primitives
- **`packages/cli`** - The `omg` command-line interface and user-facing commands
- **`packages/extension`** - Gemini CLI hooks, skills, and commands that bridge into the runtime

State is persisted under `.omg/` in the project root, including plans, session history, and agent memory.

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the code of conduct, development setup, and how to open pull requests.

---

## Security

If you discover a security issue, please follow the process described in [SECURITY.md](SECURITY.md). Do not open public issues for security vulnerabilities.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

Built on top of [Gemini CLI](https://github.com/google-gemini/gemini-cli), the official terminal interface for Google Gemini.
