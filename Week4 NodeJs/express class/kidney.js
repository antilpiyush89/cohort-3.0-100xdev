const express = require("express");
const app = express();
const users = [{
  name: "John",
  kidney: [{
    healthy: false
  }]
}]

// GET Request
app.get("/", function (req, res) {
  const johnkidney = users[0].kidney; //   kidney:{healthy:false} access this
  const noOfKidney = Object.keys(johnkidney).length // =1
  let noOfHealthyKidney = 0;
  for (let i = 0; i < johnkidney.length; i++) {
    if (johnkidney[i].healthy) {
      noOfHealthyKidney += 1;
    }
  }

  // Let's break down the line let noOfHealthyKidney = johnkidney.healthy ? 1 : 0; step by step:
  // johnkidney.healthy: This accesses the healthy property of the johnkidney object, which is a boolean value (true or false).
  // ?: This is the conditional operator (also known as the ternary operator). It's a shorthand way of writing an if-else statement.
  // 1: This is the value that will be assigned to noOfHealthyKidney if the condition johnkidney.healthy is true.
  // : 0: This is the value that will be assigned to noOfHealthyKidney if the condition johnkidney.healthy is false.

  // use ctrl+c to stop the server


  const noOfUnhealthyKidney = noOfKidney - noOfHealthyKidney
  res.json({
    noOfKidney,
    noOfHealthyKidney,
    noOfUnhealthyKidney
  })
})

app.use(express.json()); // imp- without it error aate h
// POST Request - client server ko data bhejega
// How to send POST request to the server- use POSTMAN
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  //   The error message indicates that users[0].kidney.push is not a function. This is because users[0].kidney is an object, not an array.

  // In JavaScript, the push method is used to add elements to an array, but it's not applicable to objects.

  // To fix this issue, you can change the kidney property of the users object to be an array, like this:
  // const users = [{
  //   name: "John",
  //   kidney: [{ healthy: false }]
  // }];

  users[0].kidney.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done"
  })
})

//PUT Request Method- update krna data/ exactly like editing and updating existing todo
// we will update all the unhealthy kidneys to healthy kidneys
app.put("/", function (req, res) {
  if(isThereAtleastOneUnhealthyKidney()){
    const johnkidney = users[0].kidney;
    for (let i = 0; i < johnkidney.length; i++) {
      johnkidney[i].healthy = true;
    }
  
    res.json({
      msg: "Updated"
    })
  }
  else{
    res.status(411).json({
      msg:"No unhealthy kidney to replace"
    })
  }

})

//DELETE Request Method- Delete all the unhealthy kidney and make a new array
app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidney = [];
    for (let i = 0; i < users[0].kidney.length; i++) {
      if (users[0].kidney[i].healthy) {
        newKidney.push({
          healthy: true
        })
      }
    }

    // iski-jagah johnkidney=johnkidney.filter(kidney=>kidney.healthy)
    users[0].kidney = newKidney;
    res.json({
      msg: "deleted unhealthy kidneys"
    })
  }
  else{
    res.status(411).json({
      msg:"No unhealthy kidney to delete"
    })
  }
})

//Edge cases- for put and delete routes, eg- if user tries to delete a unhealthy kidney or tries to change unhealthy kidney to healthy kidney
//using put route but their are no unhealthy kidney, in that cases we get a server error/server crashes, so can just make a check and send status code, if user tries to
//send invalid input, we send 411 status code- user input invalid

function isThereAtleastOneUnhealthyKidney() {
  AtleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidney.length; i++) {
    if (!users[0].kidney[i].healthy) { // to check unhealthy kidney
      AtleastOneUnhealthyKidney = true;
    }
    return AtleastOneUnhealthyKidney
  }
}
app.listen(3002);