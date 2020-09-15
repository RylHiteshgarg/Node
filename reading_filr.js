var fs = require('fs');

//var readme = fs.readFileSync('exampleread.txt','utf8');

fs.readFile('exampleread.txt','utf8',function(err,data){

    fs.writeFile('examplewrite.txt',data,function(err,data){});
    console.log(data);
});
//fs.writeFileSync('examplewrite.txt',readme);

//console.log(readme);

