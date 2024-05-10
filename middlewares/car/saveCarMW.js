/**
 * Save a car to the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        
        if ((typeof req.body.licensePlate === 'undefined') ||
            (typeof req.body.brand === 'undefined') ||
            (typeof req.body.length === 'undefined') ||
            (typeof req.body.capacity === 'undefined') ||
            (typeof req.body.trunkCapacity === 'undefined')) {
            return next();
        }
        
        console.log("saveCarMW: " + req.body.licensePlate);
        console.log(req.body);
        res.redirect('/cars');
    };

}