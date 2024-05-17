var expect = require('chai').expect;
var getPassengerMW = require('../../../../middlewares/passenger/getPassengerMW');

describe('getPassengerMW middleware ', function () {
    it('should return passenger', function (done) {
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

        mw({
            params: {
                passengerid: '1234'
            }
        },
            resMock,
            (err) => {
                expect(err).to.not.exist;
                expect(resMock.locals).to.be.eql({ passenger: 'mockPassenger' });
                done();
            });
    });

    it('should redirect to /passengers', function (done) {
        const mw = getPassengerMW({
            passengerModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve(null);
                }
            }
        });

        const resMock = {
            redirect: (where) => {
                expect(where).to.be.eql('/passengers');
                done();
            }
        };

        mw({
            params: {
                passengerid: '1234'
            }
        },
            resMock,
            () => { });
    });

    it('should call next with error', function (done) {
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

        mw({
            params: {
                passengerid: '1234'
            }
        },
            resMock,
            (err) => {
                expect(err).to.be.eql('error');
                done();
            });
    });
});