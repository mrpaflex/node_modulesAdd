//tell this app.js file where the sum function is located
let file1 = require('./file1'); // the require function is use to link direct file(s) or folder(s)

//you need to print out what file1 is holding
console.log(file1);

// give the sum function in file a value(num1, num2)
//console.log(file1(2, 4));
console.log(file1.sum(4, 2));
console.log(file1.PI);
console.log(new file1.people);


//sum(1, 2)