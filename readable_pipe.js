var http = require('http');
var fs = require('fs');

var myread = fs.createReadStream(__dirname + "/exampleread.txt",'utf8');
var mywrite = fs.createWriteStream(__dirname + "/examplewrite.txt");

myread.pipe(mywrite);


var server = http.createServer(function(req,res){
    console.log('request was made ' + req.url);
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    var myread = fs.createReadStream(__dirname + "/exampleread.txt",'utf8');
    myread.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Listening to port 3000');