import { showPath } from "../commands/showPath.js"

export const MESSAGES = {
  'FAILED_OPERATION' : 'Failed operation',
  'INVALID_INPUT' : 'Invalid imput',
  'DIRECTORY_CHANGED': 'Directory was changed',
  'START_OF_FILE': '=== Start of file ===',
  'END_OF_FILE': '=== End of file ===',
  'HELP_OS': 'You can pass arguments --eol, cpus, username, architecture, i can handle only one at a time',
  'SHOW_CURRENT_PATH': () => showPath() 
}