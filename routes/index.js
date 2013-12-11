
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('exp_temp.html', { title: 'Widget Factory' },function(err,stuff){
	if(!err){
		console.log(stuff);
		res.write(stuff);
		res.end();
	}
	
  });
};

exports.index1 = function(req, res){
  res.render('index', { title: 'My own template' },function(err,stuff){
	  
	if(!err){
		console.log(stuff);
		res.write(stuff);
		res.end();
	}
	
  });
};