import React from "react";

export default function Input({type,placeholder}){
  return(
      <input className="text-1xl py-3 px-4 placeholder-white text-white bg-blue-300 outline-none rounded-lg mb-10 w-" type={type} placeholder={placeholder}></input>
  )
}