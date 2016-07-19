'use strict';

var chai = require('chai');
var should = chai.should();
var http = require('chai-http');
chai.use(http);

describe('Home', function() {
  var app = require('../../app.js');

  it('should GET /users send 200', function(done) {
    var app = require('../../app.js');
    chai.request(app)
      .get('/users')
      .end(function(err, res) {
        should.not.exist(err);
        res.should.have.status(200);
        done();
      });
  });
});
