import React from "react";
import { MenuData } from "../Data/data";

// duration - for what ms css animation occurr
// delay - after what ms should animation start
// transition-all to apply all css properties
// ease-in-out - start slow and end fast
// h-screen - height of screen
// flex-1 - take all available space in flex container
export default function Menu(){
  return(
    <div className="flex">
      <div className="bg-blue-300 h-screen w-0 md:w-96 transition-all duration-500 ease-in-out ">
        Sidebar
      </div>
      <div className="bg-green-300  h-screen flex-1">
        Content
      </div>
    </div>
  )
}