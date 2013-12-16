var widgets = [
	{ 
		id : 1,
		name : "The Great Widget",
		price : 1000.00,
		desc : "Here is my first widget"
	}
]
// index listing of widgets at /widgets/
exports.index = function(req, res) {
	res.render("widgets/index",
		{
			title:'Widgets',
			widgets:widgets
		});
};
// display new widget form
exports.new = function(req, res) {
	var filePath = require('path').normalize(__dirname+"/../public/widgets/new.html");
	res.sendfile(filePath);
	
};
// add a widget
exports.create = function(req, res) {
	var indx = widgets.length + 1;
	widgets[widgets.length] =
	{ 
		id : indx,
		name : req.body.widgetname,
		price : parseFloat(req.body.widgetprice),
		desc:req.body.widgetdesc
	};
		//res.send('Widget ' + req.body.widgetname + ' added with id ' + indx);
		res.render('widgets/index',{title:'Widget Added',widgets:widgets});
	};
// show a widget
exports.show = function(req, res) {
var indx = parseInt(req.params.id) - 1;
	if (!widgets[indx])
	res.send('There is no widget with id of ' + req.params.id);
	else
	res.send(widgets[indx]);
};
// delete a widget
exports.destroy = function(req, res) {
	var indx = req.params.id - 1;
	delete widgets[indx];
	//console.log('deleted ' + req.params.id);
	res.redirect('widgets/');
	res.end();
	//res.send('deleted ' + req.params.id);
};
// display edit form
exports.edit = function(req, res) {
	res.send('displaying edit form');
};
// update a widget
exports.update = function(req, res) {
	var indx = parseInt(req.params.id) - 1;
	widgets[indx] =
	{ 
		id : indx,
		name : req.body.widgetname,
		price : parseFloat(req.body.widgetprice)}
		console.log(widgets[indx]);
		res.send ('Updated ' + req.params.id);
	};

