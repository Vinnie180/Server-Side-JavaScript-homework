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

    const carModel = require('../models/car');
    const passengerModel = require('../models/passenger');

    const objRepo = {
        carModel: carModel,
        passengerModel: passengerModel
    };

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
            return res.redirect('/cars');
        }
    );

    app.use('/cars',
        getCarsMW(objRepo),
        renderMW(objRepo, 'index')
    );

    //--------------------------

    app.get('/passengers/:carid',
        getCarMW(objRepo),
        getPassengersMW(objRepo),
        renderMW(objRepo, 'passengers')
    );

    app.use('/passengers/:carid/new',
        getCarMW(objRepo),
        savePassengerMW(objRepo),
        renderMW(objRepo, 'passengerForm')
    );

    app.use('/passengers/:carid/:passengerid',
        getCarMW(objRepo),
        getPassengerMW(objRepo),
        savePassengerMW(objRepo),
        renderMW(objRepo, 'passengerForm')
    );

    app.get('/passengers/:carid/del/:passengerid',
        getCarMW(objRepo),
        getPassengerMW(objRepo),
        delPassengerMW(objRepo),
        renderMW(objRepo, 'passengers')
    );

    app.get('/',
        function (req, res, next) {
            return res.redirect('/cars');
        }
    )
}