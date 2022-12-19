import process from 'process';
import { homedir } from 'os'
import * as rl from 'readline/promises';
import {ls} from './commands/ls.js'


const userPath = homedir()
const userName = process.argv.slice(2).join('').replace(/--\w*=/, '') || "Anonymous"
const readUserLine = rl.createInterface({input: process.stdin, out: process.stdout})

console.log(`Welcome to the File Manager, ${userName}!`)

console.log(userPath)
console.log(userName)

readUserLine.on('SIGINT', () => {
  readUserLine.write(`Thank you for using File Manager, ${userName}, goodbye!`)
  process.exit()

})

readUserLine.on('error', err => console.error(err));

readUserLine.on("line", async (data) => {
  console.log(data)
  if ( data.trim().match(/^ls$/) ) {
    await ls()
    return
  }
})


// readUserLine.on('error', error => console.error(error));