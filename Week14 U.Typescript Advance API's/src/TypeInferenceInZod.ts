//                                                           Type inference in ZOD
// Zod Schema only runs during runtime, which means when TS->JS the zod is present their, zod runs in the browser as js file runs in the browser
// Whereas the type we define in typescript only works during compilation and doesn't in the browser/runtime
// Hence to get the type of zod which runs during runtime, we use z.infer<typeof zodSchema>
// Why this type is important you ask?- Because the request body we get from the user needs to have a type, it can't be assigned anything, it can only be assigned the type of zodSchema  
import {optional, z} from "zod";
import express from "express"

const app = express() // Initializing an empty express application

const UserProfileSchema= z.object({
  name:z.string().min(1,{message:"Empty name cannot be provided"}),
  email:z.string().email({message:"invalid email provided"}),
  age:z.number().min(18,{message:"Age cannot be less than 18"}).optional()
})
app.put("/user",(req,res)=>{
  const {success}= UserProfileSchema.safeParse(req.body)
  type finalProfileType = z.infer<typeof UserProfileSchema> // It gets the type of UserProfileSchema
  const UpdatedBody:finalProfileType = req.body // to define the type of UpdatedBody we will use
  if(!success){
    res.status(411).json({})
    return
  }
  res.json({
    message:"User Profile Updated"
  })
})

app.listen(3000)