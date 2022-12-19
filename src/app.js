import { stdin, stdout, exit } from 'process';
import { homedir } from 'os'
import * as rl from 'readline/promises';


const userPath = homedir()
const userName = process.argv.slice(2).join('').replace(/--\w*=/, '') || "Anonymous"
const readUserLine = rl.createInterface({input: stdin, out: stdout})

console.log(userPath)
console.log(userName)


console.log("end")
