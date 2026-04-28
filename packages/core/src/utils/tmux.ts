import { runCommand } from './process.js';
import packageJson from '../../../../package.json' with { type: 'json' };

export interface TmuxHudOptions {
  sessionName?: string;
  user?: string;
  task?: string;
  mode?: string;
}

export async function setupTmuxHud(options: TmuxHudOptions): Promise<void> {
  const user = options.user || process.env.USER || 'operator';
  const version = packageJson.version;
  const statusLeft = `#[fg=cyan,bold][omg-${user}:${version}* `;
  const statusRight = `#[fg=white]"${options.task || 'no task'}" #[fg=yellow]%H:%M #[fg=green]%d-%b-%y`;

  const commands = [
    ['set-option', 'status-interval', '2'],
    ['set-option', 'status-style', 'bg=black,fg=white'],
    ['set-option', 'status-left', statusLeft],
    ['set-option', 'status-left-length', '40'],
    ['set-option', 'status-right', statusRight],
    ['set-option', 'status-right-length', '100'],
  ];

  for (const args of commands) {
    const finalArgs = options.sessionName ? [...args, '-t', options.sessionName] : args;
    await runCommand('tmux', finalArgs);
  }
}

export async function updateTmuxStatus(sessionName: string, task: string): Promise<void> {
  const statusRight = `#[fg=white]"${task}" #[fg=yellow]%H:%M #[fg=green]%d-%b-%y`;
  await runCommand('tmux', ['set-option', '-t', sessionName, 'status-right', statusRight]);
}
