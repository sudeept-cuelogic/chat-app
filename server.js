var http = require('http');
var dot = require('dotenv').config();

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end();
});

server.listen(process.env.SERVER_PORT);

console.log('Server started at localhost:3000');

