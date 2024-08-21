//Old code 

let ctr = 1;
function addtodo() {
  // Reading the data
  const info = document.querySelector("input").value;
  //Adding the data 
  const div1 = document.createElement("div");
  div1.setAttribute("id", ctr);
  div1.style.marginLeft="80px";
  div1.style.marginTop="30px";
  div1.innerHTML = "<div class='info'>" + info + "</div> <div class='delete-div'><button class='delete' onclick='deletetodo(" + ctr + ")' >Delete</button></div>";
  ctr += 1;
  document.querySelector(".container1").appendChild(div1);
}
//Deleting todo list
function deletetodo(ctr) {
  const element = document.getElementById(ctr);
  element.parentNode.removeChild(element);
}



// State derived Frontend code

//State - Variable part of the app
function addTodo(){
  Todos=[]
  Todos.push({
    title:document.querySelector("input").value
  })
  render()
}

//Component- HTML and CSS part of the app(wireframe)
function createTodoComponent(todo){
  const div=document.createElement("div")
  const h1=document.createElement("h1")
  const button=document.createElement("button")
  h1.innerHTML=todo.title
  button.innerHTML="Delete"
  div.appendChild(h1)
  div.appendChild(button)
  return div // Div ke ander h1(task info) and delete button pack krdia, createTodoComponent(todo)=div
}

//Render- printing the result on the website
function render(){
  document.querySelector("#todos").innerHTML=""
  for(let i=0;i<todos.length;i++){
    const element=createTodoComponent(Todos[i])
    document.querySelector("#todos").appendChild(element)
  }
}
