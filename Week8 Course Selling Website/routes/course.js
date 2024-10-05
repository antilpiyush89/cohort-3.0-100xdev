const {Router}=require("express")
const CourseRoute=Router()
const {COURSEMODEL,PURCHASEDMODEL}=require("../courseDB") //{keys}, this
const {auth_middleware}=require("../auth/auth")
const jwt=require("jsonwebtoken")
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD
const mongoose=require("mongoose") // importing the entire mongoose object
require('dotenv').config();
async function db_connect(){
  await mongoose.connect(process.env.MONGO_URL) //" cluster url/ database name, if not exist, it automatically creates one"
}
db_connect()


CourseRoute.get("/courses",auth_middleware(JWT_USER_PASSWORD),async function(req,res){
  try{
    const courses= await COURSEMODEL.find() // Fetches all the document inside the COURSES collection
    if(courses){
      res.status(200).json({
        msg:"Courses provided by us are- ",
        courses:courses
      })
    }
  }catch(error){
    res.status(500).json({
      msg:"Server Error"
    })
  }
  

})
CourseRoute.post("/PurchaseCourse",auth_middleware(JWT_USER_PASSWORD),async function(req,res){

  // Write these key variables in body =>
  //"course_id":
  try{
    const course_id = req.body.course_id
    const findCourse=await COURSEMODEL.findById(course_id) //finds the specific course document from its _id, _id is unique to every document
    const addtopurchase=await PURCHASEDMODEL.create({
      user_id:req.userid,
      course_id:findCourse._id,
      course_name:findCourse.Course_Name
    })
    if(findCourse && addtopurchase){
      res.status(200).json({
        msg:"Course Purchase is succesful",
      })
    }else{
      res.status(300).json({
        msg:"Course doesn't exist/ you entered wrong course id",
        
      })
    }
  }catch(error){
    console.log(error)
    res.status(500).json({
      msg:"Server Error"
    })
  }

})

CourseRoute.get("/getPurchasedCourses",auth_middleware(JWT_USER_PASSWORD),async function(req,res){
  try{
    const findpurchasedcourse=await PURCHASEDMODEL.find({
      user_id:req.userid
    })
    if(findpurchasedcourse){
      res.status(200).json({
        msg:"Here are the purchased Course",
        Purchased_Course:findpurchasedcourse
      })
    }else{
      res.status(300).json({
        msg:"You have not bought any courses"
      })
    }
  }catch(error){
    res.status(500).json({
      msg:"Server Error"
    })
  }

})

module.exports={CourseRoute:CourseRoute}