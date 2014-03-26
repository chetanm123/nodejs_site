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
			var obj = JSON.parse(data);
			
			//add overwrite scores for
			client.hset(obj.member,"first_name",obj.first_name,redis.print);
			client.hset(obj.member,"first_name",obj.last_name,redis.print);
			client.hset(obj.member,"first_name",obj.score,redis.print);
			client.hset(obj.member,"first_name",obj.date,redis.print);

			//add to Zowie
			client.zadd("Zowie !",parseInt(obj.score),obj.member);

		}catch(err){
			console.log("Error "+err);
		}
	});

	conn.on('close',function(){
		console.log("client closed connection");
		client.quit();
	});

}).listen(8124);

console.log("Listening to port 8124");
