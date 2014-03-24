var expect = require("chai").expect;
var calc = require("../lib/calc.js");

describe("Num", function(){
	describe("#add()", function(){
		it("it should add two positive numbers", function(){
			var results = calc.add(1,2);

			expect(results).to.equal(3);
			//expect(results).to.equal('odd');
		});
		it("it should return two negative numbers", function(){
			var results = calc.add(-5,-3);

			expect(results).to.equal(-8);
		});
	});
	describe("#subtract()", function(){
		it("should subtract two postive numbers", function(){
			var results = calc.subtract(5,4);

			expect(results).to.equal(1);
		});
	
	});
	describe("#divide()", function(){
		it("should divide two postive numbers", function(){
			var results = calc.divide(8,4);

			expect(results).to.equal(2);
		});
	
	});
	describe("#multiply()", function(){
		it("should multiply two postive numbers", function(){
			var results = calc.multiply(5,2);

			expect(results).to.equal(10);
		});
	
	});
	
});