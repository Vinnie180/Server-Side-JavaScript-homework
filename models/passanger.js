const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Passanger = db.model('Passanger', {
    name: String,
    age: Number,
    drivenHours: Number,
});

module.exports = Car;