import { checkFile } from '../helpers/checkFile.js';
import { showPath } from './showPath.js';
import { MESSAGES } from '../constants/messages.js';

export const cd = async (file) => {
  try {

    const checkedFile = await checkFile(file);

    if (checkedFile) {
      console.log(MESSAGES.DIRECTORY_CHANGED)
      showPath(checkedFile);
      return
    } 
    console.log(MESSAGES.FAILED_OPERATION)
    MESSAGES.SHOW_CURRENT_PATH()
  } catch  {
    console.log(MESSAGES.INVALID_INPUT)
    MESSAGES.SHOW_CURRENT_PATH()
  }
  
}