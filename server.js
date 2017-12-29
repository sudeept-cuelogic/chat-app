var dot = require('dotenv').config();
var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.SERVER_PORT, function() {
  console.log(`Server started at localhost:${http.address().port}`);
});

io.on('connection', (socket) => {
  socket.on('send_msg', function(msg) {
    io.emit('send_msg', msg);
  })
});

