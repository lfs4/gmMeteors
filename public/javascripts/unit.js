test("first test", function(){
	function mytest(num1, num2, operand, expected){
		equal(calculate.calculate(num1,num2,operand), expected);
	}	
	mytest(1,2,"+",3);
	mytest(8,4,"/",2);
	mytest(5,2,"*",10);
	mytest(1,5,"-",-4);
	mytest(8,4,"+",80);
});