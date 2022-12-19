import { getOnePath } from '../helpers/getOnePath.js';
import { checkPath } from '../helpers/checkPath.js';
import { MESSAGES } from '../constants/messages.js';
import { showPath } from './showPath.js';

export const cd = async (data) => {
  try {
    const path = getOnePath(data)
    const isExistDir = await checkPath(path)

    if (isExistDir) {
      console.log(MESSAGES.DIRECTORY_CHANGED)
      showPath(path);
      return
    } 

    console.log(MESSAGES.FAILED_OPERATION)
    showPath();

  } catch  {
    console.log(MESSAGES.INVALID_INPUT)
    showPath();
  }
  
}