

import { ReactNode } from "react";

export default function authroute({children}:{children:ReactNode}){
  return(
    <div>
    <div className="w-full h-10 bg-blue-200 hover:bg-blue-400 text-center text-xl text-white cursor-pointer mb-10">
      Navbar
      
    </div>
    <div className="w-full text-center">{children}</div>
    </div>
  )
}