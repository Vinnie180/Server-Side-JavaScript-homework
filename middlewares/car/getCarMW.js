/**
 * Get a car from the database by id
 * - if there is no such car, redirect to /cars
 * - if there is a car, put it on res.locals.car
 */

var requireOption = require('../common').requireOption;