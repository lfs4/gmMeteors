var factory = require("../models/factory.js");
var decorator = require("../models/decorator.js");


exports.displayChanges = function(req, res)
{
	var genericFactory = new factory;
	decorator.addList(genericFactory);
	var vhString = genericFactory.showVehicles();
	res.render('dec', {title: "Decorated Factory", list: vhString})
}
