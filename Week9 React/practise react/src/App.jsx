import { useEffect, useState } from 'react'
import { PostComponent } from './post'
import './App.css'





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





//Renamed postComponent to PostComponent since React requires component names to start with an uppercase letter
//React must also return a single div


// Learnt useState, react, conditional rendering, that react App() must return a single div, React component name must start with Capital letter, use of props, ex- if we change props the output component also changes, props is the state, on state change a rerender is triggered by the react


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
