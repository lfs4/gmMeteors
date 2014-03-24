var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');

var calc = require('./public/javascripts/calculate');

var app = express();

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

app.get('/calculator', routes.calculator);

app.post('/doCalc', function(req,res,next){
    var num1 = +req.body['num1'];
    var num2 = +req.body['num2'];

    var resultSet = calc.calculate(num1,num2,"+");

    res.send("Result Set: " + resultSet);
});
// app.post('/doCalc', routes.calculate)
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


module.exports = app;
