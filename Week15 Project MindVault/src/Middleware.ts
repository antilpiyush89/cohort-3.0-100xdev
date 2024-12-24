import * as argon2 from "argon2"
import { Request, Response, NextFunction } from "express"

// Extend the Request interface to include the user property

// I redefined the type of user hence i can now attach req.user with req.user=auth, which have {username:username}
declare module "express-serve-static-core" {
  interface Request {
    user?: string | jwt.JwtPayload
  }
}
import  jwt  from "jsonwebtoken"
const JWT_SECRET="SOULSOCIETY"
export const HashPasswordGenerator =async (PlainTextpassword:string)=>{

  return await argon2.hash(PlainTextpassword)
}
export const HashPasswordMatcher = async (PlainTextpassword:string,hashpassword:string)=>{
  return await argon2.verify(hashpassword,PlainTextpassword)
}

export const Authentication = (req:Request,res:Response,next:NextFunction)=>{
  
  try{
    const token = req.headers["token"] as string
    console.log("Token:   ",token)
    if(!token){
      // 1. Bad request - token is missing/null
      res.status(400).json({
        msg:"token is null / empty token field provided / token is missing"
      })
    }else{
      // 2. This line of code gives me the payload, which in our case it is {username:username}
      const auth = jwt.verify(token,JWT_SECRET)
      req.user= auth.username
      // 3. If the token is invalid/wrong token provided jwt.verify throws an error and code execution goes to catch
      next()
    }
  }catch(e){
      //4. We reach here when jwt.verify throws an error, only happen when token is invalid
      //status- 401 is for unauthorized access
    res.status(401).json({ 
      msg:"Invalid token",
      err:e
    })
  }
  
// Learning -1. Code execution goes to catch(error) when you provide an invalid token (eg. some letter missing in token)
//           2. Code execution goes to !token when token is null/ you have provided empty token field
  
}

