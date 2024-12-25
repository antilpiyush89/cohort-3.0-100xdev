import express from "express"
import {string, z} from "zod"
import { ContentModel, UserModel,TagModel } from "./database";
import { HashPasswordGenerator, HashPasswordMatcher } from "./Middleware";
const JWT_SECRET= "SOULSOCIETY"
import jwt, { JwtPayload } from "jsonwebtoken";
import { Authentication } from "./Middleware";
import mongoose from "mongoose";
import { NewContentInContentandTagTable } from "./Middleware";
const app = express(); // Initializing an empty express application
app.use(express.json()) // As the user is sending the body in json, hence app.use is used to parse the body




// Signup route handler
app.post("/api/v1/signup",async (req,res)=>{

  // TODO: Add zod validation and hash ur password - DONE
  //1. Zod validation
  const UserZodSchema = z.object({
    username:z.string().min(3,{message:"Username cannot be less than 3 characters"}).max(20,{message:"Username cannot more than 20 characters"}),
    password:z.string().min(6,{message:"Min 6 characters required"})
    .refine((password)=>/[A-Z]/.test(password),{message:"Atleast one capital letter required"})
    .refine((password)=>/[a-z]/.test(password),{message:"Atleast one small letter required"})
    .refine((password)=>/[0-9]/.test(password),{message:"Atleast one number required"})
    .refine((password)=>/[!@#$%^&*]/.test(password),{message:"Atleast special symbol required"})
  })

    const {success,error}= UserZodSchema.safeParse(req.body) // Checks for zod validation, UserZodSchema.safeParse contain - {SUCCESS, DATA, ERROR}

    try{
      if (success){
          const username=req.body.username
          const password=req.body.password
          const hashedPassword= await HashPasswordGenerator(password)
          await UserModel.create({
            username:username,
            password:hashedPassword
          })
          res.status(200).json({
            message:"User SignedUp"
          })
      }else{
        const netError=[]
        for (let i=0;i<error.issues.length;i++){
          netError.push(error.issues[i].message)
        }
        res.status(411).json({
          zoderror:"ZOD Validation Error",
          message:netError,
        })
      }
    }catch(error){
      console.log(error)
      res.status(413).json({
        MongoDBError:"MongoDB Error as I have set username:{type: String, unique: true} in UserSchema, Database Error",
        message:"User Already Exist"
      })
    }

  
})

// SignIn route handler
app.post("/api/v1/signin", async (req,res)=>{
  // Try runs normal code and catch catches error that might happen in try and most probably they are databases error
  try{
    const username= req.body.username
    const password = req.body.password
    const userFound = await UserModel.findOne({
      username:username
    })
    if(!userFound || !userFound?.password) {
      // Checks if userFound is null or undefined and same for password field, this make sures even if the userFound has some value, it still checks if the password is null or undefined/ empty password field
      res.status(404).json({
        message:"User doesn't exist or password field is empty"
      })
    }else{
      const isMatch= await HashPasswordMatcher(password,userFound.password)
      if(isMatch){
        const token = jwt.sign({username:userFound.username},JWT_SECRET)

        res.status(200).json({
          message:"Login Successful",
          TOKEN:token
        })
      }else{
        res.status(401).json({
          message:"Invalid Credentials"
        })
      }
    }
  }catch(e){
    res.status(500).json({
      message:"Internal server error",
      error:e
    })
  }
})

app.post("/api/v1/content",Authentication,async (req,res)=>{
  try{
    const title= req.body.title
    const type = req.body.type
    const link = req.body.link
    // In typescript type of req.user is not particularly defined so we defined it by saying treat req.user as jwt.JwtPayload, treat it as a JwtPayload and then the req.user may have null(empty value) or can be undefined(that its variable is declared but not initialised with any value ex- let x, then console.log(x), it will return undefined or function foo(){ } console.log(foo()). it will return undefined 
    // the ? represent that it may have null|undefined basically setting it as optional
    // then accessing the property of jwtPayload which is username
    // if req.user as string, we say it has a string type
    const username=  (req.user as jwt.JwtPayload)?.username
    const TagName = req.body.tags
    console.log("User: ",username)
    // const User = await UserModel.findOne({username:username})

    // User can be possibly be null, so you have to handle it
    // if(User) means if user is not null
    // For database error it would go in catch(e)
    // if(User){
    //   await TagModel.create({
    //     title:tags,
    //     userId:User._id
    //   })
    //   await ContentModel.create({
    //     userId:User._id,
    //     title:title,
    //     type:type,
    //     link:link,
    //   })
    //   res.status(200).json({
    //     msg:"Content added successfully"
    //   })
    // I have added try and catch in the below function, so this function can throw an error if something goes wrong, and the code execution flow will goes to the below  catch
    await NewContentInContentandTagTable(username,title,type,link,TagName) // Bcz it is an async function, need to await it to check if their is successfull resolution of promise
    res.status(200).json({
      msg:"Content Added sucessfully"
    })
    // }else{
    //   //If User is null it would go here, 404 not found in Database
    //   res.status(404).json({
    //     msg:"User doesn't exist, 404 not found"
    //   })
    // }

  }catch(e){
    res.status(500).json({
      msg:"Internal Server Error",
      err: e
    })
  }

  

  
})
app.get("/api/v1/content",Authentication,async(req,res) =>{
  try{
    const user = ( req.user as jwt.JwtPayload)?.username
    const UserTable =  await UserModel.findOne({username:user})
      const ContentTable = await ContentModel.findOne({userId:UserTable?._id}) // this ? is for optional cases for what if UserTable if null | undefined what if couldn't find user with username:user
      const TagsTable = await TagModel.findOne({userId:UserTable?._id})
      res.status(200).json({
        msg:"Content Fetched Successfully",
        title:ContentTable?.title,
        type:ContentTable?.type,
        link:ContentTable?.link,
        tags:TagsTable?.TagName
      })
    }catch(e){
      res.status(500).json({
        msg:"Internal Server Error",
        error:e
      })
    }

})

app.delete("/api/v1/content",Authentication,(req,res)=>{
  
})
app.post("/api/brain/share",Authentication,(req,res)=>{
  
})
app.get("/api/brain/:sharelink",Authentication,(req,res)=>{
  
})

app.listen(3000)