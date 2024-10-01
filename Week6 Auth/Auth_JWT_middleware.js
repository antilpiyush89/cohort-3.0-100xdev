const express=require('express')
const app=express();
const jwt=require("jsonwebtoken")
const JWT_SECRET="IloveNE";
app.use(express.json()) // parse data into json

//Authentication Middleware
function auth(req,res,next){
  const token=req.headers.token
  userdetails=jwt.verify(token,JWT_SECRET)
  next();
}


users=[] //Database
app.post('/signup',(req,res)=>{
  username=req.body.username;
  password=req.body.password;
  users.push({
    username:username,
    password:password
  })
  res.json({
    msg:"You have Signed Up"
  })
})

app.post('/signin',(req,res)=>{
  username=req.body.username;
  password=req.body.password;
  let foundUser=false;
  for(let i=0;i<users.length;i++){
    if(users[i].username==username && users[i].password==password){
      foundUser=true
      token=jwt.sign({username:users[i].username},JWT_SECRET);
    }
  }
  if(foundUser==false){
    res.json({
      msg:"Invalid Username or password"
    })
  }else{
    res.json({
      msg:"You are SignedIn",
      token:token
    })
  }

})

//Authenticated Endpoint(EP)
app.get("/me",auth,(req,res)=>{
  const data=users.find(ele=>ele.username==userdetails.username)
  res.json({
    username:data.username,
    password:data.password
  })

})

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/PUBLIC/FullstackAuth_Ass.html") // hosts the Frontend on the localhost:3000, Why?- bcz we don't wanna get into cors stuff, hence hosted backend and frontend on the same address
})

app.listen(3001);
