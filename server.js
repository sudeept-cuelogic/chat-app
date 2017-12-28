var dot = require('dotenv').config();
var server = require('http').createServer(handler);
var io = require('socket.io')(server);
var fs = require('fs');

function handler (req, res) {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end(`Internal server error ${err}`);
    }
    res.writeHead(200);
    res.end(data);
  });
};

server.listen(process.env.SERVER_PORT);

io.on('connection', (socket) => {
  socket.on('send_msg', function(msg) {
    console.log(msg);
  })
});

console.log('Server started at localhost:3000');
