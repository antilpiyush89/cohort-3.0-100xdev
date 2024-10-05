const { Module } = require("module")
const mongoose=require("mongoose")
const { string } = require("zod")
const schema=mongoose.Schema
const ObjectID= mongoose.ObjectId

//Users
const USERS= new schema({
  email:{type:String,unique:true},
  password:String,
  fullname:String
})

//ADMIN
const ADMINS= new schema({
  email:{type:String,unique:true},
  password:String,
  fullname:String
})

//  COURSE
const COURSES= new schema({
  admin_id:ObjectID, // course from which admin
  Course_Name:String,
  Price:String,
  Course_Content:String,
  teacher_name:String
})

const PURCHASED= new schema({
  user_id:ObjectID,
  course_id:ObjectID, //purchased by which user
  course_name:String
})

const USERMODEL=mongoose.model("USERS",USERS);
const ADMINMODEL=mongoose.model("ADMINS",ADMINS);
const COURSEMODEL=mongoose.model("COURSES",COURSES);
const PURCHASEDMODEL=mongoose.model("PURCHASES",PURCHASED);
module.exports={USERMODEL:USERMODEL,ADMINMODEL:ADMINMODEL,COURSEMODEL:COURSEMODEL,PURCHASEDMODEL:PURCHASEDMODEL}