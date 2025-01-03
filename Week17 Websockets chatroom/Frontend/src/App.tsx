import { useEffect,useState,useRef } from "react"




export default function App(){
  const inputref = useRef<HTMLInputElement>(null)
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messageArr,setmessageArr] = useState<string[]>([])

  function sendRoomIDToBackend(){
    socket?.send(`{
      "type":"join",
      "payload":{
          "roomID":"red"
      }
    }`)


  }
  function sendmessage(){
    if(inputref.current){
      socket?.send(`{
      "type":"chat",
      "payload":{
          "message":"${inputref.current.value}"
      }
    }`)
    }

  }

  // ws value is only inside usEffect, how to make it global ---> useState
  useEffect(()=>{
    const wss = new WebSocket("ws://localhost:8080") // new connection request when app components mounts
    console.log(wss)
    if(wss){
      setSocket(wss)
    }


    //when request is successful and we actually start receiving messages from the backend
    wss.onmessage = (message)=>{
      console.log("received message: ",message.data)
      setmessageArr((prev_messageArr)=>[...prev_messageArr,message.data as string])
      
  
    }
    console.log("messageArr: ", messageArr)

    return ()=>{
      wss.close()
    }
    

  },[])


  return(
    <div className = "flex flex-col w-screen h-screen justify-center items-center pt-0">
      <button className="p-4 rounded-lg bg-black text-white text-xl mb-5" onClick={sendRoomIDToBackend}>Join Jaat Room</button>
      <div className="flex flex-col justify-between h-2/3 w-2/3 bg-gray-200 p-4 rounded-lg">
      <div className="flex flex-col items-end pr-5 h-5/6 w-full bg-red-300 overflow-y-scroll">
      {messageArr.map((message, index) => (
        <div key={index} className="p-2 font-medium text-xl bg-yellow-100 w-fit h-fit rounded mb-2 mt-4">{message}</div>
      ))}
      </div>

      <div className="w-full flex justify-center items-center">
    <input ref={inputref} type="text" placeholder = "Messsage Websocket" className="px-4 py-2 rounded-lg text-black outline-none w-10/12"/>
    <button onClick={sendmessage} className="px-4 py-2 rounded-lg bg-blue-300 ml-4">Send</button>
    </div>
    </div>

    </div>
  )
}