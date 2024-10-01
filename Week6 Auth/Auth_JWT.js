const express=require("express");
const app=express();
const JWT_SECRET = "USER_APP";
const jwt=require("jsonwebtoken")
app.use(express.json())

users=[];

//user body mein username and password bhejega then ham usse users array mein push krdenge
app.post("/signup",function(req,res){
  const username=req.body.username
  const password=req.body.password
  users.push({
    username:username,
    password:password
  })

  res.json({
    message:"You are Signed Up"
  })
})



app.post("/signin",function(req,res){
  //Match user entered username, password from ur own inmemory users variable to signin
  const username=req.body.username
  const password=req.body.password
  let founduser=false
  
  for(let i=0;i<users.length;i++){
    if(users[i].username==username && users[i].password==password){
      founduser=true
      const token = jwt.sign({username: users[i].username}, JWT_SECRET); //jwt token created here
      res.json({
        message:"You are Signed In",
        token:token
      })

    }
  }
  if(founduser==false){
    res.status(404).json({
      message:"invalid username or password"
    })
  }

})

//Authenticated endpoint- we should get userinfo only if correct token is sent
app.get("/me",function(req,res){
  token=req.headers.token
  const userDetails = jwt.verify(token, JWT_SECRET); // Auth happens here // RETURNs userDetails={username:"antilpiyush89"}
  let foundUser=false
  //Check for username ka password from the database, then send using the json
  for(let i=0;i<users.length;i++){
    if(users[i].username===userDetails.username){
      foundUser=true
      
      res.json({
        username:userDetails.username,
        password:users[i].password
      })
    }
  }
  
  if(foundUser==false){
    res.json({
      message:'Wrong token'
    })
  }
})

app.listen(3000);