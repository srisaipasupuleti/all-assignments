const fs=require('fs');

const filePath="C:\\Users\\4769828\\projects\\100xdevs\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\easy\\file1.txt";
let data="test data";

fs.writeFile(filePath,data,(err)=>{
    if(err){
        console.error(err);
        return;
    }

    console.log('data written to file successfully');
});
