const {Router}=require("express")
const UserRoute=Router()
const {USERMODEL}=require("../courseDB") //{keys}, this represent keys, //importing collections in database
const {z}=require("zod")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD
const mongoose=require("mongoose") // importing the entire mongoose object
require('dotenv').config();
  async function db_connect(){
    await mongoose.connect(process.env.MONGO_URL) //" cluster url/ database name, if not exist, it automatically creates one"
  }
  db_connect()
  // Customer trying to buy a course
UserRoute.post("/signup",async function(req,res){
  // Write these key variables in body =>
  //"email":,"password":,"fullname":

  //Schema/Structure is defined of the request body
  const reqbody=z.object({
    email:z.string().email().max(30),
    password:z.string().min(3).max(50)
    .refine((password)=>/[A-Z]/.test(password),{
      message:"Enter Atleast One capital Letter"
    })
    .refine((password)=>/[a-z]/.test(password),{
      message:"Enter Atleast One small Letter"
    })
    .refine((password)=>/[0-9]/.test(password),{
      message:"Enter Atleast One number"
    })
    .refine((password)=>/[!@#$%^&*]/.test(password),{
      message:"Enter Atleast One special symbol"
    }),
    fullname:z.string().max(50)
  })

  const parsedbody=reqbody.safeParse(req.body) // safeparse have [sucess:true/false, data and error?:never] //
  
  let netError=[]
  if(!parsedbody.success){
    for(let i=0;i<parsedbody.error.issues.length;i++){
      netError.push(parsedbody.error.issues[i].message);
    }
    res.json({
    msg:"Incorrect format",
    error:netError
  })
  return
  }

  try{
    //Storing data into variables
    // const email=req.body.email
    // const password=req.body.password
    // const fullname=req.body.fullname
    const {email,password,fullname}=req.body // 3 lines of code replaced with one line of code, similar to importing keys of req.body
    const hashedpassword=await bcrypt.hash(password,10)

    await USERMODEL.create({
      email:email,
      password:hashedpassword,
      fullname:fullname
    })

    res.status(200).json({
      msg:"You have signed Up"
    })


  }catch(error){
    console.log(hashedpassword)
    res.status(500).json({
      msg:"Server Error"
    })
    return
  }

})
UserRoute.post("/signin",async function(req,res){
    // Write these key variables in body =>
    //"email":,"password":

    //Schema/Structure is defined of the request body
    const reqbody=z.object({
      email:z.string().email().max(30),
      password:z.string()
    })
    const parsedbody=reqbody.safeParse(req.body) // safeparse have [sucess:true/false, data and error?:never] //
    let netError=[]
    if(!parsedbody.success){
      for(let i=0;i<parsedbody.error.issues.length;i++){
        netError.push(parsedbody.error.issues[i].message);
      }
    res.json({
      
      msg:"Incorrect format",
      error:netError
      
    })
    return
    }

    try{
      //Storing data into variables
      // const email=req.body.email
      // const password=req.body.password
      const {email,password}=req.body
      const matchMail=await USERMODEL.findOne({
        email:email
      })
      const comparePassword= await bcrypt.compare(password,matchMail.password)
      console.log(comparePassword,matchMail)
      if(matchMail && comparePassword){
        const token=jwt.sign({
          id:matchMail._id.toString()
        },JWT_USER_PASSWORD)
        res.status(200).json({
          msg:"You have Logged In",
          token:token
        })
      }else{
        res.status(300).json({
          msg:"Incorrect Credentials"
        })
      }
    }catch(error){
      console.log(error)
      res.status(500).json({
        msg:"Server Error"
      })
    }


  })

module.exports={UserRoute:UserRoute}





