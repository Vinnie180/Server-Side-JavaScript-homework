var expect = require('chai').expect;
var getCarMW = require('../../../../middlewares/car/getCarMW');

describe('getCarMW middleware ', function () {
    it('should return a car from the database by id with no error', function (done) {
        const mw = getCarMW({
            carModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve('mockCar');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        const reqMock = {
            params: {
                carid: '1234'
            }
        };

        mw( reqMock,
            resMock,
            (err) => {
                expect(err).to.not.exist;
                expect(resMock.locals).to.be.eql({ car: 'mockCar' });
                done();
            });
    });

    it('should call next with error if car not exist', function (done) {
        const mw = getCarMW({
            carModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve(null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        const reqMock = {
            params: {
                carid: '1234'
            }
        };

        mw( reqMock,
            resMock,
            (err) => {
                expect(err).to.exist;
                done();
            });
    });

    it('should call next with error if findOne throws error', function (done) {
        const mw = getCarMW({
            carModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.reject('error');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        const reqMock = {
            params: {
                carid: '1234'
            }
        };

        mw( reqMock,
            resMock,
            (err) => {
                expect(err).to.exist;
                done();
            });
    });
});