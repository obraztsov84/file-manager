import { ls } from './commands/ls.js'
import { up } from './commands/up.js';
import { showPath } from './commands/showPath.js';
import { exit } from './commands/exit.js'; 
import { cd } from './commands/cd.js';
import { system } from './commands/system.js';
import { hash } from './commands/hash.js';
import { cat } from './commands/cat.js';
import { MESSAGES } from './constants/messages.js';

export const main = async (data, name) => {
  data = data && data.trim()
  if (data === '') {
    showPath()
    return 
  }
  if ( data.match(/^ls$/) ) {
    await ls()
    return
  }
  if ( data.match(/^cd$/) ||  data.match(/^up$/) ) {
    up()
    return
  }
  if ( data.match(/^cd\s.+$/) ) {
    const newData = data.replace(/cd\s/, '').trim()
    await cd(newData)
    return
  }
  if (data.match(/^os$/)) {
    console.log(MESSAGES.HELP_OS)
    return
  }
  if ( data.match(/^os\s--.+$/) ) {
    const newData = data.replace(/os\s--/, '')
    system(newData)
    return
  }  
  if (data.match(/^exit\s.+$/) || data.match(/^exit$/)) {
    exit(name)
  }
  if ( data.match(/^hash\s.+$/) ) {
    const newData = data.replace(/hash\s/, '')
    await hash(newData)
    return
  }
  if ( data.match(/^cat\s.+$/) ) {
    const newData = data.replace(/cat\s/, '')
    await cat(newData)
    return
  }
  console.log(MESSAGES.TRY_AGAIN)
  showPath()
}