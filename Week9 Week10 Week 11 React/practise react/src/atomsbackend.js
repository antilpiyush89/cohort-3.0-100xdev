import {atom,selector} from "recoil";
import axios from "axios";



export const TopbarNotificationAtom= atom({
  key:"TopbarNotificationAtom",
  default:selector({
    key:"TopbarNotificationSelector",
    get:async function({get}){
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      const data=res.data
      const rawArray=[]
      const newarray=[]
      const flexibleObject={network:0,jobs:0,messaging:0,notification:0} 
      data.map(number=>rawArray.push(number.id))
      console.log(rawArray)
      for (let i=0;i<4;i++){
        newarray.push(rawArray[Math.floor(Math.random()*rawArray.length)]) // Math.floor() returns the integer part only, Math.random() returns a random number btw 0 and 1, Math.floor(Math.random()*rawArray.length) returns a random number between 0 and rawArray.length 
        flexibleObject[Object.keys(flexibleObject)[i]] = newarray[i]; // To individually set the value of each key of flexibleObject

    }
    console.log(flexibleObject)
    return flexibleObject
    }
  })
})

// { TopbarNotificationAtom} should return an object with keys network, jobs, messaging, notification {network:somevalue,jobs:somevalue,messaging:somevalue,notification:somevalue}

export const totalnotificationselector1=selector({
  key:"Totalnotificationselector1",
  get:function({get}){
    const notifications=get(TopbarNotificationAtom)
    return notifications.network+notifications.jobs+notifications.messaging+notifications.notification
  }
})



