var net = require('net');
net.createServer(function(sock){
		console.log("Connected "+ sock.remoteAddress+" : "+sock.remotePort);
		sock.on("data",function(data){
			console.log("Data "+sock.remoteAdress+" : "+data);
			sock.write("You said " + data );
		});
}).listen(3000);
console.log("Server listening on 4000");