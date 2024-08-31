

// How readdir works

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'files');
console.log(__dirname)
console.log(directoryPath)
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    
    // List all files
    console.log(files)
    
});

// c:\codes\cohort 3.0 100xdev\Week4 NodeJs\assignment // dirname
// c:\codes\cohort 3.0 100xdev\Week4 NodeJs\assignment\files\ // directorypath
// a.txt
// b.txt
// c.txt