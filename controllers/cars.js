var car = require("../models/car");

exports.displayCar = function(req,res){
	var myFord = new car("ford", 1999, 400);

	res.render('cars', {
		title: 'This is my car',
		specs: myFord
	});
}
