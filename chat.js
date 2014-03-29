var net = require('net');
var sockets=[];
socket = net.createServer(function(socket){
	sockets.push(socket);

	socket.on('data',function(d){
		console.log("Remote Address "+socket.remoteAddress+" Remote Port "+socket.remotePort);
		/*for (var i=0;i<sockets.length;i++){
			if(sockets[i]==socket)continue;
			sockets[i].write(d);
		}*/
	});

	socket.on('end',function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i,1);
	});
});
socket.listen(8124);