"use client"
import axios from "axios"

//useEffect,useState causes client side rendering -> html css being produced on client itself, waterfalling problem -> react does the same
// To avoid client side rendering we should avoid using useEffect and useState
import { useEffect,useState } from "react"


export default function home(){
  const [data, setData] = useState<any>(null)
  const [loader,setloader]=useState(true)

  useEffect(()=>{
    console.log("in useffect")
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response=>{
      setData(response.data)
      setloader(false)
    })
  },[])
  if(loader){
    console.log("hi")
    return(
      <div>
        Loading....
      </div>
    )
  }
    return(
      <div>
        {data.userId}
        {data.title}
      </div>
    )
  }

