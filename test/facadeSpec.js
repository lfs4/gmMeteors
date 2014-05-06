var expect = require("chai").expect;
var assert = require("chai").assert;

var newApp = require("../controllers/facade.js");
var car = require("../models/car.js");

describe("#AppFacade", function(){
	var decoratedCar = new car
	newApp.decorateCar(decoratedCar);

	it("should decorate a car object with an engine", function(){
		assert.equal(decoratedCar.engine, "v8");
	});
	it("should decorate a car object with doors", function(){
		assert.equal(decoratedCar.doors, 4);
	});
	it("should decorate a car object with a convertable roof", function(){
		assert.equal(decoratedCar.convertable, true);
	});
	it("should tell me the car specs", function(){
		assert.equal(decoratedCar.specList(), "This car has a v8 engine 4 doors and is convertable");
	});
});