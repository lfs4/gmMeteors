var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var csv = require('csv');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');
var meteors = require('./routes/meteors');

var calc = require('./public/javascripts/calculate');

var records = new Array();

var app = express();

var records = [];
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: '));

db.once('open', function callback(){
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
    })

    var Meteor = mongoose.model('Meteor', meteorSchema)

    Meteor.find({'year' : 1984}, function(err, meteors){
            if(err) return console.error(err);
            foreach(Meteor in meteors)
            {
                console.log(Meteor);
            }
            //var meteor = new()
            //console.log();
    })
*/
})



var meteorSchema = mongoose.Schema
    ({
        name: String,
        classification: String,
        mass: Number,
        fall: String,
        year: Number,
        latitude: Number,
        longitude: Number
    })

    var Meteor = mongoose.model('Meteor', meteorSchema)

    //console.log(meteors);

/*var records = [];
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: '));
db.once('open', function callback(){

   var meteorSchema = mongoose.Schema({
    name: String,
    classification: String,
    mass: Number,
    fall: String,
    year: Number,
    latitude: Number,
    longitude: Number
})

var Meteor = mongoose.model('Meteor', meteorSchema)

Meteor.find(function(err, meteors){
         if(err) return console.error(err);
             console.log(meteors)
})

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
*/



/*Kitten.find(function(err, kittens){
    if(err) return console.error(err);
    console.log(kittens)
})*/
/*kittySchema = mongoose.Schema({
    name: String
})


kittySchema.methods.speak = function(){
    var greeting = this.name

    ? "Meow name is " + this.name

    : "I dont have a name"

    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema)

var silence = new Kitten({name: 'Silence'})
console.log(silence.name)

var fluffy = new Kitten({name: 'fluffy'});
fluffy.speak()

var mrwiskers = new Kitten({name: 'mr wiskers'});



*/
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

app.get('/', routes.index);
app.get('/users', users.list);

var year = 1972;
var name = /^A/;

app.get('/meteors', function(req,res){
    Meteor.find({year: year}, function(err, meteors){
            //console.log(meteor.name);
            res.render('meteors', {
            title: 'Meteors from '+ year,
            meteors: meteors
          });
        });
});



app.get('/newApp', function(req,res,next){
    res.send({name: "Lou", message: "why am i still alive"});
    // res.render('index',{title: 'Butts'});
});
app.get('/testing', function(req,res,next){
    res.send({name: "test", 
        add: calc.calculate(4,5,"+"),
        subtract : calc.calculate(10, 5, "-"),
        divide: calc.calculate(20, 10, "/"),
        multiply: calc.calculate(5, 4, "*")
    });

});
app.get('/unit', routes.unit)
app.get('/calculator', routes.calculator);

app.post('/doCalc', function(req,res,next){

});
app.post('/calculator', routes.calculate);
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

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


// require('./routes')(app);

module.exports = app;
