var calc = require('../../lib/calc.js');
exports.calculate = function(num1,num2,operand){
	var num = {};

	if(operand == "+")
		num = calc.addition(num1,num2);
	else if(operand == "-")
		num = calc.subtract(num1,num2);
	else if(operand == "/")
		num = calc.divide(num1, num2);
	else if(operand == "*")
		num = calc.multiply(num1, num2);
	return num;
}

