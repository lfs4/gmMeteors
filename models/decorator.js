
exports.addList = function(factory){
	factory.showVehicles = function(){
		var vList = "This factory makes cars and trucks";
		return vList;
	}
};