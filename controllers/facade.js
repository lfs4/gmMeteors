var car = require('../models/car.js');
function addEngineType(car){
	car.engine = "v8";
}
function addDoors (car){
	car.doors = 4;
}
function makeConvertable(car){
	car.convertable = true;
}
function addCarList(car)
{
	
	car.specList = function(){
		car.specs = "";
		specs = "This car has a " + this.engine + " engine " + this.doors + " doors and ";
		if(this.convertable)
			specs += "is convertable";
		else
			specs += "is not convertable";
		return specs;
	}
	
}
exports.decorateCar = function(car)
{
	addEngineType(car);
	addDoors(car);
	makeConvertable(car);
	addCarList(car);
	//return car;
}
exports.showCar = function(req, res)
{
	var myCar = new car;
	car.decorateCar(myCar);
	res.render('facade', {title: "Car decorated from facade pattern", car: myCar});
}