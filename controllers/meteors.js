var mongoose = require('mongoose'),
Meteor = mongoose.model('Meteor');

var year = 1984;
exports.findMeteors = function(req, res){
	Meteor.find({year: 1984}, function(err, meteors){
		res.render('meteors', {
			title: "Meteors from " + year,
			meteors: meteors
		});
	});
}