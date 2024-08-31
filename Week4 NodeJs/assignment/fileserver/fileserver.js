/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */


const express=require("express")
const fs=require("fs")
const path=require("path")
const app=express()


// 1. GET /files - Returns a list of files present in `./files/` directory
app.get("/files",(req,res)=>{
  const directoryPath=path.join(__dirname,'files')
  fs.readdir(directoryPath,(err,files)=>{
    if(err){
      res.status(500).send("Error reading directory, Server Error")
    }else{
      res.json({files})
    }
  })
})


// 2. GET /file/:filename - Returns content of given file by name
app.get("/file/:filename",function(req,res){ //:filename means kuch bhi daalde idhar, but must be a filename
  const filename=req.params.filename // request path parameter se filename utha lega
  fs.readFile(filename,"utf-8",function(err,data){
    if(err){
        res.status(404).send("File not Found") //"Error No Entry". It's a common error that occurs when the fs module is unable to find a file or directory at the specified path.
    }
    else{
      res.send(data)
    }
  })

})

//Testing the server - run `npm run test-fileServer` command in terminal, also did this
app.listen(3005)
