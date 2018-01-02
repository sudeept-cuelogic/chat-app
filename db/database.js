var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat_development');

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Error occured while connecting to database', err);
})

db.once('open', function() {
  console.log('we are now connected to database', db.db.s.databaseName);
})

module.exports.db = db;
module.exports.mongoose = mongoose;
