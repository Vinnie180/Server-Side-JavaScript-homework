const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

//app.use(express.static('static'));

require('./routes/index')(app);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// //create a new car in the database

// const carmodel = require('./models/car');
// const car = new carmodel();
// car.licensePlate = "ABC123";
// car.brand = "Toyota";
// car.length = 4.5;
// car. capacity = 5;
// car.trunkCapacity = 340;

// //saving the car to mongodb database using mongoose

// car.save().then(() => {
//     console.log('Car has been saved');
// }).catch((error) => {
//     console.log('Error', error);
// });

// //create a new passenger in the database

// const passengermodel = require('./models/passenger');
// const passenger = new passengermodel();
// passenger.name = "John Doe";
// passenger.age = 30;
// passenger.drivenHours = 100;
// passenger._car = car;


// passenger.save().then(() => {
//     console.log('Passenger has been saved');
// }).catch((error) => {
//     console.log('Error', error);
// });