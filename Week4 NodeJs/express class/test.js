
const users=[{
  name:"John",
  kidney:[{healthy:false},{healthy:true},{healthy:false},{healthy:true},{healthy:false}]
}]

const johnkidney=users[0].kidney; //   kidney:{healthy:false} access this
const noOfKidney=johnkidney.length // =1


console.log(johnkidney)
console.log(noOfKidney)
users[0].kidney=users[0].kidney.filter(kidney=>kidney.healthy) // makes all the unhealthy kidney to healthy kidney
console.log(users[0].kidney)