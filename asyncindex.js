const fs = require('fs').promises;
const path = require('path');

async function fileSystem(params) {
    try {
        const data =  await fs.readFile(path.join(__dirname,'files','hi.txt'),'utf8');
        console.log(data);

        // console.log("1. writting the file");
        await fs.writeFile(path.join(__dirname,'files', 'ans.txt'),'Hello! nice to meet you');
        const data1 = await fs.readFile(path.join(__dirname,'files','ans.txt'),'utf8');
        console.log(data1);
        await fs.appendFile(path.join(__dirname,'files','newans.txt'),'Same here , How are you?');
        const data2 = await fs.readFile(path.join(__dirname,'files','newans.txt'),'utf8');
        console.log(data2);
        await fs.unlink(path.join(__dirname,'files','reply.txt'));
    } catch (err) {
        console.error("Error reading file : ",err);
        
    }
    
}

fileSystem();
