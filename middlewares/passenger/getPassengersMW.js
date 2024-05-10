/**
 * Get all passangers from the database
 * and put them on res.locals.passangers
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.passengers = [
            {
                _id: 1,
                name: 'John Doe',
                age: 30,
                hoursdriven: 100
            },
            {
                _id: 2,
                name: 'Jane Doe',
                age: 25,
                hoursdriven: 50
            },
            {
                _id: 3,
                name: 'John Smith',
                age: 35,
                hoursdriven: 200
            }
        ];

        return next();
    };
}