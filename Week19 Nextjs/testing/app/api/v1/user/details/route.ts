
import { NextRequest, NextResponse } from "next/server";
// We have defined the client defining logic/ connecting to prisma client which we get after writing npx prisma generate, bcz hot module replacement happens in nextjs whenever u change ur code, bcz of that after every code change a new connection request goes to our database and the database can reach its limit. that is why we need a logic to define a prismaclient a single time whenever we are in development env(local codebase and cloud database), We don't need the logic when we are in production(bcz connection request to db are needed their) or when in local codebase and db
import prisma from "@/app/lib/db";

//sometimes the autogenerated client won't work if the filepath it is imported from is @prisma/client/extensions, just remove extensions part, and then it should work fine

// export function GET(){
//   return(
//     NextResponse.json({
//       userId:"Piyush",
//       title:"Expert4268(@$)"
//     })
//   )
// }

// export async function POST(req:NextRequest){
//   const data = await req.json()
//   console.log("data:",data)
//   return(
//     NextResponse.json({
//       email:data.emaildata,
//       password:data.passdata
//     })
//   )
// }

//similary for POST,PUT,DELETE 
const client = prisma
export async function POST(req:NextRequest){
  const data = await req.json()
  await client.member.create({
    data:{
      username:data.username,
      password:data.password
    }
  })
  console.log("data:",data)
  return(
    NextResponse.json({
      msg:"You have signed up"
    })
  )
}