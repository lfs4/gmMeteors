var fact = require('../models/factory.js');

var factory = new fact();

exports.displayVehicle = function(req,res) {
	var car = factory.createVehicle({vehicleType: "car", model: "honda", year: 1456, miles: 50000});

	res.render('factory', {title: "Vehicle Factory", vehicle: car} )
}