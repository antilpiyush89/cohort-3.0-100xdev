import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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
const client = new PrismaClient()
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