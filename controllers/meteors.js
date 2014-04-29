var mongoose = require('mongoose'),
Meteor = mongoose.model('Meteor');


exports.findMeteors = function(req, res){
	var year = req.body['year'] || 1984
	Meteor.find({year: year}, function(err, meteors){
		res.render('meteors', {
			title: "Meteors from " + year,
			meteors: meteors
		});
	});
}