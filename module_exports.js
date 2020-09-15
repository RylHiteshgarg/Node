var counter = function(arr){
    return ' There are '+ arr.length + ' elements';
}

var adder = function(a,b){
    return a+b;
}

// module.exports.counter = counter;
// module.exports.adder = adder;

module.exports  = {
adder : adder,
counter : counter
};

//console.log(counter([1,2,3,4,5,6]));