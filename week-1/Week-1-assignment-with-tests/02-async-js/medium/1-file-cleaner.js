const fs=require('fs');

const readPath="C:\\Users\\4769828\\projects\\100xdevs\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\medium\\readFile.txt";
const writePath="C:\\Users\\4769828\\projects\\100xdevs\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\medium\\writeFile.txt";
let data=fs.readFileSync(readPath,'utf8');
console.log(data,typeof(data));
data=data.replace(/\s+/g," ");
console.log(data,typeof(data));
fs.writeFileSync(writePath,data);

