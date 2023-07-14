const readline = require('readline');
// next your create an interface to link the readline

const readL = readline.createInterface({input: process.stdin, output: process.stdout});

//lets say we want to generate two number and sum it up
//this is a kind security aspect
//1. you need to generate a numbers 
const num1 = Math.floor(Math.random() * 20);// the num1 is where the number generate will be stored
const num2 = Math.floor(Math.random() * 10);

let realanswer = num1 + num2;

readL.question(`what is ${num1} + ${num2}? \n`, (usersanswer)=>{
    //console.log(usersanswer);
    //fast check if the user answer is correct 
    if (usersanswer.trim() == realanswer) {
        //console.log(`your answer is ${usersanswer} and is correct!!`);
       readL.close();
    }else{
        //you set the prompt()
        readL.setPrompt('your answer is not correct\n');
        readL.prompt();
        readL.on('line', (usersanswer)=>{
            if(usersanswer.trim() == realanswer){
                readL.close();

            }else{
                readL.setPrompt(`your answer ${usersanswer} is still not correct.. please try again\n`);
                readL.prompt();
            }
        })
    }
});

readL.on('close', ()=>{
    console.log(`your answer is correct!!!`);
    //readL.close();
});