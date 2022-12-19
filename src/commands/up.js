import path from 'path';
import { showPath } from './showPath.js';

export const up = () => {
  const canWeGofurther = !!process.cwd().split(path.sep)[1]
  const upper =  canWeGofurther ? process.cwd().split(path.sep).slice(0, -1).join(path.sep) : process.cwd()
  canWeGofurther ? console.log('Directory was changed') : console.log('You are on top level directory')
  showPath(upper + path.sep)
}