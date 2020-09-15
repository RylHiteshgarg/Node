var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use("/assests", express.static("assests"));


app.get('/',function(req,res)
{
    res.sendFile(__dirname + "/index.html");
    // res.render('index'); 
});


app.get('/contact',function(req,res)
{
    console.log(req.query);
    //res.sendFile(__dirname + "/contact.html" ,  {qs : req.query});
    res.render('contact', {qs : req.query} );
});


app.get('/profile/:id',function(req,res){
   // res.send('You requested to7 see a profile with the id of :' + req.params.id);
   var data = {
       age : 29,
       job : "ninjas",
       hobbies : ["eating","fighting","playing"]
   };
    res.render('id', {personid : req.params.id , data : data});
});


app.listen(2000);