// Employee constructor
function Employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting;
Employee.prototype.greeting = function () {
  return `Good morning ${this.firstName} ${this.lastName} !`;
};

const emp1 = new Employee("Joel", "Miller");

// console.log(emp1);
console.log(emp1.greeting());

// Department Constructor
function Department(firstName, lastName, id, position) {
  Employee.call(this, firstName, lastName);
  this.id = id;
  this.position = position;
}

// Inherit the Employee protoype method
Department.prototype = Object.create(Employee.prototype);

// Make Department.protoype return department
Employee.prototype.constructor = Department;

// Create Department

const accounting = new Department(
  "Tommy",
  "Miller",
  "555-4321",
  "cost accountant"
);
const logistics = new Department(
  "Ellie",
  "Miller",
  "555-4320",
  "Stores Manager"
);
// console.log(accounting);

// Deaprtment greeting
Department.prototype.departmentGreeting = function () {
  return `Welcome to our company on your first day ${this.firstName} ${this.lastName} !`;
};
console.log(accounting.departmentGreeting());
console.log(logistics.departmentGreeting());
