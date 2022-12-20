
import fs from 'fs';
import os from 'os';
import { checkFile } from "../helpers/checkFile.js";
import { MESSAGES } from "../constants/messages.js";

export const cat = async (file) => {
  // console.log('file === ',file)
  try {
    const checkedFile = await checkFile(file)
    // console.log('checkedFile === ',checkedFile)
    
    if (checkedFile) {
      const readStream = fs.createReadStream(checkedFile, 'utf8');
  
      readStream.pipe(process.stdout, err => console.error(err))
      console.log(MESSAGES.START_OF_FILE)
      readStream.on('close', () => {
        process.stdout.write(os.EOL)
        MESSAGES.SHOW_CURRENT_PATH()
      })
      // console.log(MESSAGES.END_OF_FILE)
      return
    } 

    console.log(MESSAGES.FAILED_OPERATION)
    MESSAGES.SHOW_CURRENT_PATH()


  } catch {
    console.log(MESSAGES.INVALID_INPUT)
    MESSAGES.SHOW_CURRENT_PATH()
  }
}