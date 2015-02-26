var app     = require('../bin/www')
  , request = require('supertest')(app)
  , should  = require('should');

describe('Pages error' , function() {
    it('Page Not found - Status 404', function(done) {
        request.get('/not-found').end(function(err, res){
            res.status.should.eql(404);
        });

        done();
    });
});
