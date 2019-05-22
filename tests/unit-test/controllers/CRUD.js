
const chai = require('chai');
let CRUDController;
let should = chai.should();

describe('Controller: CRUDController', function () {
    before('load helpers', function (done) {
        CRUDController = global.controllers.CRUDController;
        done();
    });

    describe('Controller for create data', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudCheckController({schema: 'SiteTest', value: {url: 'https://www.detik.com', status: true}, method: 'POST'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully saving SiteTest data');
        });
    });

    describe('Controller for get data', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudCheckController({schema: 'SiteTest', value: null, select: null, method: 'GET'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully get data SiteTest');
            result.result.should.be.an('array');
        });
    });

    describe('Controller for delete data', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudCheckController({schema: 'SiteTest', value: {url: 'https://www.detik.com'}, method: 'DELETE'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Succesfully deleted data SiteTest');
        });
    });

    describe('Controller for update site status', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.updateAndGetSiteController([
                {
                    '_id': '5c979d4ce90c831d5122577e',
                    'url': 'https://www.detik.com',
                    'status': true,
                    'createdAt': '2019-03-24T15:07:56.052+00:00',
                    'updatedAt': '2019-03-24T15:07:56.052+00:00',
                    '__v': 0
                },
                {
                    '_id': '5c979d4ce90c831d5122577e',
                    'url': 'https://www.detik.com',
                    'status': false,
                    'createdAt': '2019-03-24T15:07:56.052+00:00',
                    'updatedAt': '2019-03-24T15:07:56.052+00:00',
                    '__v': 0
                }]);
            should.exist(result);
            result.should.be.an('array');
        });
    });
});
