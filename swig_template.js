var express = require('express'),
swig = require('swig'),
people;
var app =express();

app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+"/views");

app.set('view cache',false);
swig.setDefaults({cache:false});

app.get('/',function(req,res){
	res.render('exp_temp',{});
});

app.listen(1337);
console.log("Application started");