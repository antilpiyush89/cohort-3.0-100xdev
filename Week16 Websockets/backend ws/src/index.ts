import {WebSocketServer } from "ws"
// Websocket Notes
// https://petal-estimate-4e9.notion.site/WebSockets-1477dfd10735802982becc925074b5f0

// Creating an instance of WebSocketServer
const wss = new WebSocketServer({port:8080})

// wss.on is used to make a websocket connection
// When I press connect from the client side(postman), it sees a connection is established and the code execuction goes inside the function(socket), then it logs the message "Connection established"
// After every 500ms, it sends the message "Current time is" + new Date().toTimeString() to the client, this is similar to response from a http server
// socket.on is used to listen to the message sent by the client, when the client sends a message, it logs the message to the console
// socket.on is similar to request in a http server

// The key difference in websocket and http server is that in http server, the server sends a response to the client only when the client sends a request, but in websocket, the server can send a message to the client without the client sending a request, this is called as full duplex communication

// For example in a live trading website, the prices keep changing, so the server can send the updated prices to the client without the client sending a request, this is also possible in http, but you have to poll/long poll the server, you have to keep sending request to the http server, for the new prices, hence multiple request goes to the http server

// But in websocket, the server can send the updated prices to the client without the client sending a request, hence only one request is sent to the server, and that one request is used to make a persistent connection
// wss.on("connection",function(socket){
//   console.log("Connection established")
//   setInterval(()=>{
//     socket.send("Current time is" + new Date().toTimeString())
//   },500)

//   socket.on("message",function(message){
//     console.log(message.toString())
//   })
// })

//2nd example
// Create a simple ping pong server using websocket
// When a user sends a message "ping", the server should respond with "pong"

wss.on("connection",function(socket){
  console.log("Connection established")
  socket.on("message",function(message){
    // if(message.toString() ==="ping"){
    socket.send(message.toString())

  })
})