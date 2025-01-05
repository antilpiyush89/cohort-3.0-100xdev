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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
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
function insertdata() {
    return __awaiter(this, void 0, void 0, function* () {
        // To find 
        const result = yield client.user.findMany({
            where: {
                id: 1
            },
            include: {
                Todos: true
            }
        });
        console.log(result, result[0].Todos);
    });
}
insertdata();
