import { PrismaClient } from "@prisma/client";
import express from "express"
const client = new PrismaClient()

// async function insertdata(){

//   // To send multiple queries together
//   const result =await client.user.create({
//     data:{
//       username:"antilpiyush89",
//       email:"antilpiyush89@gmail.com",
//       password:"expert4268",
//       firstname:"piyush",
//       Lastname:"antil",
//       Todos:{
//         create:[
//           {
//             title:"first todo",
//             description:"description",
//             done:false
//           }
//         ]
//       }
//     }
//   }
//   )
//   console.log(result)
// }
// insertdata()



// To find this data
// async function insertdata(){

//   // To find 
//   const result =await client.user.findMany({
//     where:{
//       id:1
//     },
//     include:{
//       Todos:true
//     }
//   }
//   )
//   console.log(result,result[0].Todos)
// }
// insertdata()



// Expressifying our application 
const app = express()
app.use(express.json())
app.get("/users",async (req,res)=>{
  const users = await client.user.findMany({
    include:{
      Todos:true
    }
  })
  console.log(users)
  res.json({
    users
  })
})

app.get("/todo/:id",async (req,res)=>{
  const id = req.params.id
  const userTodo =await client.user.findMany({
    where:{
      id:parseInt(id) // need to parse id from line 63 bcz it is a string, and in our schema id is a integer
    },
    include:{
      Todos:true
    }
  })
  if(userTodo){
    res.json({
      userTodo
    })
  }else{
    res.json({
      msg:"failed"
    })
  }

  console.log(id,userTodo)
})
app.listen(3000)
