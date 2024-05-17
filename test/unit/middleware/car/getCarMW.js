var expect = require('chai').expect;
var getCarMW = require('../../../../middlewares/car/getCarMW');

describe('getCarMW middleware ', function () {
    it('should return car', function (done) {
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

        mw({
            params: {
                carid: '1234'
            }
        },
            resMock,
            (err) => {
                expect(err).to.not.exist;
                expect(resMock.locals).to.be.eql({ car: 'mockCar' });
                done();
            });
    });

    it('should call next with error', function (done) {
        const mw = getCarMW({
            carModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.reject('error');
                }
            }
        });

        mw({
            params: {
                carid: '1234'
            }
        },
            {},
            (err) => {
                expect(err).to.be.eql('error');
                done();
            });
    });
});