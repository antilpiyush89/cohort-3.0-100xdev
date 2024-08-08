//Variable
// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let color="black";
const height=177;
var like_pizza=true;
console.log(color);
console.log(height);
console.log(like_pizza);

//Function
//1. Write a function sum that finds the sum of two numbers. 
//Side quest - Try passing in a string instead of a number and see what happens?

function sum(num1,num2){
  return num1+num2;
}
let ans=sum(2,3);
console.log(ans);
let ans1=sum(2,"hello");
console.log(ans1);


//2. Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
  if (age >= 18) {
    return true;
  } else {
    return false;
  }

}
let age=19;
console.log(canVote(age));



//If-else
//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function check(num){
  if (num%2==0){
    console.log("The number is even");
  }
  else{
    console.log("The number is odd");
  }
}
let num=19;
check(num);

//Loops
//Write a function called sum that finds the sum from 1 to a number

function sum_nat(num){
  let total=0;
  for(let i=1;i<=num;i++){
    total=total+i;

  }
  return total;

}
console.log(sum_nat(4))

//Objects
//1. Write a function that takes a user as an input and greets them with their name and age

let user = {
  name:"Piyush",
  age:20

}

function greet(user){
  return "Konichiwa " + user.name + " your age is "+ user.age;

}
console.log(greet(user));


//2. Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user1={
  firstname:"Piyush",
  age:10,
  gender:"Male"
}
function great(user1){
  console.log("Hi " + user1.firstname + " your age is " + user1.age + " and your gender is " + user1.gender);
}

great(user1);

//3. Also tell the user if they are legal to vote or not

function great_vote(user1){
  console.log("Hi " + user1.firstname + " your age is " + user1.age + " and your gender is " + user1.gender);

  if (age >= 18) {
    return "you can vote";
  } else {
    return "you can not vote";
  }
}

console.log(great_vote(user1));

//Array
//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
arr=[1,2,3,4,5,6,7,8];
function even_array(arr){
  new_arr=[];
  for(let i=0;i<arr.length;i++){
    if (arr[i]%2==0){
      new_arr.push(arr[i]);
    }
  }
  console.log(new_arr)
}
even_array(arr);


//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
//.filter() = creats a new array by filtering out elements

let number=[1,2,3,4];
let even_num=number.filter(func);
function func(element){
  return element%2==0;
}
console.log(even_num);

// Array of Objects
//Write a function that takes an array of info as inputs and returns only the users who are more than 18 years old


let info=[{name:"Piyush",age:"19",genders:"male"},{name:"Harshit",age:"20",genders:"male"},{name:"Shreya",age:"15",genders:"female"},{name:"Eliza",age:"21",genders:"female"}]
function isVote(info){
  canVote_info=[]
  for(let i=0;i<info.length;i++){
    if (info[i].age>18){
      canVote_info.push(info[i]);
    }
  }
  return canVote_info;
}
console.log(isVote(info));

// Object of Objects
//Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male
// Why? - A object must always contain key value pair, as this is its definations, hence objects of objects can be made
let info_objects={
  user1:
  {name:"Piyush",age:"19",genders:"male"},
  user2:
  {name:"Harshit",age:"20",genders:"male"},
  user3:{name:"Shreya",age:"15",genders:"female"},
  user4:{name:"Eliza",age:"21",genders:"female"}
};

function check_condn(info_objects){

  for(let key in info_objects){
    if (info_objects[key].age>18 && info_objects[key].genders=="male"){
      return info_objects[key];
    }
  }

}
console.log(check_condn((info_objects)));



