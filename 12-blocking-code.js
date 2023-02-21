const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  }
  if (req.url === '/about') {
    // BLOCKING CODE !!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${i}`);
      }
    }
    res.end('About Page');
  }
  res.end('Error Page');
});

server.listen(5000, () => {
  console.log('Server succesfully started...');
});
