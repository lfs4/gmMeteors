/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};


exports.calculator = function(req,res){
	res.render('calculator', {title: 'Calculator'});
};

exports.calculate = function(req,res){
		/*var nums = {};
		num1 = req.body['num1'];
		num1 = req.body['num2'];
		op = "+";*/
		console.log("hello");
};

