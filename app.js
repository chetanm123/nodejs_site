
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes'),
  http = require('http'),
  map = require('./maproutecontroller'),
  swig = require('swig');

var app =express();
var server = http.createServer(app);
// Configuration

app.configure(function(){
  //app.engine('html',swig.renderFile);
  //app.set('view engine', 'html');	
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(function(req, res, next){
		res.send('Sorry ' + req.url + ' does not exist');
	});

   app.use(function(err,req,res,next){
	   console.log(err);
	   res.send(err.message);
   });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
var prefixes = ['widgets'];

/*app.get(/^\/node?(?:\/(\d+)(?:\.\.(\d+))?)?/,function(req,res){
	console.log(req.params);
	res.send(req.params);
});*/
prefixes.forEach(function(prefix){
	map.mapRoute(app,prefix);
});

server.listen(3000);

  console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);

