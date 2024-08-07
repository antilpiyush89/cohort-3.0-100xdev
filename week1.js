//Syntax of Javascript


//1. Variables
// let name = "John";     // Variable that can be reassigned
// const age = 30;        // Constant variable that cannot breassigned
// var isStudent = true;  // Older way to declare variables, function-scoped






//2. Data types
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

//3. Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator


//4.Function
// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"


//5. If/Else
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


//6. Loops
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j); // Outputs 0 to 4
  j++;
}


//Complex Types

// Objects
// An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.

let user = {
	name: "Harkirat",
	age: 19
}

console.log("Harkirats age is " + user.age);

//Arrays
//Arrays let you group data together
const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

//.filter() = creats a new array by filtering out elements


//Array of Objects
//We can have more complex objects, for example an array of objects

const userss = [{
  name: "Harkirat",
  age: 21
}, {
  name: "raman",
  age: 22
}
]

const users1 = userss[0] 
const users1Age = userss[0].age

//Object of Objects
//We can have an even more complex object (object of objects)


const user1 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;


