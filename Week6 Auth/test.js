arr=[{
  names:"piyush",
  class:"EE-5",
  rollno:328
},
{
  names:"sushant",
  class:"EE-5",
  rollno:343
},
{
  names:"nitin",
  class:"EE-5",
  rollno:327
}]

rollno=328
const user=arr.find(u=>u.rollno==rollno);
console.log(user)