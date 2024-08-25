// State derived Frontend code

    //State - Variable part of the app
    let Todos = []
    let id=0;
    function addTodo() {

      const input_value=document.querySelector("input").value.trim(); //trims the spaces from left and right
      //tell user that he have inputted an empty value in TodoList
      if(input_value===""){
        alert('Please enter a task! ');
        return;
      }
      Todos.push({
        title: input_value,
        number:id
      })
      id++;
      document.querySelector("input").value = ""; //clear the input field.
      render();
    }

    //Component- HTML and CSS part of the app(wireframe)
    function createTodoComponent(todo) {
      const div = document.createElement("div");
      const divContent=document.createElement("div");
      divContent.setAttribute("class","divContent");
      const divDelete=document.createElement("div");
      divDelete.setAttribute("class","divDelete");
      const parentDiv=document.createElement("div");
      parentDiv.setAttribute("class","parentDiv");


      const p = document.createElement('p');
      const button = document.createElement("button");
      p.innerHTML = todo.title;
      div.setAttribute("class","todoDiv");
      // stylising the div
      div.style.marginLeft="80px"; 
      div.style.marginTop="30px";
      button.innerHTML = "Delete";
      button.setAttribute("class","delete");
      // complex delete shii - add in notebook
      button.onclick=()=>deleteTodo(todo.number);

      // I just added h1 to divContent, then button to divDelete, then added both divContent and divDelete into div
      divContent.append(p);
      divDelete.append(button);
      div.append(divContent);
      div.append(divDelete);
      parentDiv.append(div);
      return div // Div ke ander h1(task info) and delete button pack krdia, createTodoComponent(todo)=div
    }

    //Delete Todo - del div id
    function deleteTodo(todoIdToDelete){
      Todos=Todos.filter(todo=>todo.number!==todoIdToDelete) // todo is a parameter
      // Notice the todo => part? That's where the magic happens. The filter method calls the arrow function for each element in the Todos array, and the todo parameter represents the current element being processed. By using todo => todo.number !== del_todo, we're telling filter to keep only the elements where the number property is not equal to del_todo.
      render();
    }


    //Render- printing the result on the website
    function render() {
      document.querySelector("#todos").innerHTML = "";
      for (let i = 0; i < Todos.length; i++) {
        const element = createTodoComponent(Todos[i]);
        document.querySelector("#todos").appendChild(element);
      }
    }