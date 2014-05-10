var assert = require("chai").assert;

var Observer = require('../models/observer.js');
var Mediator = require('../models/mediator.js');

describe("Mediator", function(){
	it("should allow the observer to choose a subject to subscribe to", function(){
		mediator = new Mediator;
		observer = new Observer;

		mediator.subscribe(mediator.sub1, observer);
		mediator.subscribe(mediator.sub2, observer);

		assert.equal(mediator.sub1.observers.count(), 1);
		assert.equal(mediator.sub2.observers.count(), 1);
	});
	it("should allow the observer to remove themself from a subject", function(){
		mediator = new Mediator;
		observer = new Observer;

		mediator.subscribe(mediator.sub1, observer);
		mediator.subscribe(mediator.sub2, observer);

		mediator.unSubscribe(mediator.sub1, observer);
		
		assert.equal(mediator.sub1.observers.count(), 0);
		assert.equal(mediator.sub2.observers.count(), 1);
	});

});