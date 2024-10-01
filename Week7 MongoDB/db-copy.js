const mongoose=require('mongoose')
const schema=mongoose.Schema
const ObjectId=mongoose.ObjectId

const user_data= new schema({ // schema/structure named user_data is established
  email:{type:String,unique:true},
  password:String,
  fullname:String

})

const todo_data= new schema({ // schema/structure named todo_data is established
  userid:ObjectId, //like string, objectid is a data type
  desc:String,
  done:Boolean

})
user_data_model=mongoose.model('user_collection',user_data) // collection named user_collection is made
todo_data_model=mongoose.model('todo_collection',todo_data) // collection named todo_collection is made
module.exports={user_data_model,todo_data_model}