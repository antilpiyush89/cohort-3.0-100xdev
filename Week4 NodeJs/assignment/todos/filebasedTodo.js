const express=require("express")
const app=express()
const fs=require("fs")
let todoDatabase=[]
fs.readFile("todoDatabaseF.js","utf-8",(err,data)=>{
  todosDatabase=data
})
todosDatabase=[{
  title:"Exercise",
  description:"Go to Gym",
  completed:false,
  id:1
},{
  title:"Breakfast",
  description:"Eat Oats",
  completed:false,
  id:2
}]
app.use(express.json()); //imp -To fix this issue, you need to add a middleware to parse the request body as JSON. You can use the express.json() middleware to achieve this.


//  1.GET /todos - Retrieve all todo items
app.get("/todos",(req,res)=>{
  res.json(todosDatabase)
})

//2. GET /todos/:id - Retrieve a specific todo item by ID
app.get("/todos/:id",(req,res)=>{
  const specificID=req.params.id
  let SpecificIDtodoPresent=false
  for(let i=0;i<todosDatabase.length;i++){
    if(todosDatabase[i].id==specificID){
      SpecificIDtodoPresent=true
      SpecificIDtodo=todosDatabase[i]
    }
  }
  if(SpecificIDtodoPresent){
    res.json(SpecificIDtodo)
  }else{
    res.status(404).send('Todo cannot be found')
  }

  
})

//3. POST /todos - Create a new todo item
app.post("/todos",(req,res)=>{
  const title=req.body.title
  const completed=req.body.completed
  const description=req.body.description
  let idOfAddedTodo=1;
  for(let i=0;i<todosDatabase.length;i++){
    idOfAddedTodo+=1;
  }
  
  todosDatabase.push({
    title,
    completed,
    description,
    id:idOfAddedTodo
  })
  res.status(200+idOfAddedTodo).json(todosDatabase)

})

// 4. PUT /todos/:id - Update an existing todo item by ID
app.put("/todos/:id",(req,res)=>{
  const CompletedTaskID=req.params.id
  let GetSpecificIDtodoPresent=false
  let CompletedTodo=[]
  for(let i=0;i<todosDatabase.length;i++){
    if(todosDatabase[i].id==CompletedTaskID){
      GetSpecificIDtodoPresent=true
      todosDatabase[i].completed=true
      CompletedTodo=todosDatabase[i]
    }
  }
  if(GetSpecificIDtodoPresent){
    res.json(CompletedTodo)
  }else{
    res.status(404).send('Todo cannot be found, incorrect ID provided')
  }

})

//5. DELETE /todos/:id - Delete a todo item by ID
app.delete("/todos/:id",(req,res)=>{
  const TodoDeleteTaskID=req.params.id
  let DeletedIDpresent=false
  
  for(let i=0;i<todosDatabase.length;i++){
    if(todosDatabase[i].id==TodoDeleteTaskID){
      DeletedIDpresent=true
      todosDatabase.splice(i,1) // remove 1 element at index 2
    }
  }
  if(DeletedIDpresent){
    res.json(todosDatabase)
  }else{
    res.status(404).send('Todo cannot be deleted, incorrect ID provided')
  }

})
