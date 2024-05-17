var expect = require('chai').expect;
var delCarMW = require('../../../../middlewares/car/delCarMW');

describe('delCarMW middleware ', function () {
    it('should delete car', function (done) {
        const mw = delCarMW({
            carModel: {
                deleteOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve();
                }
            }
        });

        const resMock = {
            locals: {
                car: {
                    _id: '1234'
                }
            }
        };

        mw({},
            resMock,
            () => { });
    });

    it('should call next with error', function (done) {
        const mw = delCarMW({
            carModel: {
                deleteOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.reject('error');
                }
            }
        });

        mw({},
            {
                locals: {
                    car: {
                        _id: '1234'
                    }
                }
            },
            (err) => {
                expect(err).to.be.eql('error');
                done();
            });
    });

    it('should call next', function (done) {
        const mw = delCarMW({
            carModel: {
                deleteOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve();
                }
            }
        });

        mw({},
            {
                locals: {}
            },
            () => {
                done();
            });
    });
});