const express=require("express");
const app=express();

app.use(express.json())

users=[]; // inmemory-database

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

//Token generator - random string generate karenge for a token
function generateToken(){
  options=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let token=""
  for(let i=0;i<=32;i++){
    token+=options[Math.floor(Math.random()*options.length)] //Math.random- generates a random number btw 0 and 1, floor removes the decimal part
    // eg- math.random=0.5*options.length=36=18, math.floor(18)=18, options[18]
    }
  return token
}

app.post("/signin",function(req,res){
  //Match user entered username, password from ur own inmemory users variable to signin
  const username=req.body.username
  const password=req.body.password
  let founduser=false
  for(let i=0;i<users.length;i++){
    if(users[i].username==username && users[i].password==password){
      founduser=true
      const token=generateToken()
      users[i].token=token
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
  let foundUser=false
  for(let i=0;i<users.length;i++){
    if(users[i].token==token){ //Authentication database mein ho rhi
      foundUser=true
      res.json({
        username:users[i].username,
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