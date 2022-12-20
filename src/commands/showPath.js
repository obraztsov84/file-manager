export const showPath = (path) => {
  path && process.chdir(path)
  console.log(`You are currently in ${process.cwd()}`);
}