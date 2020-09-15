// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + "seconds");

//     if(time > 5) 
//     {
//         clearInterval(timer);
//     }
// },5000);




// var say = function()
// {
//     console.log("hi");
// }

// function Hesay(m)
// {
//     m();
// }

// Hesay(say);


var res = require('./module_exports');

console.log(res.counter([1,2,3,4,5,6]));
console.log(res.adder(1,2));