import path from 'path';
import fs from 'fs/promises';

// TODO make size of files visible

// const  fileSize = async (file) => {
//   const stat = await fs.stat(file)
//   const result = stat.result
//   return result.size
// }

export const ls = async () => {
  try {
    const list = await fs.readdir(process.cwd(), { withFileTypes: true});

    const table = list.map(item => 
      item.isFile() ? 
      {
        name: item.name, 
        ext: path.extname(item.name), 
        // size: fileSize(item),
        type: 'file'
      } : 
      {
        name: item.name, 
        ext: '', 
        // size: '', 
        type: 'dir'
      }).sort((a,b) => 
      a.type < b.type ? -1 : a.type > b.type ? 1 : 0
    ) 
      console.table(table, ['name', 'ext', 'type'])
  } catch (err) {
    console.error(err)
  }
  
}