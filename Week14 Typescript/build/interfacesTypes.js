"use strict";
class User {
    constructor(n) {
        this.name = n;
    }
    hello() {
        return 'Hello, World!';
    }
}
class Employee extends User {
    constructor(n) {
        super(n);
        this.name = n;
    }
    greet() { return "Hi" + this.name; }
}
const user1 = new Employee("John");
console.log(user1.name);
console.log(user1.greet());
console.log(user1.hello());
