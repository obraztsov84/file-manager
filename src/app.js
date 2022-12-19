console.log("start")

const startFileManager = async () => {
  const { createInterface } = await import('readline');
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

console.log("end")
