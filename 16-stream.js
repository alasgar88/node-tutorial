var http = require('http');
var fs = require('fs');
// STREAMS is used to read or write sequentially

// Writeable
// Readable
// Duplex
// Transform

// create big file
// const { writeFileSync } = require('fs');

// for (let i = 0; i < 1000; i++) {
//   writeFileSync('./content/big-file.txt', `hello world ${i}\n`, { flag: 'a' });
// }

const { createReadStream } = require('fs');

// defult 64kb
const stream = createReadStream('./content/big-file.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

stream.on('close', (result) => {
  console.log('finished');
});

stream.on('data', (result) => {
  console.log(result);
});

//
// http example
http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big-file.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big-file.txt', 'utf8');
    fileStream.on('open', () => {
      // pipe method pusing from readstream to writestream
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
