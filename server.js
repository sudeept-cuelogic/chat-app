var dot = require('dotenv').config();
var http = require('http');
var io = require('socket.io')(server);
var fs = require('fs');

var server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end(`Internal server error ${err}`);
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  })
})

server.listen(process.env.SERVER_PORT);

var handler = (req, res) => {
  fs.readFile(__dirname + 'index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Something went wrong while starting a server');
    } else {
      res.writeHead(200);
      re.end(data);
    }
  })
}
console.log('Server started at localhost:3000');

