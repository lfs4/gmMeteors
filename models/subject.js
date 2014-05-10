var ObserverList = require('./observerlist.js');

function Subject(){
	this.observers = new ObserverList;
}

Subject.prototype.addObserver = function(observer){
	this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer){
	this.observers.removeAt(this.observers.indexOf(observer,0));
};

Subject.prototype.notify = function(content){
	var observerCount = this.observers.count();
	for(var i=0; i< observerCount; i++){
		this.observers.get(i).update(content);
	}
};
Subject.prototype.notifySpecific = function(content, observer){
	this.observers.get(this.observers.indexOf(observer)).update(content);
}
Subject.prototype.decorate = function(observer, age){
	observer.age = age;
	observer.sayAge = function(){
		return "My age is " + this.age;
	}
}

module.exports = exports = Subject;