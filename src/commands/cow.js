export const cowSay = (text = 'Mooooooooooooooo') => {
  text = text.match(/^cowSay$/i) ? 'Mooooooooooooooooo' : text  
  const width = process.stdout.columns;
  // console.log(process.stdout.columns, 'x', process.stdout.rows)
  console.log(` ${'_'.repeat(Math.min(text.length + 2, width - 2))} `)
  console.log(`< ${text} >`)
  console.log(` ${'‾'.repeat(Math.min(text.length + 2, width - 2))} `)
  console.log('      \\   ^__^')
  console.log('       \\  (oo)\_______')
  console.log('          (__)\\ 0   0 )\\  *')
  console.log('              ||--0-w | \\/')
  console.log('              ||     ||')
}