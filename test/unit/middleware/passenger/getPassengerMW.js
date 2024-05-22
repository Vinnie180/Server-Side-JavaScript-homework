var expect = require('chai').expect;
var getPassengerMW = require('../../../../middlewares/passenger/getPassengerMW');

describe('getPassengerMW middleware ', function () {
    it('should return a passenger from the database by id with no error', function (done) {
        const mw = getPassengerMW({
            passengerModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve('mockPassenger');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        const reqMock = {
            params: {
                passengerid: '1234'
            }
        };

        mw( reqMock,
            resMock,
            (err) => {
                expect(err).to.not.exist;
                expect(resMock.locals).to.be.eql({ passenger: 'mockPassenger' });
                done();
            });
    });

    it('should call next with error if passenger does not exist', function (done) {
        const mw = getPassengerMW({
            passengerModel: {
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
                passengerid: '1234'
            }
        };

        mw( reqMock,
            resMock,
            (err) => {
                expect(err).to.exist;
                expect(resMock.locals).to.be.eql({});
                done();
            });
    });

    it('should call next with error if findOne throws error', function (done) {
        const mw = getPassengerMW({
            passengerModel: {
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
                passengerid: '1234'
            }
        };

        mw( reqMock,
            resMock,
            (err) => {
                expect(err).to.be.eql('error');
                done();
            });
    });
});