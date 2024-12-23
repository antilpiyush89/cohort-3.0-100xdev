
import mongoose, { Schema,Model, model, Types } from "mongoose"
import { array } from "zod"
const url ="mongodb+srv://antilpiyush89:Jo1pD2ppHABN47Jt@cluster0.a5xgw.mongodb.net/MindVault" // URL is considered to be string | undefined, typescript is not sure that if URL exist in .env file or not, i.e we use as string here
mongoose.connect(url)

// 1. USER SCHEMA
const UserSchema=new Schema({
  username:{type: String, unique:true},
  password:String
})

// 2. CONTENT SCHEMA
const ContentType = ['image','audio','video','article']
const ContentSchema= new Schema({
  contentID:{type:String,required:true},
  title:{type:String,required:true},
  type:{type:String,enum:ContentType,required:true},
  link:{type:String,required:true},
  tag:{type:Types.ObjectId,ref:'tags'},
  userId:{type:Types.ObjectId,ref:"user"}
})

const TagsSchema= new Schema({
  title:{type:array,required:true},
  userId:{type:Types.ObjectId,ref:"user"}
})

export const UserModel = model("user",UserSchema)
export const ContentModel = model("content",ContentSchema)
export const TagModel = model("tags",TagsSchema)