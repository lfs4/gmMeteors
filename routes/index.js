/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};


exports.calculator = function(req,res){
	res.render('calculator', {title: 'Calculator'});
};

