//Method-1

// const fs=require('fs');
// function CountWords(filename){
//   fs.readFile(filename,"utf-8",function(err,data){
//     if(err){
//       console.log(err);
//       return;
//     }
//     const WordCount=data.split(" ").length;
//     console.log('Word Count: ', WordCount)
//   })
// }
// CountWords(process.argv[2]) //node CountWords.js a.txt, here it takes the 0th 1st then 2nd arguement which is a.txt 


//Method-2 Better
// u can do node CountWords.js -h -> to get help
// To run use- node CountWords.js countwords a.txt, make sure u are in the "Week4 Nodejs" directory
// This command can be changed by changing the parameter of program.command

const fs = require('fs');
const { Command } = require('commander');
const program = new Command(); // creating a new object program of class command

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('countwords')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const WordCount = data.split(" ").length;
        console.log('Word Count: ', WordCount)
      }
    });
  });

program.parse();