const { readFile, writeFile } = require('fs').promises;
// change readFile function to function type that returns promise
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//

const start = async () => {
  try {
    // const result = await getText('./content/first.txt');
    // const result2 = await getText('./content/second.txt');
    const result = await readFile('./content/first.txt', 'utf8');
    const result2 = await readFile('./content/second.txt', 'utf8');
    await writeFile('./content/result-sync.txt', `${result}${result2}`);
    console.log(result, result2);
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
