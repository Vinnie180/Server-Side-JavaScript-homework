const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Passenger = db.model('Passenger', {
    name: String,
    age: Number,
    drivenHours: Number,
});

module.exports = Passenger;