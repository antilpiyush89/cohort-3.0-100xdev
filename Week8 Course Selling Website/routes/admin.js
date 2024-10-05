const {Router} =require("express") //express is an object, which contain many keys, so i just imported Router key from it, Router key is also an function
const AdminRoute=Router() // i assigned the Router function to the UserRouter, so UserRouter can use its functionalities
const {ADMINMODEL,COURSEMODEL}=require("../courseDB")
const {auth_middleware}=require("../auth/auth")
const {z}=require("zod")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require('dotenv').config();
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD //importing password from .env
const mongoose=require("mongoose") // importing the entire mongoose object

async function db_connect(){
  await mongoose.connect(process.env.MONGO_URL) //" cluster url/ database name, if not exist, it automatically creates one"
}
db_connect()


AdminRoute.post("/signup",async function(req,res){

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

  if(!parsedbody.success){
    netError=[]
    for(let i=0;i<parsedbody.error.issues.length;i++){
      netError.push(parsedbody.error.issues[i].message);
    }
    res.json({
      msg:"Incorrect format",
      error:netError,
      parsedbody:parsedbody.success
  })
  }

  try{
    //Storing data into variables
    // const email=req.body.email
    // const password=req.body.password
    // const fullname=req.body.fullname
    const {email,password,fullname}=req.body
    const hashedpassword=await bcrypt.hash(password,10)

    await ADMINMODEL.create({
      email:email,
      password:hashedpassword,
      fullname:fullname
    })

    res.status(200).json({
      msg:"You have signed Up"
    })


  }catch(error){
    console.log(error)
    res.status(500).json({
      msg:"Server Error"
    })
  }
})
AdminRoute.post("/signin",async function(req,res){

      // Write these key variables in body =>
      //"email":,"password":
      //Schema/Structure is defined of the request body
      const reqbody = z.object({
        email: z.string().email().max(30),
        password: z.string()
      })
    
      const parsedbody = reqbody.safeParse(req.body) // safeparse have [sucess:true/false, data and error?:never] //
    let netError = []
      if (!parsedbody.success) {
        
        for (let i = 0; i < parsedbody.error.issues.length; i++) {
          netError.push(parsedbody.error.issues[i].message);
        }
        res.json({
          msg: "Incorrect format",
          error: netError
        })
        return
      }
    
      try {
        //Storing data into variables
        // const email = req.body.email
        // const password = req.body.password
        const {email,password}=req.body
        const matchMail = await ADMINMODEL.findOne({
          email: email
        })
    
        if (!matchMail) {
          res.status(300).json({
            msg: "Incorrect Credentials"
          })
          return
        }
    
        const comparePassword = await bcrypt.compare(password, matchMail.password)
    
        if (comparePassword) {
          const token = jwt.sign({
            id: matchMail._id.toString()
          }, JWT_ADMIN_PASSWORD)
          res.status(200).json({
            msg: "You have Logged In",
            token: token
          })
        } else {
          res.status(300).json({
            msg: "Incorrect Credentials"
          })
        }
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg:"Server Error"
        })
      }
    })
AdminRoute.post("/CreateCourse",auth_middleware(JWT_ADMIN_PASSWORD),async function(req,res){
// Write these key variables in body =>
// "Course_Name":,"Price":,"Course_Content":
const reqbody=z.object({
  Course_Name:z.string().max(70),
  Price:z.number(),
  Course_Content:z.string()
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
  // const Course_Name=req.body.Course_Name
  // const Price=req.body.Price
  // const Course_Content=req.body.Course_Content
  const {Course_Name,Price,Course_Content}=req.body
  const teachername=await ADMINMODEL.findById(req.userid)
  console.log(teachername,req.userid) //showing null

  const create_course=await COURSEMODEL.create({
    admin_id:req.userid,
    Course_Name:Course_Name,
    Price:Price,
    Course_Content:Course_Content,
    teacher_name:teachername.fullname
  })
  if(create_course && teachername){
    res.status(200).json({
      msg:"Course Created :)",
      course_id:create_course
    })
    
  }else{
    res.status(200).json({
      msg:"Incorrect format entry"
    })
    
  }
}catch(error){
  console.error('Error occurred:', error);
  res.status(500).json({
    msg:"Server Error"
  })
  
}
})

AdminRoute.put("/DeleteCourse",auth_middleware(JWT_ADMIN_PASSWORD),async function(req,res){
// Write these key variables in body =>
// "course_id":
try{
  const course_id=req.body.course_id
  const deletion=await COURSEMODEL.deleteOne({_id:course_id})
  if(deletion){
    res.status(200).json({
      msg:"Course Deleted :)"
    })
  }else{
    res.status(200).json({
      msg:"Incorrect course id provided"
    })
  }
}catch(error){
  res.status(500).json({
    msg:"Server Error"
  })
}


})

AdminRoute.get("/GetAdminCourses",auth_middleware(JWT_ADMIN_PASSWORD),async function(req,res){
try{
  const AdminCourses=await COURSEMODEL.find({ //find(), finds all the document with same admin_id
    admin_id:req.userid
  })
  if(AdminCourses){
    res.status(200).json({
      AdminCourses:AdminCourses
    })
  }else{
    res.status(200).json({
      msg:"No courses found"
    })
  }
}catch(error){
  console.log(error)
  res.status(500).json({
    msg:"Server Error"
  })
}


})

AdminRoute.put("/AddCourseContent",auth_middleware(JWT_ADMIN_PASSWORD),async function(req,res){

// Write these key variables in body =>
// "UpdatedContent":,"course_id":
try{
  // const UpdatedContent=req.body.UpdatedContent
  // const course_id=req.body.course_id
  const {UpdatedContent,course_id}=req.body
  const updatecoursecontent=await COURSEMODEL.findOne({
    _id:course_id
  })

  //Update course_content key with updated content
  updatecoursecontent.Course_Content=UpdatedContent
  updatecoursecontent.save()

  if(updatecoursecontent){

    res.status(200).json({
      msg:"Content is updated",
      updated_course:updatecoursecontent

    })
  }else{
    res.status(200).json({
      msg:"No courses found"
    })
  }
}catch(error){
  res.status(500).json({
    msg:"Server Error"
  })
}
})

module.exports={
  AdminRoute:AdminRoute
}
