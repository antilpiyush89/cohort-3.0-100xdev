import {Client} from "pg"
import express from "express"

const newclient = new Client("postgresql://Testdb_owner:rC8yi6FsndgE@ep-delicate-wind-a1ujx14k.ap-southeast-1.aws.neon.tech/Testdb?sslmode=require") // an instance of postgressDB is initialized 


// Basic Implementation of postgress
// Sending request to the database via node.js
// async function TableCreation(){
//   await newclient.connect() // actual connection request that goes to external database


//   // I defined the schema from here
//   const response = await newclient.query(`
//     CREATE TABLE STUDENTS(
//            ID SERIAL PRIMARY KEY,
//            NAME VARCHAR(50) NOT NULL,
//            AGE INT NOT NULL,
//            CLASS INT NOT NULL
//     )
//     `)
//     console.log(response)

// }

// TableCreation()



// Ex-2 sending data using express
// const app = express() //instance of express
// app.use(express.json()) // to parse string to json


// app.post("/insertdata",async (req,res)=>{
//   try{
//     const name = req.body.name
//     const age = req.body.age
//     const classname = req.body.classname
//     console.log(name,age,classname)
//     // to prevent sql injection
//     await newclient.connect() // connect with the postgress db
//     const response = await newclient.query(`INSERT INTO STUDENTS (NAME,AGE,CLASS) VALUES($1,$2,$3)`,[name,age,classname])
//     console.log(response)
//     if(response){
//       res.status(200).json({
//         msg:"Data entered in the table"
//       })
//     }else{
//       res.status(401).json({
//         msg:"Something failed"
//       })
//     }
      
//   }catch(e){
//     res.status(500).json({
//       error:e
//     })

//   }


// })


// app.listen(3000)