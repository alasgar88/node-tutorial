const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/first.txt', 'utf8');

console.log(first, second);

// if file does not exists creates otherwise updates
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first} ${second}`,
  { flag: 'a' }
);
