var Mediator = require('../models/mediator.js');
var Observer = require('../models/observer.js');

var mediator = new Mediator;
var observer = new Observer("observer 1");
var observer2 = new Observer("observer 2");

exports.showSubjects = function(req, res){

	mediator.subscribe(mediator.sub1, observer);

	mediator.subscribe(mediator.sub1, observer2);
	mediator.subscribe(mediator.sub2, observer2);

	res.render('mediator', {
		title: "Subjects subscribed to via mediator",
		sub1: mediator.sub1.observers,
		sub2: mediator.sub2.observers
	});


}