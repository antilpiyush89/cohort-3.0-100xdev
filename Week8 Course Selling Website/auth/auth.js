const jwt=require("jsonwebtoken")

function auth_middleware(JWT_PASSWORD){
  return function(req,res,next){
    const token=req.headers.token
    const authentication=jwt.verify(token,JWT_PASSWORD)
    if(authentication){
      req.userid=authentication.id
      next()
    }else{
      res.json({
        msg:"Authentication Failed"
      })
    }
  }

}


module.exports={auth_middleware}