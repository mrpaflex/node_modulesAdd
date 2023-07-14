// you need to bring in the vents module properties and store in is a const or let 
const eventM = require('events');

const eventE = new eventM(); // your now store the require eventM in another in another variable eventE;

eventE.on('oblisten', (x1, x2) =>{//you create an event listener eventE.on()
    console.log('the result is');
    console.log(x1 + x2);
});

eventE.emit('oblisten', 6, 1);//you emit the event here
