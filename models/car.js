


var makeCar  = function(model, year, miles)
{
	var newCar = {};
	this.model = model;
	this.year = year;
	this.miles = miles;

	newCar = {model: this.model, year: this.year, miles: this.miles};
};

makeCar.prototype.mySpecs = function(){
	return this.model + " has done " + this.miles + " miles since " + this.year; 
};


module.exports = exports = makeCar;