var dot = require('dotenv').config();
var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http);

var db = require('./database.js');
var Employee = require('./employee.js')

var emp1 = Employee.new({firstName: 'Sudeep', lastName: 'Tarlekar'});
console.log('the full name is', emp1.getFullName())

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/employee', function(req, res) {
  console.log('serving employee')
  res.render(__dirname + '/employee.pug');
});

app.post('/employee/create', function(req, res) {
  console.log('req is ', req);
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('ok 200')
})

http.listen(process.env.SERVER_PORT, function() {
  console.log(`Server started at localhost:${http.address().port}`);
});

io.on('connection', (socket) => {
  socket.on('send_msg', function(msg) {
    io.emit('send_msg', msg);
  })
});

