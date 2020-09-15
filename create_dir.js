var fs = require('fs');

//fs.unlinkSync('examplewrite.txt');
fs.unlink('examplewrite.txt',function(err){});

//fs.mkdirSync('stuff');
fs.mkdir('stuff',function(err){});

// fs.rmdirSync('stuff');
fs.rmdir('stuff',function(err){});