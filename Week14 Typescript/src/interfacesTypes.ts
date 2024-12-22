// // How can you assign types to objects? For example, a user object that looks like this - 
// const Consumer:User = {
// 	firstName: "harkirat",
// 	lastName: "singh",
// 	email: "email@gmail.com",
// 	age: 21
// }

// // To assign a type to the user object, you can use interfaces
// // You can use interfaces to aggregate data types
// interface User {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	age: number;
// }







// // The problem with the above code is that the type of user is repeated twice.
// // We can avoid this by using interfaces
// function one(user:{
//   name:string,
//   age:number
// }){
//   console.log(`Hello ${user.name}, you are ${user.age} years old`)
// }


// let user1:{
//   name:string,
//   age:number
// }={
//   name:'John',
//   age:30
// }

// one(user1)



// //                                                        INTERFACES
// // The above problem can be solved by using interfaces
// // An interface is a way of defining a custom type in TypeScript
// // Type repeating can be avoided by using interfaces / You don't have to repeat the type definition again and again
// interface UserInterface{
//   name:string,
//   age:number
// }

// function two(user:UserInterface){
//   console.log(`Hello ${user.name}, you are ${user.age} years old`)
// }

// let user2:UserInterface={
//   name:'John',
//   age:30
// }

// // You can add two interfaces to create a new interface
// interface employee{
//   name:string,
//   startDate:Date
// }
// interface manager{
//   name:string,
//   department:string
// }

// let teamlead:employee & manager={  // Added two interfaces to create a new interface
//   name:'John',
//   startDate:new Date(),
//   department:'Engineering'
// }

// // // Using an interface within an interface
// // interface UserInterface1{
// //   name:string,
// //   age:number,
// //   address:{
// //     street:string,
// //     city:string,
// //     state:string,
// //     zipCode:string
// //   }
// // }

// // // I am repeating the address type again and again, I can avoid this by using an interface for the address itself
// // interface OfficeInterface1{
// //   name:string,
// //   startdate:Date,
// //   department:string,
// //   address:{
// //     street:string,
// //     city:string,
// //     state:string,
// //     zipCode:string
// //   }
// // }

// //Solution- Using an interface for the address itself

// interface address{
//   street:string,
//   city:string,
//   state:string,
//   zipCode:string
// }

// interface UserInterface1{
//   name:string,
//   age:number,
//   address:address
// }
// interface OfficeInterface1{
//   name:string,
//   startdate:Date,
//   department:string,
//   address:address
// }


// //                                                                         Types
// // Types are similar to interfaces but with some differences
// // Types can be used to define a custom type in TypeScript
// // Types are used to aggregate data types just like interfaces
// // Example of a type

// // Ex-1
// type Enduser ={
//   name:string,
//   age:number
// }
// let user3:Enduser={
//   name:'John',
//   age:30
// }

// //Ex-2
// // type can be used to club two types together or create a union data type
// Intersection (represented by & ) should have all the variables of both the types
// Example -
// type A = { name: string };
// type B = { age: number };
// type C = A & B; // C must have both `name` and `age`.

// const obj: C = {
//   name: "John",
//   age: 30,
// };

// //. Intersection, What if you want to create a type that has every property of multiple types/ interfaces

// type Employee={
//   name:string,
//   startDate:Date
// }
// type Manager ={
//   name:string,
//   department:string
// }
// type teamlead=Employee & Manager
// let newTeamlead:teamlead={
//   name:'John',
//   startDate:new Date(),
//   department:'Engineering'
// }



// // Ex-3 type can have a union of data types, type can be a string or a number
// Example of union 
// type A = { name: string };
// type B = { age: number };
// type C = A | B; // C can be of type A, type B, or both.

// const obj1: C = { name: "John" }; // Valid, satisfies type A
// const obj2: C = { age: 30 };      // Valid, satisfies type B
// const obj3: C = { name: "John", age: 30 }; // Valid, satisfies both A and B

//   // Union (represented by | ) can have either or all the variables of both the types
// //1. Unions Let’s say you want to print the id of a user, which can be a number or a string.
// type stringorNumber=string|number
// function printId(id:stringorNumber){
//   console.log(`ID is ${id}`)
// }

// //                                                                       ARRAY
// // Array in typescript - just add [] after the type
// // If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type
// // Example-1 
// // Given an array of positive integers as input, return the maximum value in the array


// function maxValue(arr:number[]){
//   let max:number=0
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i]
//     }
//   }
//   return max
// }

// console.log(maxValue([1,2,345,5,6]))

// // Array, Example-2
// // Given a list of users, filter out the users that are legal (greater than 18 years of age)
// type Target={
//   name:string,
//   age:number,
//   location:string
// }
// let users:Target[]=[{
//   name:'John',
//   age:30,
//   location:'New York'
// },{
//   name:'Jane',
//   age:17,
//   location:'San Francisco'
// },{
//   name:'Jack',
//   age:25,
//   location:'Los Angeles'
// }]

// function isLegal(checks:Target[]){
//   console.log(checks.filter(x=>x.age>18)) // Automatically filters out the users that are legal
// }
// isLegal(users)



//interface having a function as a key
// interface People{
//   name:string,
//   age:number,
//   greet : ()=> string
// }                                                               

// let person:People={
//   name:'John',
//   age:30,
//   greet:()=> 'Hello, World!'
// }

// console.log(person.greet())



type user ={ name: string}; 

// Interview Questions- diff between types and interfaces, types can have union and intersection, interfaces cannot have union and intersection

// The main difference between types and interfaces is that interfaces can be implemented by classes, while types cannot.
// //Implementing interfaces
// // Interfaces have another special property. You can implement interfaces as a class.

// interface person{
//   name:string,
//   age:number
// }


// // Brief explaination of classes in typescript
// // manager is a class which implements the person interface 
// class Manager implements person{
//   name:string //this name and age are attached to manager class
//   age:number
//   constructor(n:string,a:number){ // when someone write const manager= new Manager('John',30), it means he is creating a new object of manager class and passing the name and age to the constructor, then the constructor is called and the name and age are assigned to the object( now this.name=n becomes manager.name=n and this.age=a becomes manager.age=a) hence manager.name='John' and manager.age=30
//     this.name=n
//     this.age=a
//   }
// }



// interface User{
//   name:string,
//   age:number,
//   isLegal:()=>boolean
// }

// class Legality implements User{
//   name:string
//   age:number
//   constructor(n:string,a:number){ // constructor constructs variable which are kind of global variables for the class
//     this.name=n
//     this.age=a
//   }
//   isLegal(){
//     return this.age>18
//   }
// }

// // checks the legality using the isLegal function
// const user1 = new Legality ('Piyush',19)
// console.log(user1.isLegal())









// Difference between abstract classes and interfaces (implementing interfaces using classes) 
// If you see abstract classes and (implementing interfaces using classes) they really look alike, but there are some differences between them
// Abstract classes can have implementation details while interfaces cannot (means abstract classes can have default value like hello(){ return 'Hello, World!'} while interfaces can only have hello():string)
// class employee extends User means that the employee can enjoy the properties of the User class like its functions and variables, it simply means extending the class User

// Abstract classes can have abstract methods, while interfaces cannot

//1
abstract class User{
  name:string
  constructor(n:string){
    this.name=n
  }
  abstract greet():string
  hello(){
    return 'Hello, World!'
  }
}

//2
class Employee extends User{
  name:string
  constructor(n:string){
    super(n)
    this.name=n
  }
  greet(){ return"Hi"+this.name;}
}


// 1 and 2 are exactly the same, but the key difference is that the User class is an abstract class, while the Employee class is a normal class that extends the User class, one is a abstract class and the other is an implementing class (class that implements the abstract class)
const user1=new Employee("John")
console.log(user1.name)
console.log(user1.greet())
console.log(user1.hello())



// An example for understanding that hello has a strict type of x and y which are numbers
// intermediataryPoint have x and y as numbers, but also have name and work as strings
// point is of type hello which has x and y as numbers, but intermediataryPoint has name and work as strings
// Typescript allows it 

// TypeScript performs structural typing (also known as "duck typing"). This means:
// When you assign intermediataryPoint to point, TypeScript only checks if intermediataryPoint has the required properties (x and y) of type hello. It does not care about extra properties like name and work during assignment.
// However, if you tried to directly assign an object literal with extra properties to point, TypeScript would throw an error due to excess property checks:

type hello={
  x:number,
  y:number
}

// Correct code
// const intermediataryPoint = {x:1,y:2,name:"Hello",work:"World"}
// let point:hello = intermediataryPoint

// Incorrect code
// let point:hello = {x:1,y:2,name:"Hello",work:"World"}