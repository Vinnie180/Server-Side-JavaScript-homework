/**
 * Get all passangers from the database
 * and put them on res.locals.passangers
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
}