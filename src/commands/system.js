import os from 'os';
import { MESSAGES } from '../constants/messages.js';

export const system = (arg) => {
  // console.log('args ============ ', arg)
  const validArgs = ['eol', 'EOL', 'homedir', 'cpu', 'cpus', 'username', 'architecture', '']
  if (arg ===  'eol' || arg ===  'EOL') console.log(JSON.stringify(os.EOL))
  if (arg === 'homedir') console.log(os.homedir())
  if (arg === 'cpus' || arg === 'cpu') console.log(`You have ${os.cpus()[0].model} CPU with ${os.cpus().length} cores, clocked at ${(os.cpus()[0].speed/1000).toFixed(1)} GHz`
  .replace(/\s\s/g, ' '))
  if (arg === 'username') console.log(`User name: ${os.userInfo().username}`)
  if (arg === 'architecture') console.log(`Architecture: ${os.arch()}`)
  if (!validArgs.some(item => item === arg)) console.log(MESSAGES.INVALID_INPUT)
  MESSAGES.SHOW_CURRENT_PATH()
}