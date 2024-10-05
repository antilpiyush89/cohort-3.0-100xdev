const express=require('express')// importing the entire express object
const app=express();
app.use(express.json())
const {AdminRoute}=require("./routes/admin.js")
const {UserRoute}=require("./routes/user.js")
const {CourseRoute}=require("./routes/course.js")
require('dotenv').config() // 0 dependencies module, is good bcz agar zada dependencies hoti toh any security vulnerabilities to those dependencies could have could issues to dotenv, hence the entire url or passwords could have been accessed, which can cause major issues to companies


// Customer trying to buy a course
app.use("/user",UserRoute)
app.use("/user",UserRoute)
//Courses, //Authenticated EP's
app.use("/user",CourseRoute)
app.use("/user",CourseRoute)
app.use("/user",CourseRoute)

//Admin Routers, Seller Routes, //Authenticated EP's
app.use("/admin",AdminRoute)
app.use("/admin",AdminRoute)
app.use("/admin",AdminRoute)
app.use("/admin",AdminRoute)
app.use("/admin",AdminRoute)
app.use("/admin",AdminRoute)


app.listen(3000)