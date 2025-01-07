// "use client"
import axios from "axios"

// UseEffect,useState causes client side rendering -> html css being produced on client itself, waterfalling problem -> react does the same
// To avoid client side rendering we should avoid using useEffect and useState
// In preview only backend request can be seen -> client sends the backend request then waits for it to succeed then the html is generated on frontend hence client side rendering happens
// import { useEffect,useState } from "react"


// export default function home(){
//   const [data, setData] = useState<any>(null)
//   const [loader,setloader]=useState(true)

//   useEffect(()=>{
//     console.log("in useffect")
//     axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response=>{
//       setData(response.data)
//       setloader(false)
//     })
//   },[])
//   if(loader){
//     console.log("hi")
//     return(
//       <div>
//         Loading....
//       </div>
//     )
//   }
//     return(
//       <div>
//         {data.userId}
//         {data.title}
//       </div>
//     )
//   }


// When server rendering don't use -> "use client"
// Server side rendering -> nextJS server sends the backend request, get the data and returns to the client in a single request, no waterfalling problem, all the rendering happens on the server side, server serves the html directly to the server
export default async function home(){

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    const data:{userId:string,title:string} = response.data as any

    return(
      <div>
        {data.userId}
        {data.title}
      </div>
    )
  }
