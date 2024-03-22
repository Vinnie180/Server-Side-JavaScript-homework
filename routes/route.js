var renderMW = require('./generic/renderMW');

var getCarsMW = require('./car/getCarsMW');
var getCarMW = require('./car/getCarMW');
var saveCarMW = require('./car/saveCarMW');
var delCarMW = require('./car/delCarMW');

var getPassegersMW = require('./passeger/getPassegersMW');
var getPassegerMW = require('./passeger/getPassegerMW');
var savePassegerMW = require('./passeger/savePassegerMW');
var delPassegerMW = require('./passeger/delPassegerMW');

var carModel = require('../models/car');
var passegerModel = require('../models/passeger');

module.exports = function (app) {
    var objectrepository = {
        carModel: carModel,
        passegerModel: passegerModel
    };
}

app.get('/cars',
    getCarsMW(objectrepository),
    renderMW(objectrepository, 'index')
);

app.use('/cars/new',
    saveCarMW(objectrepository),
    renderMW(objectrepository, 'carForm')
);

app.use('/cars/edit/:carid',
    getCarMW(objectrepository),
    saveCarMW(objectrepository),
    renderMW(objectrepository, 'carForm')
);

app.get('/cars/del/:carid',
    getCarMW(objectrepository),
    delCarMW(objectrepository),
    function (req, res, next) {
        return res.redirect('/index');
    }
);

app.get('/passegers/:carid',
    getPassegersMW(objectrepository),
    renderMW(objectrepository, 'passegers')
);

app.use('/passegers/:carid/new',
    savePassegerMW(objectrepository),
    renderMW(objectrepository, 'passegerForm')
);

app.save('/passangers/:carid/:passangerid',
    getPassegerMW(objectrepository),
    savePassegerMW(objectrepository),
    renderMW(objectrepository, 'passegerForm')
);

app.get('/passangers/:carid/:passangerid/del',
    getPassegerMW(objectrepository),
    delPassegerMW(objectrepository),
    function (req, res, next) {
        return res.redirect('/passegers/' + req.params.carid);
    }
);