
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('API Endpoints ', function () {
    describe('POST: Generate Token', function () {
        let path = '/token/generate';
        it('should return api-key and token, and then save to redis', function (done) {
            chai.request(global.express_server).post(path).send(
                {
                    'email': 'rizkinovrizal@gmail.com'
                }).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    let data = response.body.data
                    response.body.should.be.an('object');
                    response.body.code.should.equal(200);
                    response.body.status.should.equal('OK');
                    data.key.should.be.a('string');
                    data.token.should.be.a('string');
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
