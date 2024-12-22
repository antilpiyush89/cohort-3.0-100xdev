"use strict";
let x = 1;
console.log(x);
let y = 1;
y = 'hello';
console.log(y);
function delayedGreeting(fn) {
    setTimeout(fn, 1000);
}
function greeting() {
    console.log('Hello, World!');
}
delayedGreeting(greeting);
function sum(a, b) {
    return a + b;
}
const greet = (name) => `hello ${name}`;
function greet1(user) {
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
}
let user = {
    name: 'John',
    age: 30
};
greet1(user);
