'use strict';

var chai = require('chai');
var should = chai.should();
var http = require('chai-http');
chai.use(http);

describe('Home', function() {
  var app = require('../../app.js');

  it('should GET / send 200', function(done) {
    var app = require('../../app.js');
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        should.not.exist(err);
        res.should.have.status(200);
        done();
      });
  });

  it('should GET /utter-failure send 404', function(done) {
    var app = require('../../app.js');
    chai.request(app)
      .get('/utter-failure')
      .end(function(err, res) {
        should.exist(err);
        res.should.have.status(404);
        done();
      });
  });
});
