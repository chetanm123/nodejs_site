var express = require('express')
,http = require('http')
, routes = require('./routes'),
app = express();


app.configure(function(){
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.methodOverride());
	app.use(express.static(__dirname+'/public'));
	app.use(express.bodyParser());
	app.use(app.router);
});

app.router('development',function(){
	app.use(express.errorHandler());
});

var widgets = [
{
	id:1,
	name:'My social Widget',
	price:100.00,
	desc:'A widget beyond price'
}
]

//add widget
app.post('/widgets/add',function(req,res){
	var indx = widgets.length+1;
	widgets[widgets.length]=
	{
		id:indx,
		name:req.body.widgetName,
		name:parseFloat(req.body.widgetprice),
		descr:req.body.widgetdesc
	};
		conosle.log('added'+widgets[indx-1]);
		res.send('Widget '+req.body.widgetname + 'add with id '+indx);
});

//show widget
app.get('/widgets/:id',function(req,res){
	var indx = parseInt(req.params.id)-1;
	if(!widgets[indx])
		res.send('There is not widget with id of ' + req.params.id);
	else
		res.send(widgets[indx]);
});
http.createServer(app).listen(3000);
console.log("Express server listening on port 3000");