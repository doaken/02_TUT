// common core imports
const fs = require('fs');
const path = require('path');



// function start throw to callback function
//fs.readFile('./files/starter.txt',  (err,data) => {
//fs.readFile('./files/starter.txt', 'utf8', (err,data) => {
//   change to path.join to eliminate / for cross platform...
fs.readFile(path.join(__dirname, 'files', 'starter.txt' ), 'utf8', (err,data) => {
  
    if ( err ) throw( err );
    //onsole.log(data);  // buffer data
    console.log(data.toString());
}  
)

// which is handled first, asynchronous nature of node.js
console.log("hellow world");    // executed before readFile answer callback



// what happens if err and throws, handle 
// path literals ${} need to be inside reverse tilde's ` not ' or ""
process.on( 'uncaughtException', err => {
    console.log(`There was an uncaught error: ${err} `);
    process.exit(1);

}
)





