import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

async function insertdata(){
  const result =await client.todo.findFirst({
    where:{
      userid:1
    }
  }
  )
  console.log(result)
}
insertdata()