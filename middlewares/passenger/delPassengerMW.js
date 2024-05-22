/**
 * Delete a passanger from the database
 * - if the passanger is not found call next with an error
 * - if the passanger is found delete it and redirect to /passengers
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