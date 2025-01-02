import {WebSocketServer, WebSocket} from "ws";

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




//Connecting several client to a single websocket server, with this our basic backend of chatroom would be done
const wss = new WebSocketServer({port:8081}) // Creating a websocket server3

// Whenever a new connection is established, we will increment the user count
// this shows when a disconnect and connect again, the user count will rise
// let user:number = 0;
// wss.on("connection",function(socket){
//   console.log("connection established #user" + user )
//   user = user + 1;
// })


let socketarr:WebSocket[] = []
wss.on("connection",function(socket){
  console.log("connection established")
  socketarr.push(socket)
  console.log("socket array length: ",socketarr.length)
  socket.on("message",function(message){
    for(let i=0;i<socketarr.length;i++){
      socketarr[i].send(message.toString()); // sends the message received from one client to all the clients, as it iterates over differenct sockets connection
    }

  })


})

wss.on('error', function error(err) {
  console.log('WebSocket error:', err);
});