import crypto from 'crypto';
import fs from 'fs/promises';
import { getOnePath } from '../helpers/getOnePath.js';
import { checkPath } from '../helpers/checkPath.js';
import { showPath } from './showPath.js';
import { MESSAGES } from '../constants/messages.js';


export const hash = async (file) => {
  const hash = crypto.createHash('sha256');
  // console.log('file === ', file)
  try {
    const path = getOnePath(file)
    // console.log('path === ', path)
    const isPathValid = await checkPath(path)
    // console.log('path === ', path)
    if (isPathValid) {
      const data = await fs.readFile(path);
      hash.update(data);
      console.log(`Hash for ${file} is ${hash.copy().digest('hex')}`);
    } else {
      console.log(MESSAGES.FAILED_OPERATION)
      showPath();
    }
  } catch(err) {
    console.log(MESSAGES.INVALID_INPUT)
    showPath();
  }
}