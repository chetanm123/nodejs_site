var redis = require('redis')
, client = redis.createClient();

client.on("error",function(err){
	console.log("Error " + err);
});

client.on("connect",runSample);
function runSample(){
	client.set("string key","Hello World",function(err,reply){
		console.log(reply.toString());
	};
});