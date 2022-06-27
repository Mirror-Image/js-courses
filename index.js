function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function() {
  console.log(`${this.name} is talking`);
}

Person.prototype.walk = function() {
  console.log(`${this.name} is walking`);
}

// console.dir(Person);

function Employee(position, ...args) {
  Person.apply(this, args);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.walk = function() {
  console.log('Employee is walking');
}

Employee.prototype.constructor = Employee;

// console.dir(Employee);

const james = new Employee('developer', 'James', 25);


// console.log(james);
james.walk();
james.talk();
console.log(Object.getPrototypeOf(james) === Employee.prototype); // true

console.log(james.__proto__ === Employee.prototype); // true
console.log(james.__proto__.__proto__ === Person.prototype); // true
console.log(james.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log(james.__proto__.__proto__.__proto__.__proto__ === null); // true