import React from "react"
import { useState, useEffect } from "react"
import { SidebarData } from "./Data/data"
import { UserProfileData } from "./Data/data"
import Calander from "./components/icons/calander"
import Camera from "./components/icons/camera"
import { ScheduleData } from "./Data/data"
import Down from "./components/icons/down"
import Right from "./components/icons/right"
import leftArrow from "./components/icons/left"
import Recording from "./components/icons/recording"
import AddIcon from "./components/icons/addition"
import SidebarToggle from "./components/icons/SidebarToggle"


function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Update state on media query change
    const listener = (event) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}




export default function App() {
  const [SidebarOpen, setSidebarOpen] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  console.log(isDesktop)
  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop])
  return (
    <div className="flex ">
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent />
    </div>
  )
}



function Sidebar({ SidebarOpen, setSidebarOpen }) {
  console.log(SidebarOpen)
  if (SidebarOpen) {
    return (
      <div className="fixed top-0 left-0 md:w-80 w-64 bg-white shadow-xl h-screen md:relative">
        <div className="fixed top-7 left-8 cursor-pointer text-black " onClick={() => { setSidebarOpen(!SidebarOpen) }}>
          <SidebarToggle />
        </div>

        <div className="mt-28">
          {SidebarData.map((ele) => {
            return (
              <div className="h-10 mb-15  ">
                {/* <div className="flex justify-between md:w-80 w-64 h-10 px-8  mt-16 transition-all duration-100 ease-in-out rounded-xl  "> */}
                <div className="flex justify-between md:w-80 w-64 h-10 px-8  mt-10 transition-all duration-300 ease-in-out rounded-xl hover:bg-blue-100 hover">
                  <div className="h-10 w-10">
                    <h1 className="font-sans font-medium text-sm text-center pt-2 ">{ele.title}</h1>
                  </div>
                  <div className=" h-10 w-10">
                    {ele.icon}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    )
  }
  else if (!SidebarOpen) {
    return (

      <button className="fixed top-1 left-1 md:fixed md:top-7 md:left-8 md:text-white text-black" onClick={() => { setSidebarOpen(!SidebarOpen) }}>
        <SidebarToggle />
      </button>

    )
  }

}



function MainContent({ }) {
  return (
    // 
    <div className="w-full">
      <div className="h-36 bg-black md:block hidden"> <img src="https://ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=90%2090w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=128%20128w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=165%20165w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=180%20180w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=280%20280w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=390%20390w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=540%20540w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=768%20768w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=1080%201080w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=1280%201280w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966&width=1500%201500w,//ncscolour.com/cdn/shop/files/Industry.jpg?v=1694799966%202934w" alt="Banner-img" className="w-full h-full object-cover object-middle"/></div>
      {/*  */}
      <div className="grid grid-cols-11 gap-8 p-8">
        <div className="h-96 md:col-span-3 col-span-11 bg-white -translate-y-24 rounded-2xl shadow-lg md:block hidden overflow-hidden">
          <div className="flex justify-center mb-10 pt-10"><img src={UserProfileData[0].img} alt="user-image" className="h-40 w-40 rounded-full object-cover object-top" /></div>
          <h1 className="font-sans font-medium text-sm text-bold mb-3 text-center">{UserProfileData[0].title}</h1>
          <h1 className="font-sans font-medium text-gray-500 text-sm text-center mb-1">{UserProfileData[0].email}</h1>
          <h1 className="font-sans font-medium text-gray-500 text-sm text-center mb-4">{UserProfileData[0].phone}</h1>
          <h1 className="font-sans font-medium text-gray-500 text-sm text-center ">{UserProfileData[0].location}</h1>

        </div>

        <div className="flex flex-col justify-between h-[475px] md:col-span-5 col-span-11 ">
          <div className="  md:mt-0 mt-2 ">
            <p className="text-left text-sm font-medium font-sans mb-3">Thrusday,19 December</p>
            <p className="font-bold font-sans text-left text-3xl text-blue-800 ">Good morning {UserProfileData[0].title.split(" ")[0] + "!"}</p>
          </div>


          {/* Schedule Data- 2nd-Card */}

          {/* Schedule Card Topbar */}
          <div className=" h-fit border-2 rounded-2xl shadow-lg mt-8">
            <div className="bg-gray-100 mx-4 mt-4 rounded-2xl h-10">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="ml-4 h-3 w-4 mt-2"> <Calander /></div>  <div className="ml-4 mt-2 text-md font-medium font-sans">Monday,December 2024 </div>  <div className="ml-2 mt-3"><Down /></div>
                </div>
                <div className="flex">
                  <div className="mt-3 mr-4"><Right /></div>
                </div>
              </div>

            </div>

            {/* Repeating Part of Schedule Card */}

            {ScheduleData.map((ele) => {
              return (
                <div>
                  <div>
                    <div className="flex">
                      <div>   <div className=" mx-4 mt-4 h-fit w-fit font-medium font-sans">{ele.time}</div> <div className=" mx-4 mt-1 h-fit w-fit text-xs text-gray-500 font-medium font-sans">{ele.time2}</div>
                      </div>
                      <div className="bg-gray-100 h-18 w-1 rounded-lg mt-4">
                      </div>

                      <div>

                        <div className="flex">
                          <div className=" ml-4 mr-2 mt-5 h-fit w-fit text-xs font-medium font-sans text-gray-500">{ele.type}</div>
                          <div className={`mt-5 ${ele.type === "Live" ? "text-red-600" : "text-blue-600"}`}>{ele.camera}</div>
                        </div>
                        <div className=" mx-4 mt-1 h-fit w-fit font-medium font-sans">{ele.title}</div>
                      </div>


                    </div>
                  </div>
                  <div className="mx-4 mt-4 h-1 bg-gray-100"></div>
                </div>
              )
            })}

            {/* End of Repeating Part of Schedule Card here*/}




          </div>
        </div>


        <div className="h-72 mt-24 md:col-span-3 col-span-11 border-2 rounded-2xl shadow-lg">
          <div className="flex">
            <div className="flex flex-col my-12 ml-8 w-fit h-fit">
              <div className="bg-teal-500 w-14 h-14 rounded-lg pt-4 pl-4 self-center"><Calander /></div>
              <div className="text-xs font-bold font-sans w-fit mt-1"><h1 className="w-28 text-center">Schedule a Webinar</h1></div>
            </div>
            <div className="flex flex-col m-12 w-fit h-fit ">
              <div className="bg-teal-500 w-14 h-14 rounded-lg pt-4 pl-4 self-center"><AddIcon /></div>
              <div className="text-xs font-bold font-sans w-fit mt-1"><h1 className="w-28 text-center">Join a Webinar</h1></div>
            </div>
          </div>

          <div className="flex flex-col my-1 ml-8 w-fit h-fit">
              <div className="bg-teal-500 w-14 h-14 rounded-lg pt-4 pl-4 self-center"><Recording /></div>
              <div className="text-xs font-bold font-sans w-fit mt-1"><h1 className="w-28 text-center">Open Recording</h1></div>
            </div>
        </div>


      </div>

    </div>
  )
}