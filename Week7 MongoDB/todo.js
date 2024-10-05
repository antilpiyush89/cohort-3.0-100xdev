// Importing usermodel and todomodel from db,js
const {UserModel, TodoModel} = require("./db");
const mongoose=require("mongoose");
const ObjectID= mongoose.ObjectId
const bcrypt=require("bcrypt")
const {z} = require("zod")
mongoose.connect("mongodb+srv://antilpiyush89:Jo1pD2ppHABN47Jt@cluster0.a5xgw.mongodb.net/todos-piyush-DB") //" cluster url/ database name, if not exist, it automatically creates one"
const express= require("express")
const app = express();
const jwt=require("jsonwebtoken")
const jwt_secret="ILoveNE";

app.use(express.json());


app.post("/signup", async function(req,res){
  //Input validation from zod


  //Describe the schema/structure hamme chahiye signup field mein
    const reqbody=z.object({
      email:z.string().min(3).max(50).email(),
      password:z.string().min(6)
      .refine((password)=>/[A-Z]/.test(password),{
        message:"Enter atleast One capital letter"
      })
      .refine((password)=>/[a-z]/.test(password),{
        message:"Enter atleast One small letter"
      })
      .refine((password)=>/[0-9]/.test(password),{
        message:"Enter atleast One number"
      })
      .refine((password)=>/[!@#$%^&*]/.test(password),{
        message:"Enter atleast One special symbol"
      })
    })

    const parsedData=reqbody.safeParse(req.body) //reqbody is schema, reqbody.safeparse(req.body), safeparse contain {success:true/false, data:data, error?:never}
    if(!parsedData.success){ //if parsedData.success is false, matlab the input validation not met then show error inside parseddata.error[0].message, the message is from refine used above in zod validation
        netError=[]
        for(let i=0;i<parsedData.error.issues.length;i++){
          netError.push(parsedData.error.issues[i].message);
        }
      res.json({
        msg:"Incorrect format",
        error:netError
      })
      return
    }


  

    try{
      const email=req.body.email;
      const password=req.body.password;
      const fullname=req.body.fullname;
      const hashedpassword= await bcrypt.hash(password,10) // hashes the plaintext into a hashed string for security, 10 is no of salt rounds
      await UserModel.create({
        email:email,
        password:hashedpassword,
        fullname:fullname  })


        res.status(200).json({
          msg:"You are signed up"
        })
        return
    }

  catch(error){
    res.status(500).json({
      msg:"Error while signing up"
    })
    return
  }




})

app.post("/signin", async function(req,res){
  const email=req.body.email;
  const password=req.body.password;
  
  // finds the person with same email and password
  const response=await UserModel.findOne({
    email:email
  })
  const comparedpassword= await bcrypt.compare(password,response.password) // compare my inputted password with the hashed password stored in database
  if(response && comparedpassword){
    const token = jwt.sign({
      id:response._id.toString() // had to convert into string bcz jwt.sign ki key mein bas string aa skti, naki pura json document
    },jwt_secret)
    res.json({
      msg:"You are signed In",
      token:token
    })
  }else{
    res.json({
      msg:"Unsuccessful SignIn"
    })
  }
})

// Auth EP
app.post("/postTodo",auth,async function(req,res){
  const userId=req.userID; // this userid is from the user collection itself
  const title=req.body.title;
  const done=req.body.done;

  await TodoModel.create({
    userId:userId,
    title:title,
    done:done
  })
  res.json({
    msg:"Todo created",
    userId:userId
  })
  
})

app.get("/getTodo",auth,async function(req,res){
  const userId=req.userID

  const data= await TodoModel.findOne({
    userId:userId
  })
  if(data){
    res.json({
      data
    })
  }else{
    res.json({
      msg:"No todos exist"
    })
  }

  
})

//Auth Middleware
function auth(req,res,next){
  const token=req.headers.token;
  const decodedData=jwt.verify(token,jwt_secret)// return the _id:"ObjectId("") in string format"
  if(decodedData){
    req.userID=decodedData.id // storing in req={"userID":decodedData.id}
    next()
  }else{
    res.json({
      msg:"Auth failed"
    })
  }

}

//marks the todo as done or undone
app.put("/markDoneOrUndone",auth,async function(req,res){

  try{
    // input(request body), todoID=_id of todo entry that is needed to be marked as done
    // _id:id matches the inputted id with the todo entry
    // $set:{done:true}, sets the done as true

    const id=req.body.todoID
    const TodoBeforeUpdate=await TodoModel.findOne({
      _id: id
    })
    if(!TodoBeforeUpdate.done){
      const updatedtodoToTrue= await TodoModel.updateOne({
        _id:id
      },{$set:{done:true}})
    }else{
      const updatedTodoTofalse= await TodoModel.updateOne({
        _id:id
      },{$set:{done:false}})
    }
    const updatedTodo=await TodoModel.findOne({
      _id: id
    })
    res.status(200).json({
      msg:"Todo is marked as done",
      updatedTodo:updatedTodo
    })
  }

  catch(error){
    res.status(500).json({
      msg:"Error while updating todo"
    })
  }
})
app.listen(3000);

