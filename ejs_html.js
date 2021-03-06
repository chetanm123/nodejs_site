var http = require('http')
, ejs = require('ejs');

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});

	// data to render
	var names = ['Joe Brown', 'Mary', 'Sue', 'Mark'];
	var people = [
{name : 'Joe Brown', age : 32},
{name : 'Ary Smith', age : 54},
{name : 'Tom Thumb', age : 21},
{name : 'Zinder Ella', age : 16}];

	var title = 'Testing EJS System';

	//render or error
	ejs.renderFile(__dirname+'/views/test.ejs',
	{title:title,names:names,people:people},
	function(err,result){
		if(!err)
			res.end(result);
		else{
			res.end('An error occured accessing page');
			console.log(err);
		}
	});
}).listen(8124);