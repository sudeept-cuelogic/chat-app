var schema = require('./schema.js');
var database = require('./database.js')

var Employee = database.mongoose.model('Employee', schema.employeeSchema);

exports.Employee = Employee;

exports.new = function(args) {
  return new Employee(args);
};

exports.create = function(args) {

}
