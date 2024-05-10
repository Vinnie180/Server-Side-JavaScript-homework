/**
 * Get a passanger by id from the database
 * - if there is no such passanger, redirect to /passangers
 * - if there is a passanger, put it on res.locals.passanger
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
}