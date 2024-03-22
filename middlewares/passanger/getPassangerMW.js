/**
 * Get a passanger by id from the database
 * - if there is no such passanger, redirect to /passangers
 * - if there is a passanger, put it on res.locals.passanger
 */

var requireOption = require('../common').requireOption;