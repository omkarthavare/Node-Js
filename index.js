const { error } = require('console');
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'files','hi.txt'),'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
 
});

// //Write operation
// fs.writeFile(path.join(__dirname,'files','reply.txt'),' Hi! omkar. Nice! to meet you',(err)=>{
//     if(err) throw err;
    
// });

// //update operation
// fs.appendFile(path.join(__dirname,'files','newreply.txt'),'Same here, Have a nice day.',(err)=>{
//     if(err) throw err;
// });

   //Write operation
fs.writeFile(path.join(__dirname,'files','reply.txt'),' Hi! omkar. Nice! to meet you',(err)=>{
    if(err) throw err;
    console.log("file written succesfuly");

    fs.readFile(path.join(__dirname,'files','reply.txt'),'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);

    })

    //update operation
fs.readFile(path.join(__dirname,'files','newreply.txt'),'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);

        fs.appendFile(path.join(__dirname,'files','newreply.txt'),' Same here, Have a nice day.',(err)=>{
    if(err) throw err;
    console.log("file append successfully");
        });
    });
});
    

