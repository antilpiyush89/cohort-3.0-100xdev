import { useEffect,useRef, useState} from "react";
export default function App(){
  const InputRef = useRef<HTMLInputElement>(null)
  // We want the connection between client and websocket server to be made at when app component mount, we don't want to make a new connection on every render, that is the whole ass reason we put it in useEffect
  const [socket,setsocket]=useState<WebSocket>()
  function sendMessage(){
    if (InputRef.current){
      console.log(InputRef.current.value)

      // socket=wss, .send is using to send data to the websocket server
        socket?.send(InputRef.current.value)
    }
  }

  // We want the connection between client and websocket server to be made at when app component mount, we don't want to make a new connection on every render, that is the whole ass reason we put it in useEffect
  useEffect(() => {
    const wss = new WebSocket("ws://localhost:8080"); // A connection between the client and the server is made
    setsocket(wss)

    // .onmessage is an event listener
    // When we receive a message from the backend, we use .onmessage for that to access the actual message we use ev.data
    // alert need to be only send once, therefore it is kept in useEffect()sddee
    wss.onmessage = (ev) =>{
      alert(ev.data)
    }
  },[])
  return(
    <div className = " flex w-screen h-screen justify-center items-center">
    <input ref={InputRef} type="text" placeholder = "Messsage Websocket" className="p-4 text-black outline-none"/>
    <button onClick={sendMessage} >Send</button>
    </div>
  )
}