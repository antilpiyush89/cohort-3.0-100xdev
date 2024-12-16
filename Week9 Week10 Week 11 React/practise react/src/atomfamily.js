import { atomFamily } from "recoil";
import { TODOS } from "./TODOS";
export const todoatomfamily =atomFamily({
  key:"todoatomfamily",
  default : (id)=>{  // We have used a function in the default instead of a value, the functions takes id as an input/parameter and then returns the todo that matches with the id, The todo is imported from another file, TODOS.find(x=> x.id===id) loops through the TODOS array and x is the iterator element, and whichever object inside the array matches x.id===id is returned in the default and then default values becomes the value of the atom, default : {id:1, title:"Complete web dev course", completed:false}
    return TODOS.find(x=> x.id===id)
  }
})