const express=require("express");

const app= express();

function sum(n){
  let total=0;
  for(let i=1;i<=n;i++){
    total+=i;
  }
  return total;
}

app.get("/",function(req,res){
  const n=req.query.n;
  const ans=sum(n);
  res.send("The sum is "+ ans);
})

app.listen(3001);
