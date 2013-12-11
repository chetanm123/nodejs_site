var express = require('express');
var app = module.exports=express.createServer();

app.use(function(req,res){
	console.log("%s %s",req.method, req.url);
	//next();
});

app.use(function(req,res,next){
	res.send("Hello world");
});
app.listen(3000);