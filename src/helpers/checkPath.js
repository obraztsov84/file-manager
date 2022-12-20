import fs from 'fs/promises';

export const checkPath = async(path) => {
  try { 
    await fs.access(path)
    return true
  } catch {
    console.log(`Directory ${path} does not exist`)
    return false
  }
}