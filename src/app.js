import process from 'process';
import os from 'os'
import * as rl from 'readline/promises';
import { ls } from './commands/ls.js'
import { up } from './commands/up.js';
import { showPath } from './commands/showPath.js';
import { exit } from './commands/exit.js'; 
import { cd } from './commands/cd.js';
import { system } from './commands/system.js';
import { hash } from './commands/hash.js';


const userPath = os.homedir()
const userName = process.argv.slice(2).join('').replace(/--\w*=/, '') || "Anonymous"
const readUserLine = rl.createInterface({input: process.stdin, out: process.stdout})


//Hello!
console.log(`Welcome to the File Manager, ${userName}!`)
//Show where am I now
showPath(userPath);

process.on('SIGINT', () => {exit(userName)})
process.on('SIGTERM', () => exit(userName))
process.on('SIGQUIT', () => exit(userName))
process.on('SIGKILL', () => exit(userName))

readUserLine.on('error', err => console.error(err));

readUserLine.on("line", async (data) => {
  if (data === '') {
    showPath()
    return 
  }

  if ( data.trim().match(/^ls$/) ) {
    await ls()
    return
  }

  if ( data.trim().match(/^cd$/) ||  data.trim().match(/^up$/) ) {
    up()
    return
  }
  if ( data.match(/^cd\s.+$/) ) {
    const newData = data.replace(/cd\s/, '').trim()
    await cd(newData)
    return
  }
  if (data.trim().match(/^os$/)) {
    console.log('You can pass arguments --eol, cpus, username, architecture, i can handle only one at a time')
    return
  }

  if ( data.match(/^os\s--.+$/) ) {
    const newData = data.replace(/os\s--/, '')
    system(newData)
    return
  }  

  if (data.match(/^exit\s.+$/) || data.trim().match(/^exit$/)) {
    exit(userName)
  }
  if ( data.match(/^hash\s.+$/) ) {
    const newData = data.replace(/hash\s/, '')
    await hash(newData)
    return
  }
  showPath()
})

// exit(userName)


