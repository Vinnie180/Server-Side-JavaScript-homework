/**
 * Get all cars from the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.cars = [
            {
                _id: 1,
                plate: 'AMG-563',
                brand: 'Mercedes-Benz',
                length: 5.00,
                capacity: 5,
                trunk: 461
            },
            {
                _id: 2,
                plate: 'ABC-123',
                brand: 'Toyota',
                length: 4.50,
                capacity: 5,
                trunk: 500
            },
            {
                _id: 3,
                plate: 'XYZ-987',
                brand: 'Ford',
                length: 4.70,
                capacity: 5,
                trunk: 550
            }
        ];

        return next();
    };
}