/**
 * Get a car from the database by id
 * - if the car is not found call next with an error
 * - if the car is found store it in res.locals.car and call next
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        carModel.findOne({_id: req.params.carid}).then(car => {
            if (!car) {
                return next(new Error('Car not found'));
            }
            res.locals.car = car;
            return next();
        }).catch(err => {
            return next(err);
        });
    };
}