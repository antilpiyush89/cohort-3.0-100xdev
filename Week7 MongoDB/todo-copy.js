const express=require('express');
const app=express();
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');
const { user_data_model, todo_data_model } = require('./db-copy');
const jwt_secret="IloveJaatni";
app.use(express.json());
mongoose.connect("mongodb+srv://antilpiyush89:Jo1pD2ppHABN47Jt@cluster0.a5xgw.mongodb.net/todos-copy-piyush-DB") //" cluster url/ database name, if not exist, it automatically creates one"



app.post("/signup",async function(req,res){
  const email=req.body.email
  const password=req.body.password
  const fullname=req.body.fullname

  await user_data_model.create({
    email:email,
    password:password,
    fullname:fullname
  })

  res.json({
    msg:"You have signed up"
  })
})

app.post("/signin",async function(req,res){
  const email=req.body.email
  const password=req.body.password

  const response=await user_data_model.findOne({
    email:email,
    password:password
  })

  if(response){
    const token=jwt.sign({
      id:response._id.toString() //as objectid is not a string so we convert it into a string
    },jwt_secret)
    res.json({
      msg:"You have signed in",
      token:token 
    })
  }else{
    res.json({
      msg:"Wrong credentials"
    })
  }

})

//Auth middleware
function auth(req,res,next){
  const token=req.headers.token
  const decodedData=jwt.verify(token,jwt_secret)
  if(decodedData){
    req.userid=decodedData.id
    next()

  }else{
    res.json({
      msg:"You are not allowed in the Authenticated EP"
    })
  }
  
}
app.post("/postTodo",auth,async function(req,res){
  const userid=req.userid
  const desc=req.body.desc
  const done=req.body.done
  await todo_data_model.create({
    userid:userid,
    desc:desc,
    done:done
  })

  res.json({
    msg:"Todo created"
  })
})

app.get("/getTodo",auth,async function(req,res){
  
  const data=await todo_data_model.findOne({
    userid:req.userid
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





app.listen(3000)