
const users=[{
  name:"John",
  kidney:{
    healthy:false
  }
}]

const johnkidney=users[0].kidney; //   kidney:{healthy:false} access this
const noOfKidney=Object.keys(johnkidney).length // =1

console.log(johnkidney)
console.log(noOfKidney)
