    // const inputEl=document.querySelector("input");
    // console.log(inputEl);
    // console.log(document.querySelector("button"));
    // console.log(document.querySelector("button").innerHTML);

    function AddTodo(){
      const inputEl=document.querySelector("input");
      const value=inputEl.value;
      console.log(value);
    }
    // To delete the html element
    function delete_todo(index){
      const element=document.getElementById("todo-"+index);
      element.parentNode.removeChild(element);
    }

    //Writing a function that updates the number of task1 after each 1 sec

    //Updating in DOM
    //Method-1
    // let variable=2;
    // function update(){
    //   if(variable<=10){
    //     document.querySelector("h4").innerHTML=variable+". Task1";
    //     console.log(variable);
    //     variable+=1;
    //     setTimeout(update,1000);
    //   }
    // }
    // setTimeout(update,1000);


    //Method-2 using setInterval
    // let ctr=1;
    // function update(){
    //   document.querySelector("h4").innerHTML=ctr+". Task1";
    //   ctr+=1
    // }
    // setInterval(update,1000);


