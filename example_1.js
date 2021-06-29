console.log(__dirname)
console.log(__filename)
process.exitCode = 1;
process.on('beforeExit', () => {
    console.log('beforeExit event');
  });

  process.on('exit', (code) => {
    console.log(`exit event with code: ${code}`);
  });

 // console.log(process.env);
 process.stdout.write('Hello, world.');
 console.log(process.argv);