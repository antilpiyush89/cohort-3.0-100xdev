import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { PostComponent } from './post'
import './App.css'
import React from 'react'


//React Notes => https://petal-estimate-4e9.notion.site/React-Part-1-1177dfd1073580069172fc54e33929c0
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

// Practise for revision
// function App(){
//     const [currentTab,setTab]=useState(0)
//     const [Loading,setLoading]=useState(true)
//     const [tabdata,setTabdata]=useState({})

//     useEffect(()=>{
//         setLoading(true)
//         fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
        
//             async res=>{
//                 const json = await res.json()
//                 setTabdata(json)
//                 setLoading(false)
//             }
//         )
    
//     },[currentTab])


//     return(
//         <div>
//             <button onClick={()=>{setTab(1)}} style={{color: currentTab == 1? "red" : "black"}}>Todo#1</button>
//             <button onClick={()=>{setTab(2)}} style={{color: currentTab == 2? "red" : "black"}}>Todo#2</button>
//             <button onClick={()=>{setTab(3)}} style={{color: currentTab == 3? "red" : "black"}}>Todo#3</button>
//             <button onClick={()=>{setTab(4)}} style={{color: currentTab == 4? "red" : "black"}}>Todo#4</button>
//             <br />
//             {Loading ? "Loading...":tabdata.title}
//         </div>
//     )
// }

// export default App


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


// export default function App(){
//   const [showtimer,settimer]=useState(true)

//   useEffect(()=>{
//     setInterval(()=>{settimer(showtimer=>!showtimer)},5000)},[]
//   ) // runs on mounting
//   return (
//     <div>{ showtimer && <Timer />}</div>

//   )
// }

// function Timer(){
//   const [second,setsecond]=useState(1)

//   useEffect(()=>{

//     let clock=setInterval(()=>{
//       console.log("inside the clock")
//       setsecond(prev=>prev+1)},1000)

//     // Cleanup function, runs when component is unmounted,setInterval actually stops
//     // When cleanup function not called, when the component is unmounted, setInterval keeps running
//     return ()=>{
//       clearInterval(clock)
//     }
//   },[]) // runs of mounting

//   return (
//     <div>{second} seconds has elapsed</div>
//   )
// }


// We observed that clock is still running when the component unmount, which can cause performance issue on large scale, so whenver we don't need a component we can just use return ()=>{} to actually stop the clock, or unsubscribe to an event , ex- when we switch from feed to notification, i no longer need feed to send backend request/api calls, no longer need of feeds content, hence i need to unsubscribe to feeds component/ backend request, so we use cleanup function in this case, just add return ()=>{} at the end of useEffect hook



//                                                                        7
// Concept of children in react
// It is used to directly render the html css inside the component, ex- i made a Card component, and in that card component i need card title and card description to be rendered directly, i can do just 
// <Card> html css that is needed to be rendered </Card>, if i need that card twice, write the Card tag again with html css inside
// The html css inside the component tag inside function App() is called children, and it is passed as an parameter in Component function as function Component({children}){ }, use {children} to render the html css

// export default function App(){
//   return(
//     <div>
//       <Card>
//         <h2>Card Title</h2> {/* passes as children */}
//         <p>This is some content inside the card</p> {/* passes as children */}
//       </Card>
//       <Card>
//         <h2>Another Card</h2> {/* passes as children */}
//         <p>This card has different content</p> {/* passes as children */}
//       </Card>
//     </div>
//   )
// }

// // Card component which has div, with children inside
// function Card({children}){ 
//   // {children} imp to pass children in this way
//   return (
//     <div style={{width:500, margin:20, padding:20,paddingTop:5, backgroundColor:'white', borderRadius:5,border:'1px solid black', boxShadow:'2px 2px 5px rgba(0,0,0,0.1'}}>
//       {children}
//     </div>
//   )
// }




//                                                                        8
// List and keys
// ul is an HTML element that stands for "unordered list". It is used to define a list of items that do not have a specific order or sequence.
// When you use ul in your HTML code, it creates a list of items that are typically displayed with bullet points or discs. Each item in the list is represented by an li element, which stands for "list item".
// Here's an example of how ul and li are used together
// Output should be -  *Piyush  * is the bullet point
// *Harkirat
// *Sushant

//Ex-1
// export default function App(){

//   const Items=[{id:1,nam:"Piyush"},{id:2,nam:"Harkirat"},{id:3,nam:"Sushant"}]
//   return(
//     <div>
//       <ItemComponent Items={Items}/>
//     </div>
//   )

// }

// function ItemComponent({Items}){

//   return (
//     <ul> {Items.map(item=>( <li key={item.id}> {item.nam} </li>))}
//       </ul>
//   )

// }



// Ex-1, practise
// Output should be -  *Piyush  * is the bullet point
// *Harkirat
// *Sushant

// export default function () {
//   const Items = [{ id: 1, nam: "Piyush" }, { id: 2, nam: "Harkirat" }, { id: 3, nam: "Sushant" }]

//   return (
//     <ItemComponent items={Items} />
//   )
// }

// function ItemComponent(props) {

//   return (
//     <ul>
//       {props.items.map(item => (<li key={item.id}>{item.nam}</li>))}
//       {/* props.items=Items, instead of props u can even use {items} */}
//     </ul>
//   )
// }


// Keys are imp bcz, for ex- idhar keys specify kardi har list ki inside their tags, if Piyush wali key is deleted, instead of rerendering the whole page, react just delete the key aur niche wale elements ko just upar shift krdega, no need for rerender, website need less computation and loads faster

// Ex-2
// Output should be -  Go to Gym done
//                  -  Coding not done

// export default function App() {
//   const Todos = [{ id: 1, title: "Go to Gym", done:true }, { id: 2, title: "Coding",done:false }]

//   return (
//     <TodoComponent todos={Todos} />
//   )
// }

// function TodoComponent(props) {

//   return (
//     <ul>
//       {props.todos.map(todo => (<li key={todo.id}>{todo.title} {todo.done ? "done" : "not done"}</li>))}
//     </ul>
//   )
// }

//                                                                  9
// Lifecycle events
// 1. Mounting - component first appeared , updating - when state changes, component being rerendered
//  unmounting - when component is removed



//                                                                  10
// Error boundary
// Even if error occurs in the child component of the whole page, it causes the whole page to crash, but using boundary we can limit this error within the boundary of child component, by displaying a fallback UI in it, ex- something went wrong

// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.
// Error boundaries only exist in class based components

// EXAMPLE 
// this.state-{hasError: false } initialises that the state has no error
// if state caughts any error it sets the error as true with return { hasError: true }; 
// then it render using render() function
// to throw any error in a component just do throw new Error ('I crashed or anything') 
// if you confine that buggycomponent within error boundary, your whole page will not crash, when an error occurs, just a fallback UI appears in place of child component which has error
// Below is the example showing how u can set a errorboundary for a component
//         <ErrorBoundary>
//             <BuggyComponent />
//         </ErrorBoundary>

// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, info) {
//         console.error("Error caught:", error, info);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>;
//         }

//         return this.props.children; 
//     }
// }

// const BuggyComponent = () => {
//     throw new Error("I crashed!");
// };

// export default function App(){
//     return (
//       <div style={{backgroundColor:'lightblue'}}>
//         <ErrorBoundary>
//             <BuggyComponent />
//         </ErrorBoundary>
//         <ErrorBoundary>
//         <BuggyComponent />
//         </ErrorBoundary>
//         </div>
//     );
// };


//                                                   11
// Fragments
// In React, a component can return a single parent element, but it can contain multiple children within that single parent

// you can't return two parent element in react, but you can using fragment, fragment is just an empty html tag
// <> </> - fragment

// const MyComponent = () => {
//   return (
//       <h1>Hello</h1>
//       <p>World</p> // This line will cause an error
//   );
// };


// Correct Code
//const MyComponent = () => {
//   return (
//     <>
//         <h1>Hello</h1>
//         <p>World</p>
//     </>
// );
// };



//                                                   12
// SPA - # Single page applications, routing
// Single Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. This approach allows for a smoother user experience compared to traditional multi-page applications (MPAs), where each interaction often requires a full page reload.
// 1. npm install react-router-dom
// Basically for header same rahe, footer same rahe, bich ka main content can be updated, without reloading the side, without sending additional request to backend to load html/css hence making a SPA 
// User clicks on header tab and content just change dynamically, we also did this previously using fetch, now we can do it with just few lines of code
// import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// export default function App(){

//   return(
//     <BrowserRouter>
//     <Routes>
//       {/* Layout is parent element, the whole page has to adhere to layout */}
//     <Route path="/" element={<Layout/>}>
//       <Route path="/allen" element={<Landing/>} > </Route>
//       <Route path="/class11" element={<Class11comp/>} > </Route>
//       <Route path="/class12" element={<Class12comp/>} > </Route>
//       <Route path="*" element={<NoContent/>} > </Route> 
//       {/* for a path that does not exist/random path we can render a component using * */}
//     </Route>
//     </Routes>

//     </BrowserRouter>
//   )
// }

// // Layout is printed everytime
// function Layout(){
//   return(
//     <div>
//     <Header />
//     <br />
//     <Outlet />
//     {/* Outlet contain whatever component that is stick to a path */}
//     {/* example- if user goes to /allen, control is handed over to App() function then from route it render Landing page, in the main content, similarly for other paths, outlet is changed, very imp to make layout as parent element */}
//     <br />
//     Footer
//     </div> 
//   )

// }
// function Landing(){
//   return(
//     <div>
//       Welcome to Allen
//     </div>
//   )
// }
// function Class11comp(){
//   return(
//     <div>
//       Welcome to Class 11
//     </div>
//   )
// }
// function Class12comp(){
//   return(
//     <div>
//       Welcome to Class 12
//     </div>
//   )
// }

// function Header(){
//   return(
//     <div>
//     <Link to="/allen">Allen</Link>
//     <Link to="/class11">Class 11</Link>
//     <Link to="/class12">Class 12</Link>
//     </div>
//   )
// }

// function NoContent(){
//   return(
//     <div>
//       No Content can be found
//     </div>
//   )
// }




//                                                                    13
// Concept of useRef() hook
// ### What is `useRef`?
// In React, `useRef` is a hook that provides a way to create a **reference** to a value or a DOM element that persists across renders but **does not trigger a re-render** when the value changes.
// ### Key Characteristics of `useRef`:
// 1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables.
// 2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. This is different from state (`useState`), which triggers a re-render when updated.


//               Creating a reference to a DOM element
// When submit button is clicked, the input field should be focussed
// method 1
// export default function App(){

//   function focusinput(){
//     setTimeout(()=>{
//       document.getElementById("focus").focus()
//     },2000)
      
//      // focuses the input field after 2 sec
//   }
//   return(
//     <div>
//       <input id="focus" type="text" style={{padding:20, width:300, margin:20}} placeholder='Click on the Submit button to focus me'/>
//       <button onClick={focusinput}>Focus</button>
//     </div>
//   )
// }

//Method 2 using useRef() hooks

// export default function App(){
//   const inputRef=useRef(); // This creates a ref object (inputRef) that can be attached to a DOM element, in this case, an <input> field.
//   //When you create a ref using useRef(), it returns an object like this:
//   // const inputRef = { current: null };
//   // Initially, inputRef.current is null because the ref is not yet attached to any DOM element. When the component renders and the <input> element is created, React automatically updates inputRef.current to point to the actual DOM node of the input field.
//   function focusinput(){
//     inputRef.current.focus()
//   }
//   return(
//     <div>
//       <input ref={inputRef} type="text" style={{padding:20, width:300, margin:20}} placeholder='Click on the Submit button to focus me'/>
//             {/* The ref={inputRef} attribute links the inputRef to the input field, so after the component is mounted, inputRef.current will point to the actual DOM node of the input field. */}

//       <button onClick={focusinput}>Focus</button>

//     </div>
//   )
// }



// make a stopwatch, when you click start the clock starts, when you click stop the clock stops
// we are gonna discuss 3 methods to make this, and in the end will tell you why useRef() is the best approach

// method 1 - using a raw timer variable, the stop button is unusable bcz, in every render the timer gets reinitialised to 0, hence the Stopclock is called on timer=0, and as we know timer stores a unique Interval ID in    
//  timer=setInterval(function(){
//       setCount(c=>c+1)
//     },1000) , hence for clearInterval(0), it just doesn;t clear the interval
// export default function App(){
//   const [count,setCount]=useState(0)
//   let timer=0
//   function Startclock(){
//     timer=setInterval(function(){
//       setCount(c=>c+1)
//     },1000)
//   }
//   function Stopclock(){
//     clearInterval(timer) // you can't access timer here, if timer only defined in the Startclock function
//   }
//   return(
//     <div>
//       <div>{count}</div>
//       <button onClick={Startclock}>Start</button>
//       <button onClick={Stopclock}>Stop</button>
//     </div>
//   )
// }


//method 2
//using useState() hook 
//con- one extra rerender, change in its value causes a rerender, but the value does persist along rerenders of other comp, bcz useState() is guarded from rerenders
// export default function App(){
//   const [count,setCount]=useState(0)
//   const [timer,settimer]=useState(0)
//   function Startclock(){
//     const value=setInterval(function(){
//       setCount(c=>c+1)
//     },1000)
//     settimer(value)// it causes an extra rerender, we don't need a rerender, when the state isn't even being used on the website, the clocks stops on clicking stop button, but one extra rerender happen which is not good
//   }
//   function Stopclock(){
//     clearInterval(timer) //clearInterval() is used to stop a timer that was previously created using setInterval().


//   }
//   return(
//     <div>
//       <div>{count}</div>
//       <button onClick={Startclock}>Start</button>
//       <button onClick={Stopclock}>Stop</button>
//     </div>
//   )
// }


//method 3
//using useRef() hook 
//pro- is that change in its value doesn;t cause a rerender, and its value persist across rerender of other component
// export default function App(){
//   const [count,setCount]=useState(0)
//   const timer=useRef() // ref object(timer) with current:null is created, the ref object isn't attached to any dom element/value
//   function Startclock(){
//     const value=setInterval(function(){
//       setCount(c=>c+1)
//     },1000)
//     timer.current=value// ref object(timer) is now attached with the value, value // changes in value of value doesn't cause rerender, and this value presist across rerender of other component/ it is guarded from rerenders
//   }
//   function Stopclock(){
//     clearInterval(timer.current) //clearInterval() is used to stop a timer that was previously created using setInterval().


//   }
//   return(
//     <div>
//       <div>{count}</div>
//       <button onClick={Startclock}>Start</button>
//       <button onClick={Stopclock}>Stop</button>
//     </div>
//   )
// }


//                                                                    14
//# Rolling up the state, unoptimal re-renders
// As your application grows, you might find that multiple components need access to the same state. Instead of duplicating state in each component, you can lift the state up to the LCA(lowest common ancestor), allowing the common ancestor to manage it.
// But this is unoptimal

// export default function App(){
  
//   return(
//     <div>
//     <Light/>
//     </div>
//   )
// }

// here lca for LightBulb component and Toggle component is Light component so i store my state here, so both LightBulb component and Toggle component can access the state, varna App mein state defined karke usse APP --> LIGHT --> LIGHTBULB AND TOGGLE mein pass krna padta ab bas LIGHT --> LIGHTBULB AND TOGGLE, krna padta h, still too many prop used, what if prop chain bohot lambi ho, what if bohot saari state ho, fir toh ye pass pass karne ka game bohot bada and weird hojayega, isliye we use statemanagement libraries jisse, sirf ek jagah state define krdo aur fir bas unkoo jiss component mein access krna h easily krlo, without playing the passing game from one component to another component, ye passing game ko prop chain bolte LIGHT --> LIGHTBULB AND TOGGLE(hmare mein ye prop chain h), for a big codebase this can be a fucking annoying problem, hence use state management libraries


// function Light(){
//   const [BulbOn,setbulbon]=useState(true)
//   return(
//     <div>
//     <LightBulb BulbOn={BulbOn}/>
//     <Toggle BulbOn={BulbOn} setbulbon={setbulbon}/>
//     </div>
//   )
// }


// function LightBulb({BulbOn}){
//   return(
//     <div>
//     {BulbOn ? "Bulb On":"Bulb Off"}
//     </div>
//   )
// }

// function Toggle({BulbOn,setbulbon}){
//   return(
//     <div> 
//       <button onClick={()=>setbulbon(!BulbOn)}>Toggle</button>
//     </div>
//   )
// }


// PROP DRILLING -- **Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:

// - **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
// - **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.


// Solution to Prop drilling 
//                                                                15
// # 21. Context API

//  The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level. 

// ### Jargon

// - **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
// - **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
// - **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)


// const BulbContext= createContext() // Step1 - Creating the Context


// //Method-2
// function ButtonContextProvider({children}){
//   const [BulbOn,setbulbon]=useState(true)
//   return(
//   <BulbContext.Provider value={{BulbOn:BulbOn,setbulbon:setbulbon}}> 
//       {/* // Step-2 Wrapping the component into the Context Provider, this provides the context to the children component of BulbContext.Provider, now down the chain jitne mein component h iske ander can use the context value, ek jagah define krdia hamne, now we can use the state anywhere */}
//   {children}
//   </BulbContext.Provider>
//     )
// }

// export default function App(){
  
//   return(

    //Method1- Basic
    // <div>
    // <BulbContext.Provider value={{BulbOn:BulbOn,setbulbon:setbulbon}}> 
    //   {/* // Step-2 Wrapping the component into the Context Provider, this provides the context to the children component of BulbContext.Provider, now down the chain jitne mein component h iske ander can use the context value, ek jagah define krdia hamne, now we can use the state anywhere */}
    // <Light/>
    // </BulbContext.Provider>
    // </div>

    //Method2- Organised way
//     <div>
//       <ButtonContextProvider>
//       <Light/> 
//       {/* Light is children to ButtonContextProvider component bcz it is wrapped inside it */}
//       </ButtonContextProvider>
//     </div>
//   )
// }

// function Light(){
  
//   return(
//     <div>
//     <LightBulb />
//     <Toggle />
//     </div>
//   )
// }


// function LightBulb(){
//   const {BulbOn}=useContext(BulbContext) // Step-3 Consuming the context, as value inside BulbContext is an object, so we need to destructure it hence {BulbOn}
//   return(
//     <div>
//     {BulbOn ? "Bulb On":"Bulb Off"}
//     </div>
//   )
// }

// function Toggle(){
//   const {BulbOn,setbulbon}=useContext(BulbContext)
//   return(
//     <div> 
//       <button onClick={()=>setbulbon(!BulbOn)}>Toggle</button>
//     </div>
//   )
// }


//                                                              16
// One problem arises- a component which is static and not even changing is still rerendring, the toggle button is static its content is not changing but is still rerendring it is a problem, so to tackle this issue we use state management libraries such as recoil

//                                                              17
// We use Recoil because button like increase and decrease which does not have to rerender doesn't get rerendered, it is a problem, so we use state management libraries such as recoil, Only currentcount component gets rerendered
// To minimise the number of re-renders, and ensure that only components that are `subscribed` to a value `render`, state management was introduced.

// There are many libraries that let you do state management - 

// 1. mobx
// 2. recoil
// 3. redux

// Here is a simple example with `recoil`

//With using useState


// export default function App(){
//     return(
//         <Counter/>
//     )

// }

// function Counter(){
//     const [count,setcount]=useState(0)
//     return(
//         <div>
//         <CurrentCount count={count}/>
//         <Increase setcount={setcount}/>
//         <Decrease setcount={setcount}/>
//         </div>
//     )
// }

// function CurrentCount({count}){
    
//     return(
//         <div>
//         {count}
//         </div>
//     )
// }

// function Increase({setcount}){
//     function increase(){
//         setcount(c=>c+1)
//     }
//     return(
//         <div>
//             <button onClick={increase}>Increase</button>
//         </div>
//     )

// }

// function Decrease({setcount}){
//     function Decrease(){
//         setcount(c=>c-1)
//     }
//     return(
//         <div>
//             <button onClick={Decrease}>Decrease</button>
//         </div>
//     )

// }


// //With using Recoil
import { RecoilRoot,atom,useRecoilState,useRecoilValue,useSetRecoilState,selector, useRecoilValueLoadable} from "recoil"
import { useMemo } from 'react'

// Step1- An atom has to be defined, Atom in Recoil is equivalent to deconstructing useState in React
// const NewAtom=atom({
//     key:"countvalue",  // unique ID (with respect to other atoms/selectors
//     default:0           // default value (aka initial value))
//  })
// Key is used to uniquely identify an Atom/Selector in Recoil
// default value is the initial value
// Step 1.1- You have to wrap the parent component in RecoilRoot
// Step2- const count = useRecoilState(NewAtom) hook is used to access the value of the atom
// Step3- const setCount= useSetRecoilState(NewAtom) hook is used to set/update the value of the atom


// const countAtom = atom({
//     key:"countvalue",  // unique ID (with respect to other atoms/selectors)
//     default:0 // default value (aka initial value)
// });
// export default function App(){
//     return(
//         <RecoilRoot>
//         <Counter/>
//         </RecoilRoot>

//     )

// }

// function Counter(){
//     return(
//         <div>
//         <CurrentCount/>
//         <Increase/>
//         <Decrease/>
//         </div>
//     )
// }

// function CurrentCount(){
//     const count=useRecoilState(countAtom)
//     return(
//         <div>
//         {count}
//         </div>
//     )
// }

// function Increase(){
//     const setcount=useSetRecoilState(countAtom)
//     function increase(){
//         setcount(c=>c+1)
//     }
//     return(
//         <div>
//             <button onClick={increase}>Increase</button>
//         </div>
//     )

// }

// function Decrease(){
//     const setcount=useSetRecoilState(countAtom)
//     function Decrease(){
//         setcount(c=>c-1)
//     }
//     return(
//         <div>
//             <button onClick={Decrease}>Decrease</button>
//         </div>
//     )

// }


//                                                                                 Use of selector in Recoil
// Selector is derived from a single atom
// Let's say if i want to check if the count is even, so i can make a selector out of atom, which can check if the count was even, and display it to the screen, hence to do that the value of selector has to be derived from an atom
// Selector is a subset of atom, It's properties is just like an Atom, but u can only read/filter the value of the derived atom using useRecoilValue hook
// How to define a selector is given below

// Specific use of selector 
// Let's say I have 

// A global atom manages messages,notification,feeds and count
// {
//     messages:10,
//     notifications:5,
//     feeds:20,
//     count:30
// }

// But If only the messages changes, the rest of the component which has subscribed to the global atoms will get rendered too, so to reduce this additional rendering of other components beside messages, we can use selector to derive a new atom from the global atoms, so when the messages changes the other component will not get rendered, let's say I made a new selector called notificationSelector which will return the value of notifications Now my component can just subscribe to notificationSelector instead of the global atom, so whenever the value of notification changes, only the notification selector will get rendered, and not the rest of the components

// const countAtom=atom({
//     key:"countvalue",
//     default:0
// })

// const EvenSelector=selector({
//     key:"evenselector",
//     get: function({get}){ // get is a key, outside and inside the function
//         const countVal=get(countAtom) // gets the value of countAtom (Atom) and store it in countVal
//         return countVal%2==0 // Check for even, Hence return either true or false
//     }
// })

// export default function App(){
//     return(
//         <RecoilRoot>
//             <Buttons/>
//             <Counter/>
//             <IsEven/>
//         </RecoilRoot>
//     )
// }

// function Buttons(){
//     const setcount= useSetRecoilState(countAtom)
//     return(
//         <div>
//         <button onClick={()=>{setcount(c=>c+2)}}>Increase</button>
//         <button onClick={()=>{setcount(c=>c-1)}}>Decrease</button>
//         </div>
//     )
// }

// function Counter(){
//     const count=useRecoilState(countAtom)
//     return(
//         <div>
//         {count}
//         </div>
//     )
// }

// function IsEven(){
//     const isEven=useRecoilValue(EvenSelector)
//     return(
//         <div>
//         {isEven ? "Even" :"Odd" }
//         </div>
//     )
// }


// Advance example of atoms and selector
// It shows a top bar with Home button, Mynetwork button, Jobs button, Messaging button, Notifications button and total number of notifications 
// I have defined the atoms and selector in a diff file atomsbackend.js
//Asynchronous data queries 
//Showing data in the topbar by actually calling a backend api
// Pulling data from a backend


// import { TopbarNotificationAtom, totalnotificationselector1} from './atomsbackend'

// export default function App(){
//     return(
//         <RecoilRoot>
//             <Topbar/>
//         </RecoilRoot>
//     )
// }

// function Topbar(){

//     const random = useRecoilValue(TopbarNotificationAtom)
//     const networkcount = random.network
//     const jobcount = random.jobs
//     const messagecount= random.messaging
//     const notificationcount =random.notification

//     const totalnotifications= useRecoilValue(totalnotificationselector1)
//     console.log(totalnotifications)


//     return(
//         <div>
//             <button>Home</button>
//             <button>Mynetwork ({networkcount>=100 ? "+99" : networkcount})</button>
//             <button>Jobs ({jobcount >=100 ? "+99" : jobcount})</button>
//             <button>Messaging ({messagecount >=100 ? "+99" : messagecount})</button>
//             <button>Notifications ({notificationcount >=100 ? "+99" : notificationcount})</button>
//             <button>Me ({totalnotifications})</button>
//         </div>
//     )
// }



// ATOM FAMILY
// I have defined the atomfamily in a diff file atomfamily.js
// atomFamily is just a way to create atoms dynamically so each component like Todo can have its own atoms, without having to create a new atom for each component
// import { todoatomfamily } from './atomfamily'
// export default function App(){

//     return(
//         <RecoilRoot>
//         <Todo id={1}/>
//         <Todo id={2}/>
//         <Todo id={3}/>
//         <Todo id={4}/>
//         </RecoilRoot>

//     )
// }

// function Todo({id}){
//     const todo = useRecoilValue(todoatomfamily(id)) // returns the todo object with the specific id, by matching that id inside the atomFamily
//     return(
//         <div>
//             {todo.id + " "}
//             {todo.Target}
//             {todo.Completed ? " "+ "Completed" : " Not Completed "}
//             {todo.Timeconstraint}
//         </div>
//     )

// }


// Async Data Queries in atomfamily can only be done by using selectorfamily
// I have made the atom family inside the atomfamily-backend.js
// If you want to pull data from the backend and not from some hardcoded value, this is the only way

// import { Todobackendfamily } from './atomfamily-backend'
// export default function App(){

//     return (
//         <RecoilRoot>
//             <Todo id={1}/>
//             <Todo id={2}/>
//             <Todo id={3}/>
//             <Todo id={4}/>

//         </RecoilRoot>
//     )
// }

// function Todo({id}){
//     const finaltodo = useRecoilValue(Todobackendfamily(id))
//     return(
//         <div>
//             {"id:" + finaltodo.id + " "}
//             {"Title:" + finaltodo.title + " "}
//             {"Body:"+ finaltodo.body + " "}
//         </div>
//     )
// }


// useRecoilValueLoadable returns you three things
// state: "hasValue" | "hasError" | "loading"
// contents: undefined | value | error
// It is important to use useRecoilValueLoadable when you are using async data queries, as it can help you to show data in a better way by showing a loader while the data is being fetched
import { Todobackendfamily } from './atomfamily-backend'
export default function App(){


    return (
        <RecoilRoot>
            <Todo id={1}/>
            <Todo id={2}/>
            <Todo id={3}/>
            <Todo id={4}/>

        </RecoilRoot>
    )
}

function Todo({id}){
    
    const finaltodo = useRecoilValueLoadable(Todobackendfamily(id))

    if (finaltodo.state ==="loading"){
        return (
            <div> Loading....</div>
        )
    }
    
    if (finaltodo.state ==="hasValue"){
        return(
            <div>
                {"id:" + finaltodo.contents.id + " "}
                {"Title:" + finaltodo.contents.title + " "}
                {"Body:"+ finaltodo.contents.body + " "}
            </div>
        )
    }
    if (finaltodo.state ==="hasError"){
        return(
            <div> Error in the backend</div>
        )
    }

}



