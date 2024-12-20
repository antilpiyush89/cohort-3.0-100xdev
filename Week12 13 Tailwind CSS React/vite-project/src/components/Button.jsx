import React from "react";


export default function Button({disabled,onclick,children}){
  return(

      <span className={`font-roboto  cursor-pointer text-1xl py-3 px-56 rounded-3xl text-white ${disabled ? "bg-blue-400" : "bg-green-500"}`}>
        {children}
      </span>


  )
}