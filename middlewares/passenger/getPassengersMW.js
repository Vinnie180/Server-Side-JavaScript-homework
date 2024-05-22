/**
 * Get all passengers from the database that are in the car that is in the res.locals.car variable
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const passengerModel = requireOption(objectrepository, 'passengerModel')

    return function (req, res, next) {

        if(typeof res.locals.car === 'undefined') {
            return next();
        }

        passengerModel.find({_car: res.locals.car._id}).then(passengers => {
            res.locals.passengers = passengers;
            return next();
        }).catch(err => {
            return next(err);
        });
    };
}