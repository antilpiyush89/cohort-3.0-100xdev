import { PrismaClient } from "@prisma/client";

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
async function insertdata(){

  // To find 
  const result =await client.user.findMany({
    where:{
      id:1
    },
    include:{
      Todos:true
    }
  }
  )
  console.log(result,result[0].Todos)
}
insertdata()