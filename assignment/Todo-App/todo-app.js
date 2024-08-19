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