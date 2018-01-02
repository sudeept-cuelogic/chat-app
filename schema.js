var database = require('./database.js');

var employeeSchema = database.mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  phone: String
});

employeeSchema.methods.getFirstName = function() {
  return this.firstName
}

employeeSchema.methods.getLastName = function() {
  return this.lastName;
}

employeeSchema.methods.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

employeeSchema.methods.getUsername = function() {
  return this.username;
}

employeeSchema.methods.getEmail = function() {
  return this.email;
}

employeeSchema.methods.getPhone = function() {
  return this.phone;
}

exports.employeeSchema = employeeSchema;
