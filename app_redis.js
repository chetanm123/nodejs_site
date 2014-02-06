var net = require('net');
var redis = require('redis');

var server = net.createServer(function(conn){
	console.log('connected');
	
	//create Redis client

	var client = redis.createClient();
	
	client.on("error",function(err){
		console.log("Error "+ err);
	});

	//fifth database is game score database
	client.select(5);
	conn.on('data',function(data){
			console.log(data + ' from '+ conn.remoteAddress + ' '+conn.remotePort);

		try{
		}catch(err){
			var obj = JSON.parse(data);
			console.log("OBJ "+obj);
		}
	});

}).listen(8124);
console.log("Listening to port 8124");