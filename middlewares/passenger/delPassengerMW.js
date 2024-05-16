/**
 * Delete a passanger from the database
 * - if there is no such passanger, redirect to /passangers
 * - if there is a passanger, delete it and redirect to /passangers
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const passengerModel = requireOption(objectrepository, 'passengerModel');
        if (typeof res.locals.passenger === 'undefined') {
            return next();
        }

        passengerModel.deleteOne({ _id: res.locals.passenger.id }).then(() => {
            if (!passenger) {
                return next(new Error('Car not found'));
            }
            return res.redirect('/passengers/'+ req.params.carid);
        }).catch(err => {
            return next(err);
        });

        return next();
    };
}