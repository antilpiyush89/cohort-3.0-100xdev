// Importing usermodel and todomodel from db,js
const {UserModel, TodoModel} = require("./db");
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://antilpiyush89:Jo1pD2ppHABN47Jt@cluster0.a5xgw.mongodb.net/todos-piyush-DB") //" cluster url/ database name, if not exist, it automatically creates one"
const express= require("express")
const app = express();
const jwt=require("jsonwebtoken")
const jwt_secret="ILoveNE";
app.use(express.json());


app.post("/signup", async function(req,res){
  const email=req.body.email;
  const password=req.body.password;
  const fullname=req.body.fullname;

  await UserModel.create({
    email:email,
    password:password,
    fullname:fullname  })

  res.status(200).json({
    msg:"You are signed up"
  })



})

app.post("/signin", async function(req,res){
  const email=req.body.email;
  const password=req.body.password;

  // finds the person with same email and password
  const response=await UserModel.findOne({
    email:email,
    password:password
  })

  if(response){
    const token = jwt.sign({
      id:response._id.toString() // had to convert into string bcz jwt.sign ki key mein bas string aa skti, naki pura json document
    },jwt_secret)
    res.json({
      msg:"You are signed In",
      token:token
    })
  }else{
    res.json({
      msg:"Unsuccessful SignIn"
    })
  }
})

// Auth EP
app.post("/todo",auth,async function(req,res){
  const userId=req.userID; // this userid is from the user collection itself
  const title=req.body.title;
  const done=req.body.done;

  await TodoModel.create({
    userId:userId,
    title:title,
    done:done
  })
  res.json({
    msg:"Todo created",
    userId:userId
  })
  
})

app.get("/getTodo",auth,async function(req,res){
  const userId=req.userID

  const data= await TodoModel.findOne({
    userId:userId
  })
  if(data){
    res.json({
      data
    })
  }else{
    res.json({
      msg:"No todos exist"
    })
  }

  
})

//Auth Middleware
function auth(req,res,next){
  const token=req.headers.token;
  const decodedData=jwt.verify(token,jwt_secret)// return the _id:"ObjectId("") in string format"
  if(decodedData){
    req.userID=decodedData.id // storing in req={"userID":decodedData.id}
    next()
  }else{
    res.json({
      msg:"Auth failed"
    })
  }

}

app.listen(3000);

