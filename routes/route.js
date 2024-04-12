const renderMW = require('../middlewares/generic/renderMW');

const getCarsMW = require('../middlewares/car/getCarsMW');
const getCarMW = require('../middlewares/car/getCarMW');
const saveCarMW = require('../middlewares/car/saveCarMW');
const delCarMW = require('../middlewares/car/delCarMW');

const getPassengersMW = require('../middlewares/passenger/getPassengersMW');
const getPassengerMW = require('../middlewares/passenger/getPassengerMW');
const savePassengerMW = require('../middlewares/passenger/savePassengerMW');
const delPassengerMW = require('../middlewares/passenger/delPassengerMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/cars',
        getCarsMW(objRepo),
        renderMW(objRepo, 'index')
    );

    app.use('/cars/new',
        saveCarMW(objRepo),
        renderMW(objRepo, 'carForm')
    );

    app.use('/cars/edit/:carid',
        getCarMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'carForm')
    );

    app.get('/cars/del/:carid',
        getCarMW(objRepo),
        delCarMW(objRepo),
        function (req, res, next) {
            return res.redirect('/index');
        }
    );

    app.get('/passengers/:carid',
        getPassengersMW(objRepo),
        renderMW(objRepo, 'passengers')
    );

    app.use('/passengers/:carid/new',
        savePassengerMW(objRepo),
        renderMW(objRepo, 'PassengerForm')
    );

    app.save('/passengers/:carid/:passengerid',
        getPassengerMW(objRepo),
        savePassengerMW(objRepo),
        renderMW(objRepo, 'PassengerForm')
    );

    app.get('/passengers/:carid/:passengerid/del',
        getPassengerMW(objRepo),
        delPassengerMW(objRepo),
        function (req, res, next) {
            return res.redirect('/Passengers/' + req.params.carid);
        }
    );
}