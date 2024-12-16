import axios from "axios";
import { atomFamily,selectorFamily } from "recoil";


export const Todobackendfamily=atomFamily({
  key:"Todobackendfamily",
  default:selectorFamily({
    key:"Todobackendselectorfamily",
    get : function(id){
      return async function({get}){
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts/"+ id)
        return res.data // returns an object and then a dynamic selector is created from which an atom is created, hence by this way we can do asynchronous calls in recoil using atomfamily
      }
    }

    //Alternative to the thing inside get is->
    // get: (id)=> async ({get}) => {
    //   const res= await axios.get("https://jsonplaceholder.typicode.com/posts/"+ id)
    //   return res.data // returns an object and then a dynamic selector is created from which an atom is created, hence by this way we can do asynchronous calls in recoil using atomfamily
    // }
  })
})

//                                                     MUST READ
// if ()=> {} you need to explicitely write return so the function return something, else it returns undefined
// so (id) => async ({ get }) => {} is an arrow function returning an async function
// async ({get}) => {} is an async function that doesn't implicitely return anything, which means I have to exclusively write return inside it for it to return something

