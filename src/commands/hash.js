import fs from 'fs/promises';
import crypto from 'crypto';
import { checkFile } from '../helpers/checkFile.js';
import { MESSAGES } from '../constants/messages.js';


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
      MESSAGES.SHOW_CURRENT_PATH()
    }
  } catch(err) {
    console.log(MESSAGES.INVALID_INPUT)
    MESSAGES.SHOW_CURRENT_PATH()
  }
}