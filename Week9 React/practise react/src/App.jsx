import { useEffect, useState } from 'react'
import { PostComponent } from './post'
import './App.css'

//                                                                        1
//Renamed postComponent to PostComponent since React requires component names to start with an uppercase letter
//React must also return a single div


// Learned useState, react, conditional rendering, that react App() must return a single div, React component name must start with Capital letter, use of props, ex- if we change props the output component also changes, props is the state, on state change a rerender is triggered by the react


// export default function App(){

//   const [visible,setvisible]=useState(false)

//   return(
//     <div style={{backgroundColor:"lightblue",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}}>

//     <div><button style={{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:20}}onClick={()=>setvisible(!visible)}>Toggle</button></div>
//     {/* Conditional rendering */}
//     {visible &&
//     <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
//     <Component name ={"Piyush"} image={"https://media.licdn.com/dms/image/v2/D5603AQFu1tJUHGvc0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705489935706?e=1733961600&v=beta&t=IPrDNo61uVthVLxTgzb0m2WOulcrIqttF67q-v_lNTE"} subtitle={"20 followers"} time={"2 mins ago"} description={"Want to know how to win bag? Checkout how these folks won $6000 in bounties"} />
//     <Component name ={"Piyush"} image={"https://media.licdn.com/dms/image/v2/D5603AQFu1tJUHGvc0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705489935706?e=1733961600&v=beta&t=IPrDNo61uVthVLxTgzb0m2WOulcrIqttF67q-v_lNTE"} subtitle={"Promoted"} description={"How to get hired in 2024? I lost my job in 2023 and this is the roadmap i followed to get a job"}/>
//     </div>}

//     </div>
//   )
// }

// const pstyle={marginBottom:0,marginTop:0}
// function Component(props){
//   return(
//     <div style={{backgroundColor:"white",borderRadius:10,width:200,height:120,marginTop:20}}>
//       <div style={{display:"flex",paddingTop:15,paddingLeft:20}}>
//           <img src={props.image} style={{width:30,height:30,borderRadius:50}} />
//         <div style={{fontSize:8,marginLeft:10,marginBottom:0,marginTop:0,color:"black",display:"flex",flexDirection:"column",textAlign:"left",verticalAlign:"top"}}>
//           <p style={pstyle}><b>{props.name}</b></p>
//           <p style={pstyle}>{props.subtitle}</p>
//           {props.time && <p style={pstyle}>{props.time}</p>} 
//           {/* Conditional rendering - only render this if we get time as an arguement through props */}
          
//         </div>
//       </div>
//       <div style={{color:"black",fontSize:8,paddingLeft:20,paddingRight:10,width:145,textAlign:"left"}}><p> {props.description} </p></div>
//     </div>
    
//   )
// }



//                                                                        2

// We can essentially return PostComponent/ React Component in a array ex- {[<PostComponent/>,<PostComponent/>]} hence we can render multiple component like this
//   return(

//     <div style={{backgroundColor:"lightblue", width:"100vw", height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}}>
//     <div><button style={{marginTop:10,marginBottom:10}}>Add post</button></div>
//     {
//     [<PostComponent name ={"Piyush"} image={"https://media.licdn.com/dms/image/v2/D5603AQFu1tJUHGvc0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705489935706?e=1733961600&v=beta&t=IPrDNo61uVthVLxTgzb0m2WOulcrIqttF67q-v_lNTE"} subtitle={"20 followers"} time={"2 mins ago"} description={"Want to know how to win bag? Checkout how these folks won $6000 in bounties"} />,
//     <PostComponent name ={"Piyush"} image={"https://media.licdn.com/dms/image/v2/D5603AQFu1tJUHGvc0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705489935706?e=1733961600&v=beta&t=IPrDNo61uVthVLxTgzb0m2WOulcrIqttF67q-v_lNTE"} subtitle={"20 followers"} time={"2 mins ago"} description={"Want to know how to win bag? Checkout how these folks won $6000 in bounties"} />]
    
//     }
//     </div>
//   )
// }

//                                                                        3

// - When add post button is clicked, it adds post below the previous post
// export default function App(){

//   const [post,setpost]=useState([])
//   const newpost={
//     name:"Piyush",
//     image:"https://media.licdn.com/dms/image/v2/D5603AQFu1tJUHGvc0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705489935706?e=1733961600&v=beta&t=IPrDNo61uVthVLxTgzb0m2WOulcrIqttF67q-v_lNTE",
//     subtitle:"20 followers",
//     time:"2 mins ago",
//     description:"Want to know how to win bag? Checkout how these folks won $6000 in bounties"
//   }

//   // Loops through post array, post is array of objects
//   const postcomponent=post.map((ele)=> <PostComponent 
//   name={ele.name} image={ele.image} subtitle={ele.subtitle} time={ele.time} description={ele.description}
//   />)
//   function addpost(){
//     setpost([...post,newpost])
//   }

//   return(

//     <div style={{backgroundColor:"lightblue", width:"100vw", height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}}>
//     <div><button style={{marginTop:10,marginBottom:10}} onClick={addpost}>Add post</button></div>
//     <div>{postcomponent}</div>
//     </div>
//   )
// }




//                                                                        4

 // This approach is wrong, bcz setInterval is side effect, when side effect are not guarded by useEffect hooks, then at each render setInterval is also called, so number of clocks inc at each render, then each clock will update count, as count is updating multiple times, it leads to the glitchy effect we saw on our website, also their is exponential rise in number of clocks, hence we need to guard the sideeffect with useEffect


// export default function App(){
//   // const [count,setCount]=useState(0);
//   // function updatecount(){
//   //   setCount(count+1);
//   // }
//   // //setInterval(updatecount,1000)
//   // return(
//   //   <div>
//   //     <button>{count}</button>
//   //   </div>
//   // )
// }

//                                                            Solution -
// 1. useEffect(()=>{some code, not returning anything},[]) this logic runs only on mounting, mounting means when component appears for the first time, [] is called dependancy array
// 2. useEffect(()=>{some code, not returning anything},[state]) this logic runs every time when state is changed
// 3. useEffect(()=>{          
  
//  some code, not returning anything

//     Cleanup code
//     return ()=> { cleanup code },[dependency array]}
// });


// 4. useEffect(() => {
//   // Code here is the "effect" — this is where side effects happen
//   fetchData();

//   // Optionally, return a cleanup function that runs when the component unmountS , unmount mean when component is removed
//   return () => {
//     // Cleanup code, e.g., unsubscribing from an event or clearing timers.
//   }, [/* dependencies */]);
// });


// Prerequisites- 1. remove strictmode from main.jsx, 2. setCount(count+1) doesn't work do setCount((curcount)=>curcount+1)
// export default function App(){
//   const [count,setCount]=useState(0)
//   function updatecount(){
//     console.log("updatecount is called")
//     setCount((curcount)=>curcount+1) // curcount is seperate from count, count is hardcoded to 0
//     // this doesn't work as setCount(count+1) //count is hardcoded to 0
//   }
//   useEffect(()=>{
//     console.log("setInterval is called")
//     setInterval(updatecount,1000)},[]) // i want this code to only run on mount, here the clocks runs single time, whereas if we don't use useEffect, new clocks runs at every render

//   return (
//     <div>
//       <button>{count}</button>
//     </div>
//   )
// }

// using dependancy array
// export default function App(){
//   const [count,setCount]=useState(0)
//   function updatecount(){
//     console.log("updatecount is called")
//     setCount((curcount)=>curcount+1) // curcount is seperate from count, count is hardcoded to 0
//     // this doesn't work as setCount(count+1) //count is hardcoded to 0
//   }
//   useEffect(()=>{
//     console.log("setInterval is called")
//     setInterval(updatecount,1000)},[]) // runs on mount 

//   useEffect(()=>{
//     console.log("count changed")
//   },[count]) // runs on mount and whenever count changes

//   return (
//     <div>
//       <button>{count}</button>
//     </div>
//   )
// }


//                                                                        5
// Designing something similar to linkedin 4 buttons Feed Notification Messages Jobs, whenever you click a button it turns red
// export default function App(){

//   const [state,setstate]=useState("")


  // Wrong approach as fstyle will always be undefined , as react runs const [state,setstate] 
  // then return( <button onClick={()=>{setstate("Feed")}} style={fstyle}>Feed</button>, here it goes directly to style to button, but as fstyle is not defined, it doesn't render anything
  // useEffect(()=>{
  //   let fstyle = {};
  //   let nstyle = {};
  //   let mstyle = {};
  //   let jstyle = {};
  //   {state=="Feed" ? fstyle={color:"red"} : fstyle={color:"black"} }
  //   {state=="Notification" ? nstyle={color:"red"} : nstyle={color:"black"} }
  //   {state=="Messages" ? mstyle={color:"red"} : mstyle={color:"black"} }
  //   {state=="Jobs" ? jstyle={color:"red"} : jstyle={color:"black"} }
  // },[state])

  // return(
  //   <div>
  //     <button onClick={()=>{setstate("Feed")}} style={fstyle}>Feed</button>
  //     <button onClick={()=>{setstate("Notification")}} style={nstyle}>Notification</button>
  //     <button onClick={()=>{setstate("Messages")}} style={mstyle}>Messages</button>
  //     <button onClick={()=>{setstate("Jobs")}} style={jstyle}>Jobs</button>
  //   </div>
  // )


     //RIGHT <APPROACH></APPROACH>
//   return(
//     <div>
//       <button onClick={()=>{setstate("Feed")}} style={{color:state=="Feed" ? "red" : "black"}}>Feed</button> 
//       {/* // sets color red when state=="Feed" */}
//       <button onClick={()=>{setstate("Notification")}} style={{color:state=="Notification" ? "red" : "black"}}>Notification</button>
//       <button onClick={()=>{setstate("Messages")}} style={{color:state=="Messages" ? "red" : "black"}}>Messages</button>
//       <button onClick={()=>{setstate("Jobs")}} style={{color:state=="Jobs" ? "red" : "black"}}>Jobs</button>
//     </div>
//   )
// }



//                                                                        6
// Add Todo #1 Todo #2 Todo #3 Todo #4 Buttons
// Whenever any Todo is click send a backend request to "https://jsonplaceholder.typicode.com/todos/" + todo_number, so it dynamically loads the todo
//  {"userId": 1,"id": 1,"title": "delectus aut autem","completed": false} the todos looks like this



// export default function App(){

//   const [state,setstate]=useState(0)
//   const [todo,settodo]=useState("")
//   const [loader,setloader]= useState(true)

//   useEffect(()=>{

//     setloader(true)
//     // Method 1
//     // fetch("https://jsonplaceholder.typicode.com/todos/" + state).then(
//     //   async res =>{
//     //     const json= await res.json()
//     //     settodo(json)
//     //   }
//     // )

//     // using simple async and await , Method 2


//     async function fetchData(){
//      const data = await fetch("https://jsonplaceholder.typicode.com/todos/" + state) // returns a promise which we await
//      const json = await data.json() // returns a promise which we await, parse krne mein bhi it calls server
//      settodo(json)
//      setloader(false) // after fetching the data turns loader to false
//     }
//     fetchData()


//   },[state])

// return(
//   <div>
//     <button onClick={()=>{setstate(1)}} style={{color:state==1 ? "red" : "black"}}>Todo #1</button> 
//     {/* // sets color red when state=="Feed" */}
//     <button onClick={()=>{setstate(2)}} style={{color:state==2 ? "red" : "black"}}>Todo #2</button>
//     <button onClick={()=>{setstate(3)}} style={{color:state==3 ? "red" : "black"}}>Todo #3</button>
//     <button onClick={()=>{setstate(4)}} style={{color:state==4 ? "red" : "black"}}>Todo #4</button>

//     <br />
//     {loader ? "Loading...." : todo.title}
//   </div>
// )
// }


//                                                                        7
// Use of cleanUp in use effect
// Show timer for 5 sec then disappear it for 5 sec, then again show it
// Timer should look like {second} second has elapsed


export default function App(){
  const [showtimer,settimer]=useState(true)

  useEffect(()=>{
    setInterval(()=>{settimer(showtimer=>!showtimer)},5000)},[]
  ) // runs on mounting
  return (
    <div>{ showtimer && <Timer />}</div>
    
  )
}

function Timer(){
  const [second,setsecond]=useState(1)

  useEffect(()=>{
    
    let clock=setInterval(()=>{
      console.log("inside the clock")
      setsecond(prev=>prev+1)},1000)

    // Cleanup function, runs when component is unmounted,setInterval actually stops
    // When cleanup function not called, when the component is unmounted, setInterval keeps running
    return ()=>{
      clearInterval(clock)
    }
  },[]) // runs of mounting

  return (
    <div>{second} seconds has elapsed</div>
  )
}


// We observed that clock is still running when the component unmount, which can cause performance issue on large scale, so whenver we don't need a component we can just use return ()=>{} to actually stop the clock, or unsubscribe to an event , ex- when we switch from feed to notification, i no longer need feed to send backend request/api calls, no longer need of feeds content, hence i need to unsubscribe to feeds component/ backend request, so we use cleanup function in this case, just add return ()=>{} at the end of useEffect hook
















