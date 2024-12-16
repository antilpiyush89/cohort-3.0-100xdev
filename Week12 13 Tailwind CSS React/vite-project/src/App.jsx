import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
    // <div className="grid grid-cols-3 gap-4"> 
    //   <div className="sm:col-span-1 col-span-3 bg-blue-300">
    //     Hello from first line of code 
    //   </div>
    //   <div className="sm:col-span-1 col-span-3 bg-red-300">
    //   Hello from second line of code 
    //   </div>
    //   <div className="sm:col-span-1 col-span-3 bg-green-300">
    //   Hello from third line of code 
    //   </div>
    // </div>
export default function App(){
  return(
    <div className="bg-blue-900 h-screen flex flex-col justify-center items-center">
      <Input type={"text"} placeholder={"Email"}></Input>
      <Button disabled={false}>Sign Up</Button>
    </div>

  )
}