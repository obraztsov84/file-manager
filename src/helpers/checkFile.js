import { checkPath } from "./checkPath.js";
import { getOnePath } from "./getOnePath.js";

export const checkFile = async (file) => {
  const path = getOnePath(file)
  const isPathValid = await checkPath(path)
  return isPathValid && path
}