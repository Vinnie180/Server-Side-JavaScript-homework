const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car', {
    licensePlate: String,
    brand: String,
    length: Number,
    capacity: Number,
    trunkCapacity: Number,
});

module.exports = Car;