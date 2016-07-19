'use strict';

var chai = require('chai');
var should = chai.should();

describe('Hello', function() {
  it('should say hello', function() {
    var hello = 'hello';
    should.exist(hello);
    hello.should.equal('hello');
  });
});
