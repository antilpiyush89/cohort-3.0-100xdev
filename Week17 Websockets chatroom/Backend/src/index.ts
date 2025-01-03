import {WebSocketServer, WebSocket} from "ws";


// Example-1
// const wss = new WebSocketServer({port:8080}) // Creating a websocket server3
// // Goal - to create 2 different websocket connection with a single websocket 
// // USER1 --> WEBSOCKET1 <---- USER2
// // I know how to create a single connection between a user and websocket so let's implement that first

// wss.on("connection",function(socket){
//   console.log("connection established")

//   //socket.on gives us ability to access what we got from client to backend
//   //socket.send gives us ability to send data from backend to client
//   //Below we are receiving message from client to backend, and then giving the same data from backend to client, to mimic the functionality of a chat app
//   //It's like one user sends a message from client to backend and the backend propogate it back to other clients, but first we are building the logic for a single client
//   socket.on("message",function(message){
//     socket.send(message.toString() + ": sent from the server")
//   })
// })





// Example-2
//Connecting several client to a single websocket server, with this our basic backend of chatroom would be done
// const wss = new WebSocketServer({port:8081}) // Creating a websocket server3

// Whenever a new connection is established, we will increment the user count
// this shows when a disconnect and connect again, the user count will rise
// let user:number = 0;
// wss.on("connection",function(socket){
//   console.log("connection established #user" + user )
//   user = user + 1;
// })


// let socketarr:WebSocket[] = []
// wss.on("connection",function(socket){
//   console.log("connection established")
//   socketarr.push(socket)
//   console.log("socket array length: ",socketarr.length)
//   socket.on("message",function(message){
//     for(let i=0;i<socketarr.length;i++){
//       console.log("Message received from client: ",message.toString())
//       socketarr[i].send(message.toString()); // sends the message received from one client to all the clients, as it iterates over differenct sockets connection
//     }

//   })

//   // cleanup logic --> if a user disconnects, we will remove the socket from the socket array
//   socket.on("disconnect", ()=>{
//     socketarr = socketarr.filter( x=> x != socket)
//   })


// })






// Example-3
// Now creating logic for x number of rooms
// Now users can join different rooms, and their messages will only be reflect in that room only
// What a client/user can send
// 1. Join a room
// {
//   "type":"join",
//   "payload":{
//         "roomID":"XYZ"
//   }
// }
// 2. Send a message
// {
//   "type":"chat",
//   "payload":{
//         "message":"Hello their"
//   }
// }
// 2. What a Backend/server can send
//    Sends messages only to particular room ids


const wss = new WebSocketServer({port: 8080})

let socketRoomArray :{
  socket: WebSocket,
  roomID:string
}[] = []

wss.on("connection",function (socket){
  socket.on("message",(message)=>{
    // message we receive from client is in type string, hence we have to convert it back to json object, to perform operation on it
    // This line convert a string to a JSON Object
    // json.stringify() convert json to string
    const parsedMessage = JSON.parse(message.toString())
    if(parsedMessage.type === "join"){
      socketRoomArray.push({
        socket:socket,
        roomID:parsedMessage.payload.roomID
      })
      console.log("socketRoomArray: ",socketRoomArray)
    }
    if(parsedMessage.type === "chat"){
      const roomIDfound = socketRoomArray.find(x=> x.socket === socket)?.roomID // finds the element which satisfy the condition, hence i can use .roomID on it
      const relevantSocketArr = socketRoomArray.filter(x=> x.roomID ===roomIDfound) // gives all the array of object which satisfy the inner condition

      // sends the message to the roomID where the current socket is present
      for(let i=0; i<relevantSocketArr.length;i++){
        relevantSocketArr[i].socket.send(parsedMessage.payload.message)
      }
    }
  })

  socket.on("disconnect",()=>{
    socketRoomArray=socketRoomArray.filter(x=> x.socket != socket)
    console.log(socketRoomArray) // .filter create a new array, it does not update socketroomarray globally
  })
})

