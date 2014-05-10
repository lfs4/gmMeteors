var expect = require("chai").expect;
var assert = require("chai").assert;

var Observer = require("../models/observer.js");
var ObserverList = require("../models/observerlist.js");
var Subject = require("../models/subject.js");


describe("#Observer Parameters", function(){
	it("should out put observer information", function(){
		var bob = new Observer("bob");
		bob.update({email: "hello bob", news: "new movies released"});
		assert.equal(bob.sayName(), "bob");
		assert.equal(bob.myContent(), "Email: hello bob News: new movies released");
	});
});

describe("#ObserverList", function(){
	
	it("should check the observerlist length", function(){
		var observerList = new ObserverList;
		var observer1 = new Observer("bob");
		observerList.add(observer1);
		assert.equal(observerList.count(), 1);
	});
	it("should check observer info", function(){
		var jim = new Observer("jim");
		var observerList = new ObserverList;
		observerList.add(jim);
		assert.equal(observerList.get(0).sayName(), "jim");
	});
	it("should remove an observer", function(){
		var bill = new Observer("bill");
		var jim = new ObserverList("jim");
		var observerList = new ObserverList;
		observerList.add(bill);
		observerList.add(jim);
		observerList.removeAt(observerList.indexOf(jim));
		assert.equal(observerList.count(),1);
		assert.equal(observerList.get(1), undefined);
	});
});

describe("#Subject", function(){
	var subject = new Subject;
	var bob = new Observer("bob");
	var jim = new Observer("jim");
	var bill = new Observer("bill");

	subject.addObserver(bob);
	subject.addObserver(bill);
	subject.addObserver(jim);

	it("should allow subjects to check their observer count", function(){
		assert.equal(subject.observers.count(), 3);
	});
	it("should allow subjects to send their observer's content", function(){
		subject.notify({email: 'There will be a meeting tonight', news: 'Nothing to report today'});
		assert.equal(bob.news,'Nothing to report today');
		assert.equal(jim.email, 'There will be a meeting tonight');
	});
	it("should allow subjects to send content to specific observers", function(){
		subject.notifySpecific({email: 'Hello bob'}, bob);
		assert.equal(bob.email, 'Hello bob');
	});
	it("should allow subjects to remove observers", function(){
		subject.removeObserver(jim);
		assert.equal(subject.observers.indexOf(jim), -1);
	});
});


