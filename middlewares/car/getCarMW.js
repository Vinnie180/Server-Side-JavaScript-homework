/**
 * Get a car from the database by id
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.car = 
            {
                _id: 1,
                plate: 'AMG-563',
                brand: 'Mercedes-Benz',
                length: 5.00,
                capacity: 5,
                trunk: 461
            };

        return next();
    };
}