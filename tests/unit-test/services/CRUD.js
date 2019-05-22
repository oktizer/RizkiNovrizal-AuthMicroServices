const chai = require('chai');
let crudService;
let should = chai.should();

describe('Service: CRUDService', function () {
    before('load helpers', function (done) {
        crudService = global.services.CRUDService;
        done();
    });

    describe('Create New Data', function () {
        it('should response new object after save data', function (done) {
            crudService.createNewCustom('SiteTest', {url: 'https://www.google.com', status: true}, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                result.should.be.an('object');
                result.url.should.be.a('string');
                result.url.should.equal('https://www.google.com');
                result.status.should.be.a('boolean');
                result.status.should.equal(true);
                done();
            });
        });
    });

    describe('Get all data', function () {
        it('should response all list data', function (done) {
            crudService.getAll('SiteTest', null, null, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                result.should.be.an('array');
                done();
            });
        });
    });

    describe('Update existing data', function () {
        it('should response new value in field which update before', async () => {
            const result = await crudService.updateCustom('SiteTest', {url: 'https://www.google.com'}, {status: false});
            should.exist(result.result);
            result.code.should.equal(200);
            result.result.should.be.an('object');
            result.result.url.should.be.a('string');
            result.result.url.should.equal('https://www.google.com');
            result.result.status.should.be.a('boolean');
            result.result.status.should.equal(false);
        });
    });

    describe('Delete existing data', function () {
        it('should response object has been deleted', function (done) {
            crudService.findOneCustomAndDelete('SiteTest', {_id: '5c9792ff42b0a51ceb02748d'}, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                result.should.be.an('object');
                done();
            });
        });
    });
});
