import { useEffect,useState,useRef } from "react"




export default function App(){
  const inputref = useRef<HTMLInputElement>(null)
  const [socket,setsocket]=useState<WebSocket>()
  const [messageArr,setmessageArr] = useState<string[]>([])
  const messageArray =[]
  function sendmessage(){
    if(inputref.current){
      socket?.send(inputref.current.value)
    }

  }

  // ws value is only inside usEffect, how to make it global ---> useState
  useEffect(()=>{
    const wss = new WebSocket("ws://localhost:8081") // new connection when app components mounts
    setsocket(wss)

    //receiving messages from the backend
    wss.onmessage = (message)=>{
      setmessageArr((messageArr)=>[...messageArr,message.data as string])
  
    }

  },[])


  return(
    <div className = "flex w-screen h-screen justify-center items-center">
      <div className="flex justify-center items-end h-2/3 w-2/3 bg-gray-200 p-4 rounded-lg">
      {/* {messageArr.map((message, index) => (
        <div key={index} className="p-2 font-medium text-xl bg-yellow-100">{message}</div>
      ))} */}
      <div className="w-full flex justify-center items-center">
    <input ref={inputref} type="text" placeholder = "Messsage Websocket" className="px-4 py-2 rounded-lg text-black outline-none w-10/12"/>
    <button onClick={sendmessage} className="px-4 py-2 rounded-lg bg-blue-300 ml-4">Send</button>
    </div>
    </div>

    </div>
  )
}