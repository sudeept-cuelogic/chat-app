var dot = require('dotenv').config();
var bodyParser = require('body-parser');
var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http);

var db = require('./db/database.js');
var Employee = require('./models/employee.js');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/employeeCreate', function(req, res) {
  Employee.create(req.body);
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end()
});

app.get('/employee', function(req, res) {
  console.log('serving employee')
  res.render(__dirname + '/views/employee.pug');
});

http.listen(process.env.SERVER_PORT, function() {
  console.log(`Server started at localhost:${http.address().port}`);
});

io.on('connection', (socket) => {
  socket.on('send_msg', function(msg) {
    io.emit('send_msg', msg);
  })
});
