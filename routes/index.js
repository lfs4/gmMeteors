/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};


exports.calculator = function(req,res){
	res.render('calculator', {title: 'Calculator'});
};
 
exports.calculate = function(req,res){
    var num1 = +req.body['num1'];
    var num2 = +req.body['num2'];
    var operand = req.body['operand'];
   var calc = require('../public/javascripts/calculate');
    var resultSet = calc.calculate(num1,num2,operand);
    res.send("Result Set: " + resultSet);

};

