"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const client = new client_1.PrismaClient();
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
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany({
        include: {
            Todos: true
        }
    });
    console.log(users);
    res.json({
        users
    });
}));
app.get("/todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userTodo = yield client.user.findMany({
        where: {
            id: parseInt(id) // need to parse id from line 63 bcz it is a string, and in our schema id is a integer
        },
        include: {
            Todos: true
        }
    });
    if (userTodo) {
        res.json({
            userTodo
        });
    }
    else {
        res.json({
            msg: "failed"
        });
    }
    console.log(id, userTodo);
}));
app.listen(3000);
