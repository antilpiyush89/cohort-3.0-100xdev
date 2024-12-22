//x is explicitly mentioned as number, so it can only be assigned a number
let x:number=1
console.log(x)

//y is implicitly mentioned as any, so it can be assigned any type
let y:any=1
y='hello'
console.log(y)


//fn:()=>void is a function that takes no arguments and returns nothing
// i.e why i have given it greeting function which takes no arguements and returns nothing
function delayedGreeting(fn:()=>void){
  setTimeout(fn,1000)
}

function greeting(){
  console.log('Hello, World!')
}

delayedGreeting(greeting)


//I have explicitely mentioned the return type of sum with sum(a:number,b:number):number
//If return type is not given, it will be inferred from the return statement (as return statement is giving a number, the return type will be number)
function sum(a:number,b:number):number{
  return a+b
}


const greet = (name)=> `hello ${name}` //implicitely the name:any is inferred



// greet1 takes an object with name and age as properties
function greet1(user:{
  name:string,
  age:number
}){
  console.log(`Hello ${user.name}, you are ${user.age} years old`)
}

let user={
  name:'John',
  age:30
}

greet1(user)