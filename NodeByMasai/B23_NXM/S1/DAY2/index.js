// const { log } = require('console');
const fs = require('fs');
// fs.readFile('./text.txt',{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log('Cannot Read the file');
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })

// fs.writeFileSync('./text.txt','My name is Saquib Hassan')

// let data = fs.readFileSync('./text.txt',{encoding:'utf-8'})
// console.log(data);
// console.log('My name is Saquib');

// How to write

// fs.writeFile('./text.txt','My name is Umar Mutuza alias Ahan Axm',(err)=>{
//     if(err){
//         console.log(err);
//         console.log('Cannot write into the file');
//     }else{
//         console.log('Data has been entered');
//     }
// })

/*******************************************************************************************/

fs.appendFile('./text.txt','This is the first line\n',(err)=>{
    if(err) console.log(err);
    else console.log('Appended');
})
fs.appendFile('./text.txt','This is the second line\n',(err)=>{
    if(err) console.log(err);
    else console.log('Appended');
})
