const mongose = require('mongoose');
mongose.connect('mongodb://localhost/e5ccla');

module.exports = mongose;