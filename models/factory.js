var car = require('../models/car');


function Truck(model, year, miles)
{
	this.model = model;
	this.year = year;
	this.miles = miles;
}

function VehicleFactory(){}

VehicleFactory.prototype.vehicleClass = car;

VehicleFactory.prototype.createVehicle = function(options) {
	switch(options.vehicleType){
		case "car":
		this.vehicleClass = car;
		break;
		case "truck":
		this.vehicleClass = Truck;
		break;
	}
	return new this.vehicleClass(options.model, options.year, options.miles);
};

module.exports = exports = VehicleFactory;