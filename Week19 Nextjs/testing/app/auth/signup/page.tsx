"use client"
import { useState } from "react"
import axios from "axios"
export default function home(){
   const [emaildata,setemaildata] = useState("")
   const [passdata,setpassdata] = useState("")

  return(
    <div className=" bg-black h-screen w-screen ">
    <div className="flex flex-col w-1/2 justify-center items-center">
      <input type="text"  placeholder="email" onChange={e=>setemaildata(e.target.value)} className="rounded-lg text-xl p-4 outline-none text-black bg-white mb-5"/>
      <input type="text"  placeholder="password" onChange={e=>setpassdata(e.target.value)} className="rounded-lg text-xl p-4 outline-none text-black bg-white mb-8"/>
      <button onClick={()=>axios.post("http://localhost:3000/api/v1/user/details",{
        emaildata,passdata
      })} className="p-3 border bg-white text-black hover:bg-blue-300 text-xl w-fit border-black">SIGN UP</button>
    </div>
    </div>
  )
}