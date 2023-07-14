// in file modules, file modules help devs to create file, delete files, modify file and so on

//so first you require the file
const fs = require('fs');

//now you create the file

// const createfile = fs.writeFile('example.txt', "this is not funny", (err) =>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`file created with the sucessfully`);
//         fs.readFile('example.txt', 'utf8', (err, file) =>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(file);
//             }
//         })
//     }
// })

//to rename a file 

// fs.rename('example.txt', 'newexample.txt', (err) =>{

//     if (err) {
//         console.log(err)
//     }else{
//         console.log('successful');
//     }
// })

// fs.appendFile('newexample.txt', 'this is what i want to add', (err)=>{
//     if (err) {
//         console.log(err)
        
//     }else{
//         console.log(`done`);
//     }
// })

//to read already created file
fs.readFile('newexample.txt', 'utf8', (err, file) =>{
    if (err) {
        console.log(err);
    }else{
        console.log(file);
    }
})