var calculate = {
	calculate: function(num1,num2,operand){
		var num;

		if(operand == "+")
			num = num1 + num2;
		else if(operand == "-")
			num = num1 - num2;
		else if(operand == "/")
			num = num1 / num2;
		else if(operand == "*")
			num = num1 * num2;
		return num;
	}
}