const express=require("express")
const app=express();

// # Assignments on middleware

// Try these out yourself.

// 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
function reqlogger(req,res,next){
  console.log(req.url);
  console.log(req.method);
  console.log(new Date())
  next();
}

app.get("/logger",reqlogger,(req,res)=>{
  res.send("Request logged");
})


// 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
let reqCount=0;
function count(req,res,next){
  reqCount+=1;
  next();
}
app.get("/reqcount",count,(req,res)=>{
  res.send("Total number of request sent: " + reqCount);
})

app.listen(3000,()=>{
  console.log("listening on 3000 port")
})