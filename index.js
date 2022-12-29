// common core imports
//const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    try{
        // read with promises
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt' ), 'utf-8'   );
        console.log(data);

        /// deleting starter file
        await fsPromises.unlink( path.join(__dirname, 'files', 'starter.txt' )  )


        // write with promises
        await fsPromises.writeFile( path.join(__dirname, 'files', 'promiseWrite.txt' ), data  )
        await fsPromises.appendFile( path.join(__dirname, 'files', 'promiseWrite.txt' ), "\nnew append"  )
        await fsPromises.rename( path.join(__dirname, 'files', 'promiseWrite.txt' ), path.join(__dirname, 'files', 'promiseComplete.txt' )  )


        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt' ), 'utf-8'   );
        console.log(newData);


    }
    catch(err){
        console.error(err);

    }


}
// NOW CALL
fileOps();




// function start throw to callback function
//fs.readFile('./files/starter.txt',  (err,data) => {
//fs.readFile('./files/starter.txt', 'utf8', (err,data) => {
//   change to path.join to eliminate / for cross platform...
/* fs.readFile(path.join(__dirname, 'files', 'starter.txt' ), 'utf8', (err,data) => {
  
    if ( err ) throw( err );
    //onsole.log(data);  // buffer data
    console.log(data.toString());
}  
) */

// which is handled first, asynchronous nature of node.js
//console.log("hellow world");    // executed before readFile answer callback


// writing files and appending
// fs.writeFile( pathnameFile, stringDataToWrite, callback with only (err) )
/* fs.writeFile( path.join(__dirname, "files", "reply.txt"), 'Nice meet...'   , (err)=>{
    if ( err ) throw err;
    console.log(`Write complete...`);


    // append files same as write if file not there
    fs.appendFile( path.join(__dirname, "files", "reply.txt"), '\nappending ...'   , (err)=>{
        if ( err ) throw err;
        console.log(`Append complete...`);

            fs.rename( path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt")   , (err)=>{
                if ( err ) throw err;
                console.log(`rename complete...`);
        
            }
            )


    }
    ) // end append

}
)
 */





// what happens if err and throws, handle 
// path literals ${} need to be inside reverse tilde's ` not ' or ""
process.on( 'uncaughtException', err => {
    console.log(`There was an uncaught error: ${err} `);
    process.exit(1);

}
)





