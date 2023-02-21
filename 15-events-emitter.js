const EventEmitter = require('events');
const http = require('http');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} ${id} `);
});

customEmitter.on('response', () => {
  console.log(`some other logic `);
});

// before emiting ,first we must listen to event
customEmitter.emit('response', 'john', 34);

//
//

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);
