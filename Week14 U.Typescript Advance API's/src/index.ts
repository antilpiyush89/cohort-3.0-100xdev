// Basic shit
// type employee={
//   name:string,
//   age:number
// }
// type manager={
//   name:string,
//   age:number
// }

// function sumOfAge(e:employee,m:manager){
//   return e.age+m.age
// }

// let ans=sumOfAge({name:"Piyush",age:19},{name:"Sushant",age:20})
// console.log(ans)


// Advanced shit
// 1. Pick
// Pick allows u to create a new type by picking properties(set of keys) from an existing type
// Pick uses generics ( <> )

// type user ={
//   id:number,
//   name:string,
//   age:number,
//   email:string,
//   password:string
// }

// type UserWithoutEmailPassword = Pick<user,"id" |"name" | "age"> // in this type only id,name,age will be present



// 2. Partial
// Partial allows u to create another type from a type with each property set to optional
// Partial uses generics (<>)

// type user ={
//   id:number,
//   name:string,
//   age:number,
//   email:string,
//   password:string
// }
// type UserWithoutEmailPassword = Pick<user,"id" |"name" | "age">
// type UserWithoutEmailPasswordOptional = Partial<UserWithoutEmailPassword> // in this type only id,name,age set to optional
// type UserWithoutEmailPasswordOptional={
//   id?:number,
//   name?:string,
//   age?:number
// }


// 3. Readonly
// Readonly allows u to create another type from a type with each property set to readonly, these properties cannot be changed later after initialization
// Readonly uses generics (<>)

// type Config={
//   readonly endpoint:string,
//   readonly api:string
// }
// const value:Config={
//   endpoint:"/users",
//   api:"XRGWGWIEGWGB11244SADIBD"
// }

// If u don't wanna write readonly again and again, u can write it next to the type
// type Config={
//    endpoint:string,
//    api:string
// }
// const value:Readonly<Config>={ //here
//   endpoint:"/users",
//   api:"XRGWGWIEGWGB11244SADIBD"
// }


// value.endpoint="users" // error as endpoint is readonly


// 4. Record
// Their are two ways to assign a type withing a type
// Their are two ways to assign a type within an object

// type user ={
//   name:string,
//   age:number
// }
// type NewUser={[key:string]:user} // basically defining a type for a key within an object of type user
// const Consumer:NewUser={
//   'abcd':{name:"Piyush",age:19},
//   'efgh':{name:"Sushant",age:20}
// }

// Alternative to type NewUser={[key:string]:user} is Record
// type user ={
//   name:string,
//   age:number
// }
// type NewUser=Record<string,user> // Works the same way
// const Consumer:NewUser={
//   'abcd':{name:"Piyush",age:19},
//   'efgh':{name:"Sushant",age:20}
// }

// Another Alternative to defining types for object can be maps
// type user ={
//   name:string,
//   age:number
// }
// // Initializing a empty map - imagine an empty set being created
// const Consumer = new Map<string,user>()

// // Assigning/setting values within a map - now we put values in the set
// Consumer.set("abcd",{name:"Piyush",age:19})
// Consumer.set("efgh",{name:"Sushant",age:20})

// //getting the values from a map - now we get values from the set
// Consumer.get("abcd") // result- {name:"Piyush",age:19}


// 5. Exclude - exclude let's u exclude a type from another type

// ex-1
// type Event1="scroll"|"click"|"mouseover";
// type ExcludeEvent=Exclude<Event1,"mouseover">
// const eventHandler =(event:ExcludeEvent)=>{
//   console.log(`handling event ${event}`)
// }

// console.log(eventHandler("scroll"))

// ex-2
// type Event1="scroll"|"click"|"mouseover";
// type ExcludeEvent=Exclude<Event1,"mouseover">
// const eventHandler =(event:ExcludeEvent)=>{
//   console.log(`handling event ${event}`)
// }

// console.log(eventHandler("mouseover")) // error as mouseover is excluded
// compiler will throw an error as mouseover is excluded, it will not even compile