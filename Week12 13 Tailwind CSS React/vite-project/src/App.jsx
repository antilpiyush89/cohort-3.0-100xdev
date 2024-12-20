import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Otp from "./components/Otp";
import OtpComponent from "./components/Otp";
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


//Q-1
    // <div className="bg-blue-900 h-screen flex flex-col justify-center items-center">
    //   <Input type={"text"} placeholder={"Email"}></Input>
    //   
    // </div>


export default function App(){
  return(
    <div classname="bg-blue-900 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
      <OtpComponent number={10}/>
      <Button disabled={false}>Sign Up</Button>
      </div>

      
    </div>
      

    
  )
}