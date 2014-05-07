module.exports = function(app)
{

// app.get('/', routes.index);
// app.get('/users', users.list);
var index = require('./controllers/index');
var cars = require('./controllers/cars');
var fact = require('./controllers/factory');
//var car = require('./models/car');
var Factory = require('./models/factory');
var meteors = require('./controllers/meteors');
var map = require('./controllers/map');
var dec = require('./controllers/decorator.js');
var facade = require('./controllers/facade.js');

app.get('/', index.index);
app.get('/meteors', meteors.findMeteors);
app.get('/cars', cars.displayCar);
app.get('/factory', fact.displayVehicle);
app.get('/facade', facade.showCar);
app.get('/patterns', function(req,res){
    res.render('patterns',
    {
        title: "Design Patterns"
    });
});
//app.get('/map',map.initialize);
app.get('/dec', dec.displayChanges);
// app.get('/map', function(req,res){
//     res.render('map', {
//         title: "Maps",
//         test: {test: "test data", butts: "butts"},
//     });
// })
app.get('/map', meteors.meteorMap);
app.post('/map', meteors.meteorMap);

app.post('/meteors', meteors.findMeteors);

var factory = new Factory();

/*var myTruck = factory.createVehicle({
    vehicleType: "Truck",
    model: "jeep",
    year: 1563,
    miles: "all"
});


var myCar = factory.createVehicle({
    vehicleType: "car",
     model: "ford", 
     year: 1999,
     miles: 789
 });
*/
// console.log(myCar);
// console.log(myTruck);
/*var myCar = new car("ford", 45, 78);
console.log(myCar);
console.log(myCar.mySpecs());*/
// var carString = myCar.mySpecs();

//console.log(myCar.mySpecs());

//app.get('/patterns', routes.creational);


/*app.get('/newApp', function(req,res,next){
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
});*/

}

/*
*/