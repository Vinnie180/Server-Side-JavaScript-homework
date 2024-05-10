const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Passenger = db.model('Passenger', {
    name: String,
    age: Number,
    drivenHours: Number,
    //TODO ADD LINK TO CAR
});

module.exports = Passenger;