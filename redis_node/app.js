
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	swig = require('swig'),
   routes = require('./routes'),
   user = require('./routes/user'),
   path = require('path'),
   redis = require('redis');

   client = redis.createClient();

var app =express();

// Configuration

app.configure(function(){
	app.engine('html',swig.renderFile);
	app.set('view engine', 'html');	
	app.set('views', __dirname + '/views');
  /*app.set('view engine', 'jade');*/
	app.use(express.favicon());
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

/*
	Post request handler for add/edit
*/
app.post('/new_key',function(req,res){
	/*
		Error handling if unable to connect to redis
	*/
	client.on("error",function(err){
		client.on("Redis server cannot be reached");	
		client.set(req.body.key,req.body.value,redis.client);
		req.send("Record has been added successfully");
	});
});


app.listen(3000, function(){
  //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
