/**
 * Save a passenger to the database
 * - if there is no passenger in res.locals create a new one
 *      - save the passenger to the database
 *      - redirect to /passenger
 * - if there is a passenger in res.locals update it
 *      - save the passenger to the database
 *      - redirect to /passenger
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const passengerModel = requireOption(objectrepository, 'passengerModel');

    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.age === 'undefined') ||
            (typeof req.body.drivenHours === 'undefined')||
            (typeof res.locals.car === 'undefined')) {
            return next();
        }

        if(typeof res.locals.passenger === 'undefined') {
            res.locals.passenger = passengerModel();
        }

        res.locals.passenger.name = req.body.name;
        res.locals.passenger.age = req.body.age;
        res.locals.passenger.drivenHours = req.body.drivenHours;
        res.locals.passenger._car = res.locals.car._id;

        res.locals.passenger.save().then(passenger => {}).catch(err => { return next(err); });
        
        res.redirect('/passengers/' + res.locals.car._id);
    };
}