/**
 * Get a passanger by id from the database
 * - if the passanger is not found call next with an error
 * - if there is a passanger, put it on res.locals.passanger
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const passengerModel = requireOption(objectrepository, 'passengerModel');

    return function (req, res, next) {
        passengerModel.findOne({ _id: req.params.passengerid }).then(passenger => {
            if (!passenger) {
                return next(new Error('Car not found'));
            }
            res.locals.passenger = passenger;
            return next();
        }).catch(err => {
            return next(err);
        });
    };
}