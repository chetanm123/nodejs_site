var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
// connect to server
client.connect ('8080','localhost', function () {
console.log('connected to server');
client.write('Who needs a browser to communicate?');
});
// prepare for input from terminal
process.stdin.resume();
// when receive data, send to server
process.stdin.on('data', function (data) {
	console.log("Data \n"+data);
client.write(data);
});
// when receive data back, print to console
client.on('data',function(data) {
console.log(data);
});
// when server closed
client.on('close',function() {
console.log('connection is closed');
});