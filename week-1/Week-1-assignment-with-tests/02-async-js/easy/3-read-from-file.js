//fs.readFile() is an async functions so the  expensive operation dont have to wait for fileRead() to complete. once the fileRead() operation is completed then the callback function is invoked and can access the file data.


const fs=require('fs');

fs.readFile("C:\\Users\\4769828\\projects\\100xdevs\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\easy\\3-read-from-file.md",'utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }

    console.log(data);

});

for(let i=0;i<1000000000;i++){
    console.log(i);
}