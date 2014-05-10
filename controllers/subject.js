var subject = require('../models/subject.js');
var observer = require('../models/observer.js');


exports.renderObservers = function (req, res) {
	var sub = new subject;
	var bill = new observer("bill");
	var jim = new observer("jim");
	var bob = new observer("bob");

	sub.addObserver(bob);
	sub.addObserver(jim);
	sub.addObserver(bill);

	sub.notify({email: 'Meeting at 3 pm', news: 'All parking spots are gone'});
	sub.notifySpecific({email: 'Hello Jim'},jim);
	sub.decorate(bill, 67);
	res.render('observer',{
		title: 'Observer List',
		count: sub.observers.count(), 
		obs: sub.observers.observerList
	});
}