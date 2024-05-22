/**
 * Get all cars from the database
 * - store the cars in res.locals.cars
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        carModel.find({}).then(cars => {
            res.locals.cars = cars;
            return next();
        }).catch(err => {
            return next(err);
        });
    };
}