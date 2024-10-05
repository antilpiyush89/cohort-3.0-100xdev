const mongoose=require("mongoose")
const { string } = require("zod")
const schema=mongoose.Schema
const ObjectID= mongoose.ObjectId

const USER= new schema({
  
  email: {type:String, unique:true},
  password: String,
  fullname: String
})

const TODO= new schema({
  userId: ObjectID,
  title: String,
  done: Boolean
})

const UserModel = mongoose.model("users",USER) // users is the collection i made in mongodb collection
const TodoModel = mongoose.model("todos",TODO) // todos is the collection i made in mongodb collection

module.exports={
  UserModel,
  TodoModel
}