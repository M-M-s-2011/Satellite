const fs = require('fs'); // built-in: file system
const {promisify} = require('util'); // built-in: helpful funcs
const path = require('path'); // built-in: better file paths

console.log('starting program...\n')

// regular fs.readFile uses CALLBACKS:
// fs.readFile(path.join(__dirname, '/words.txt'), 'utf-8', (err, data) => {
//   console.log(data);
// });

// "promisified" fs.readFile - return a Promise (not use callbacks);
const read = async () => { // async = WARNING: there is async code in here
  const readFileWithPromise = promisify(fs.readFile);
  let whatIsThis = await readFileWithPromise(path.join(__dirname, '/words.txt'), 'utf-8');
  // ^^^ wait for this line to finish
  // before executing this line vvvvv
  console.log('what am i???', whatIsThis);
}
read(); // execute `read` function.... move on

console.log('main program done!!!\n');
