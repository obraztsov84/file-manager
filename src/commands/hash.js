import crypto from 'crypto';
import fs from 'fs/promises';
import { getOnePath } from '../helpers/getOnePath.js';
import { checkPath } from '../helpers/checkPath.js';
import { showPath } from './showPath.js';
import { MESSAGES } from '../constants/messages.js';
import { checkFile } from '../helpers/checkFile.js';


export const hash = async (file) => {
  const hash = crypto.createHash('sha256');
  // console.log('file === ', file)
  try {
    const checkedFile = await checkFile(file)
    if (checkedFile) {
      const data = await fs.readFile(checkedFile);
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