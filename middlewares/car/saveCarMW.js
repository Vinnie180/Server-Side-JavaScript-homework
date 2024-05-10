/**
 * Save a car to the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log(req.body);
        return next();
    };

}