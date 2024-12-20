import React from "react";
// These dark theme and light theme are created using tailwind css and are based on ur os preferences 
// If you want to toggle between them manually you have to add darkMode:"selector" in tailwind.config.js


// Works on os preferences
// export default function DarkTheme() {
//   return (
//     <div className="bg-white dark:bg-black h-screen">
//       <h1 className="text-black dark:text-white">Hi there</h1>
//     </div>
//   )
// }


// Works from a toggle button
// We added darkMode:"selector" in tailwind.config.js which gave us an ability to toggle using document.querySelector
export default function DarkTheme(){
  return(
    <div className="bg-white dark:bg-black h-screen">
      <h1 className="text-black dark:text-white">Hi there</h1>
      <button onClick={()=>{document.querySelector("html").classList.toggle("dark")}} className=" text-black dark:text-white">Toggle</button>
    </div>
  )
}