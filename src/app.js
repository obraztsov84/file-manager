import process from 'process';
import os from 'os'
import * as rl from 'readline/promises';
import { showPath } from './commands/showPath.js';
import { main } from './main.js';
import { exit } from './commands/exit.js'; 


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

readUserLine.on("line", async data => await main(data, userName)
)

