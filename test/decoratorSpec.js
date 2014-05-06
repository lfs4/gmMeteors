var expect = require("chai").expect;
var assert = require("chai").assert;
var factory = require("../models/factory.js");
var decorator = require("../models/decorator.js");

describe("#Decorate Factory", function(){
	var genericFactory = new factory;
	decorator.addList(genericFactory);

	it("it should add a decorator funciton & output results", function(){
		assert.equal(genericFactory.showVehicles(), "This factory makes cars and trucks");
	});
});