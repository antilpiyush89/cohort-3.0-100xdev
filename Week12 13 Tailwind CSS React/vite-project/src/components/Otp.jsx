import React, { useRef,useState} from "react";

// Dynamic components as many u want
export default function OtpComponent({number}){
  const arr = new Array(number).fill(10) // creates an array with the number of elements according to the number of otp boxes required 
  const refe= arr.map(x=>useRef()) // creates a ref array with the exact number of otp boxes required 
  return(
    <div className="flex justify-center">
      {refe.map((x,index)=>{ return <SubOtpBox reference={refe[index]} onDone={()=>{refe[index+1].current.focus()}} onBack={()=>{refe[index-1].current.focus()}}/>})}
      </div>

  )
}
      // The thing inside the div, let me achieve these three things
      // 1. create references for each SubOtpBox
      // 2. creates onDone function where it focuses the next SubOtpBox after you enter a number
      // 3. creates onBack function where it focuses on the previous SubOtpBox after you press backspace



// Using hardcoded components-  this is the more expanded version of the above OtpComponent
// export default function Otp(){
//   const ref1 = useRef()
//   const ref2 = useRef()
//   const ref3 = useRef()
//   const ref4 = useRef()
//   const ref5 = useRef()
//   const ref6 = useRef()
//   return(
//     <div className="flex justify-center">
    
//     <SubOtpBox reference={ref1} onDone = {()=>{ref2.current.focus()}} onBack={()=>{}} />
//     <SubOtpBox reference={ref2} onDone = {()=>{ref3.current.focus()}} onBack={()=>{ref1.current.focus()}}/>
//     <SubOtpBox reference={ref3} onDone = {()=>{ref4.current.focus()}} onBack={()=>{ref2.current.focus()}}/>
//     <SubOtpBox reference={ref4} onDone = {()=>{ref5.current.focus()}} onBack={()=>{ref3.current.focus()}}/>
//     <SubOtpBox reference={ref5} onDone = {()=>{ref6.current.focus()}} onBack={()=>{ref4.current.focus()}}/>
//     <SubOtpBox reference={ref6} onDone = {()=>{}}                     onBack={()=>{ref5.current.focus()}}/>

// </div>
//   )
// }


function SubOtpBox({reference,onDone,onBack}){
  const NumArr=["1","2","3","4","5","6","7","8","9","0"]
  function isNum(value){
    return NumArr.includes(value)
  }
  return(
    <input ref={reference} onChange={(e)=>{
      if(e.key!=="Backspace" && isNum(e.target.value)){
        onDone()
      }else if(!isNum(e.target.value)){
        e.target.value=""
      }
    }}
    onKeyDown={(e)=>{
      if(e.key=="Backspace" && e.target.value === ""){
        console.log(e.target.value)
        e.target.value=""
        onBack()
      }
      
    }} className="py-2 px-4 mr-2 text-white bg-blue-300 rounded-md outline-none w-[40px]" type="text" 
    maxLength={1}/>
  )
}