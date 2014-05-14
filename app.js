var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var csv = require('csv');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

 var Meteor = require('./models/meteor.js');
//var routes = require('./routes');
/*var users = require('./routes/user');
var meteors = require('./routes/meteors');
var cerational = require('./routes/creational');*/

/*var calc = require('./public/javascripts/calculate');*/

var records = new Array();

var app = express();

var records = [];
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
require('./models/meteor');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: '));

db.once('open', function callback(){

/*   var meteorSchema = mongoose.Schema({
    name: String,
    classification: String,
    mass: Number,
    fall: String,
    year: Number,
    latitude: Number,
    longitude: Number
})*/

//var Meteor = mongoose.model('Meteor', meteorSchema)

// Meteor.find(function(err, meteors){
//          if(err) return console.error(err);
//              console.log(meteors)
// })

 //Meteor.find({year: 1984}, callback)

csv(records).from.stream(fs.createReadStream(__dirname + '/meteors.csv'), {
    columns: true
})
    .on('record', function(row, index){
    records.push(row);
    var meteor = new Meteor({
        name: row.name,
        classification: row.recclass,
        mass: row.mass,
        fall: row.fall,
        year: row.year,
        latitude: row.reclat,
        longitude: row.reclong
    })

    meteor.save(function(err,meteor){
        if(err) return console.error(err);
    });
    console.log(meteor);
    //console.log("Name: " + row.name + "Year: " + row.year + "Mass: " + row.mass);
})
    .on('end', function(count){
        console.log("Number of lines: " + count);

    
});


});
/*


var meteorSchema = mongoose.Schema
    ({
        name: String,
        classification: String,
        mass: Number,
        fall: String,
        year: Number,
        latitude: Number,
        longitude: Number
    })*/

   // var Meteor = mongoose.model('Meteor', meteorSchema)




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


 require('./routes')(app);


/*http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});*/
module.exports = app;
