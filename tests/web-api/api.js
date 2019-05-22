
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('API Endpoints ', function () {
    describe('POST: Insert URL Data', function () {
        let path = '/check/tracksite';
        it('should return list of url status and new post', function (done) {
            chai.request(global.express_server).post(path).send({'url': 'https://www.detik.com'}).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.data.listUrl.should.be.an('array');
                    done();
                }
            });
        });
    });

    describe('GET: Get List URL', function () {
        let path = '/check/tracksite';
        it('should return list of url status and new post', function (done) {
            chai.request(global.express_server).get(path).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.data.listUrl.should.be.an('array');
                    done();
                }
            });
        });
    });

    describe('DELETE: Delete Site', function () {
        let path = '/check/tracksite';
        it('should return list of url status and new post', function (done) {
            chai.request(global.express_server).delete(path).send({'_id': '5c96faf9d202bb1836f01a35'}).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.message.should.equal('Succesfully deleted data Site');
                    done();
                }
            });
        });
    });

    after('close application server', function (done) {
        global.express_server.close();
        done();
    });
});
