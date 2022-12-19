import process from 'process';
import os from 'os'
import * as rl from 'readline/promises';
import {ls} from './commands/ls.js'
import { showPath } from './commands/showPath.js';


const userPath = os.homedir()
const userName = process.argv.slice(2).join('').replace(/--\w*=/, '') || "Anonymous"
const readUserLine = rl.createInterface({input: process.stdin, out: process.stdout})

//Hello!
console.log(`Welcome to the File Manager, ${userName}!`)
//Show where am I now
showPath(userPath);


readUserLine.on('SIGINT', exitHandler)
readUserLine.on('SIGTERM', exitHandler)
readUserLine.on('SIGQUIT', exitHandler)
readUserLine.on('SIGKILL', exitHandler)

readUserLine.on('error', err => console.error(err));

readUserLine.on("line", async (data) => {
  console.log(data)
  if ( data.trim().match(/^ls$/) ) {
    await ls()
    return
  }
  showPath(userPath)
})

//TODO take this out from app js
function exitHandler() {
  readUserLine.write(`Thank you for using File Manager, ${userName}, goodbye!`)
  process.exit()
} 
// readUserLine.on('error', error => console.error(error));