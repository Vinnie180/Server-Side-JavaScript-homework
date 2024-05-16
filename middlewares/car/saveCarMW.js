/**
 * Save a car to the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        
        if ((typeof req.body.licensePlate === 'undefined') ||
            (typeof req.body.brand === 'undefined') ||
            (typeof req.body.length === 'undefined') ||
            (typeof req.body.capacity === 'undefined') ||
            (typeof req.body.trunkCapacity === 'undefined')) {
            return next();
        }

        if(typeof res.locals.car === 'undefined') {
            res.locals.car = new objectrepository.carModel();
        }

        res.locals.car.licensePlate = req.body.licensePlate;
        res.locals.car.brand = req.body.brand;
        res.locals.car.length = req.body.length;
        res.locals.car.capacity = req.body.capacity;
        res.locals.car.trunkCapacity = req.body.trunkCapacity;

        res.locals.car.save().then(car => {}).catch(err => { return next(err); });
        
        res.redirect('/cars');
    };

}