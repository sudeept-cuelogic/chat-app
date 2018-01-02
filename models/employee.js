var database = require('../db/database.js')

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

employeeSchema.methods.setFirstName = function(firstName) {
  this.firstName = firstName;
}

employeeSchema.methods.setLastName = function(LastName) {
  this.lastName = lastName;
}

employeeSchema.methods.setUsername = function(username) {
  this.username = username;
}

employeeSchema.methods.setEmail = function(email) {
  this.email = email;
}

employeeSchema.methods.setPhone = function(phone) {
  this.phone = phone;
}

employeeSchema.methods.attr = function() {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    username: this.username,
    email: this.email,
    phone: this.phone
  }
}

employeeSchema.methods._saveSuccess = function() {
  console.log('Successfully saved', this.attr);
}

var Employee = database.mongoose.model('Employee', employeeSchema);

exports.Employee = Employee;

exports.new = function(args) {
  return new Employee(args);
};

exports.create = function(args) {
  new Employee(args).save(function(err, emp) {
    if (err) { console.log('Error occured while saving data', err) }
    emp._saveSuccess;
  });
}

exports.searchBy = function(args) {
  Employee.find(args, function(err, res) {
    if (err) { console.log('Error occured while searching', err) }
    console.log(res);
  })
}
