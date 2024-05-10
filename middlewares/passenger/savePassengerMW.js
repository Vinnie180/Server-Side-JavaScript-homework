/**
 * Save a car to the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.age === 'undefined') ||
            (typeof req.body.drivenHours === 'undefined')) {
            return next();
        }
        console.log("savePassengerMW: " + req.body.name);
        return next();
    };
}