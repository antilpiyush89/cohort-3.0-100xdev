import {Client} from "pg"

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
