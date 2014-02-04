var net = require('net');
var redis = require('redis');

var server = net.createServer(function(conn){
	console.log('connected');
	
	//create Redis client
	var client = redis.createClient();
	
	client.on("error",function(err){
		console.log("Error "+ err);
	});


}).listen(8124);
console.log("Listening to port 8124");