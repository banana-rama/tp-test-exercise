'use strict';

var should = require('chai').should();

var clonator = require('../index.js');
var mocks = require('./mocks.js');

describe('clonator', function () {

  it('should clone primitive values', function () {
    clonator(mocks.num).should.equal(mocks.num);
    clonator(mocks.string).should.equal(mocks.string);
    clonator(mocks.bool).should.equal(mocks.bool);
    clonator(mocks.func).should.equal(mocks.func);
    clonator('').should.equal('');
    should.equal(clonator(null), null);
    should.equal(clonator(undefined), undefined);
  });

  it('should clone composite values', function () {
    clonator(mocks.arr).should.eql(mocks.arr);
    clonator(mocks.arr).should.not.equal(mocks.arr);
    clonator(mocks.obj).should.eql(mocks.obj);
    clonator(mocks.obj).should.not.equal(mocks.obj);
    clonator(mocks.nestedArr).should.eql(mocks.nestedArr);
    clonator(mocks.nestedArr).should.not.equal(mocks.nestedArr);
    clonator(mocks.nestedObj).should.eql(mocks.nestedObj);
    clonator(mocks.nestedObj).should.not.equal(mocks.nestedObj);
  });

  it('should deep clone nested composite values', function () {
  });

});
