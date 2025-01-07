import { NextResponse } from "next/server";

export function GET(){
  return(
    NextResponse.json({
      username:"Piyush",
      password:"Expert4268(@$)"
    })
  )
}

//similary for POST,PUT,DELETE 