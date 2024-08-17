// Q1: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2




function hi(){
  console.log("hi");
  setTimeout(hello,3000);
}
function hello(){
  console.log("hello");
  setTimeout(hellothere,5000);

}
function hellothere(){
  console.log("hello there");
}

setTimeout(hi,1000);


//Q2: Now create the promisified version

//Method-1
function setTimeoutPromisified(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

setTimeoutPromisified(1000).then(hi);
function hi(){
  console.log("hi");
  setTimeoutPromisified(3000).then(hello);
  
}
function hello(){
  console.log("hello");
  setTimeoutPromisified(5000).then(hellothere);
  
}
function hellothere(){
  console.log("hello there");
  
  
}

//Method-2
setTimeoutPromisified(1000).then(function (){
  console.log("hi");
  return setTimeoutPromisified(3000);
}).then(function(){
  console.log("hello");
  return setTimeoutPromisified(5000);
}).then(function(){
  console.log("hello there");
});



//Method 3- by using async and await 
function setTimeoutPromisified(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function solve(){
  await setTimeoutPromisified(1000);
  console.log("Hi");
  await setTimeoutPromisified(3000);
  console.log("Hello");
  await setTimeoutPromisified(5000);
  console.log("Hello There");
}
solve();



//Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

const fs=require('fs');

function cleanFile(Filename,cb){
  fs.readFile("a.txt","utf-8",function(err,data){
    data=data.trim();
    fs.writeFile("a.txt",data,function(){
      cb();
    });
  });
}

function ondone(){
  console.log("File has been cleared");
  fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
  })
}
cleanFile("a.txt",ondone);


//2. Promisifiend approach
const fs=require('fs');

function cleanfilepromisified(filename){
  return new Promise(function (resolve){
    fs.readFile(filename,"utf-8",function(err,data){
      data=data.trim();
      fs.writeFile(filename,data,function(){
        resolve();
      });
    });
  }) ;
}



async function main(){
  await cleanfilepromisified("a.txt");
  console.log("File is cleared");
  fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
  });
}
main();


//err first callback
const fs=require('fs')
fs.readFile("a.txt","utf-8",function(err,data){
  if(err){
    console.log("Error reading file")
  }else{
    console.log(data)
  }
});

//reject in promises and also promisified version of fs.readFile
const fs=require('fs');

function readfilepromisified(filename){
  return new Promise(function(resolve,reject){
    fs.readFile(filename,"utf-8",function(err,data){
      if(err){
        reject("Error reading file");
      }else{
        resolve(data);
      }
    })
  })
};

function ondone(data){
  console.log(data);
}
function error(err){
  console.log(err);
}
readfilepromisified("a.txt").then(ondone).catch(error);