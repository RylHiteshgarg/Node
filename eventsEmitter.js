var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('something',function(mssg)
// {
//     console.log(mssg);
// })

// myEmitter.emit('something', 'the event was emitted');

//console.log(events);


var util = require('util');

var person = function(name)
{
    this.name = name;
};

util.inherits(person,events.EventEmitter);

var j = new person('j');
var k = new person('k');
var l = new person('l');

var people = [j,k,l];

people.forEach(function(person)
{
    person.on('speak',function(mssg)
    {
        console.log(person.name + ' said: ' + mssg);
    });
});


j.emit('speak','Hey dude');