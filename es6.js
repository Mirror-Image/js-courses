class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`${this.name} is talking`);
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    jog() {
        this.walk();
        console.log(`${this.name} is jogging`);
    }

    work() {
        document.createElement()
        console.log(`${this.name} is working`);
    }
}

class Employee extends Person {
    #salary;
    
    constructor(position, name, age, salary) {
        super(name, age);
        this.position = position;
        this.#salary = salary;
    }

    talk() {
        super.talk();
        console.log(`Employee is talking`);
    }

    get getSalary() {
        return this.#salary;
    }

}

const mike = new Employee('qa', 'Mike', 27, 1000);

// console.log(mike);

// mike.jog();
// mike.talk();

console.log(mike.getSalary);

// console.log(Object.getPrototypeOf(mike) === Employee.prototype); // true

// console.log(mike.__proto__ === Employee.prototype); // true
// console.log(mike.__proto__.__proto__ === Person.prototype); // true
// console.log(mike.__proto__.__proto__.__proto__ === Object.prototype); // true
// console.log(mike.__proto__.__proto__.__proto__.__proto__ === null); // true