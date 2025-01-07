import { NextRequest, NextResponse } from "next/server";

export function GET(){
  return(
    NextResponse.json({
      userId:"Piyush",
      title:"Expert4268(@$)"
    })
  )
}

export async function POST(req:NextRequest){
  const data = await req.json()
  console.log("data:",data)
  return(
    NextResponse.json({
      email:data.emaildata,
      password:data.passdata
    })
  )
}

//similary for POST,PUT,DELETE 