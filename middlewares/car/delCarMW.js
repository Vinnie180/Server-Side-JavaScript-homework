/**
 * Delete a car from the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const carModel = requireOption(objectrepository, 'carModel');

        if (typeof res.locals.car === 'undefined') {
            return next();
        }

        carModel.deleteOne({ _id: res.locals.car._id }).then(() => {
            if (!car) {
                return next(new Error('Car not found'));
            }
            return res.redirect('/cars');
        }).catch(err => {
            return next(err);
        });

        return next();
    };
}