const sum = (num1, num2) => num1 + num2;//this is an arrow function
const PI = 3.123;

class people {
    constructor(){
        let People = 'man of the year';
        console.log(People);
    }
}
///to expose your variable call sum.. u use so that it can be call by others
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.people = people;

//another way to do this is below in just one line

module.exports = {sum: sum, PI: PI, people: people};


// now i want to store multiple value


