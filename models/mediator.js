var Subject = require('../models/subject.js');

function Mediator(){
	this.sub1 = new Subject;
	this.sub2 = new Subject;
}


Mediator.prototype.subscribe = function(subject, observer){

	subject.addObserver(observer);

};
Mediator.prototype.unSubscribe = function(subject, observer){
	subject.removeObserver(observer);
};

module.exports = exports = Mediator;