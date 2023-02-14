const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
    //   res.write('Welcome to our home page');
    //   res.end();
  }
  if (req.url === '/about') {
    res.end('About page');
  }
  res.end(
    `<h1>Opps!</h1><p>Wr can't seem to find the page you are looking for</p><a href="/">back home</a>`
  );
});

server.listen(5000);
