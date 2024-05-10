/**
 * Delete a passanger from the database
 * - if there is no such passanger, redirect to /passangers
 * - if there is a passanger, delete it and redirect to /passangers
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
}