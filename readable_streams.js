var http = require('http');
var fs = require('fs');

var myread = fs.createReadStream(__dirname + "/exampleread.txt",'utf8');
var mywrite = fs.createWriteStream(__dirname + "/examplewrite.txt");

myread.on('data',function(chunk)
{
    console.log('new chunk received');
    console.log(chunk);
    mywrite.write(chunk);
});


