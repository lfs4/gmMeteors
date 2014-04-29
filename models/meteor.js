var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var meteorSchema = new Schema
    ({
        name: String,
        classification: String,
        mass: Number,
        fall: String,
        year: Number,
        latitude: Number,
        longitude: Number
    });

 mongoose.model('Meteor', meteorSchema);
