'use strict';
var expect = require('chai').expect;
var challenge = require('./challenge.js');

describe('challenge', function() {
  it('should exist', function() {
    var challengeFile = require('./challenge.js');
    expect(challengeFile).to.not.be.undefined;
  })
});

describe('#smallestCommons', function(){
  it('should return a number', function() {
    var input = [1, 3];
    var actual = challenge.smallestCommons(input);
    expect(actual).to.be.a('number');
  })
});

describe('#smallestCommons', function(){
  it('should return 6 for 1 and 3', function() {
    var input = [1, 3];
    var expected = 6;
    var actual = challenge.smallestCommons(input);
    expect(actual).to.eql(expected);
  })
});

describe('#smallestCommons', function(){
  it('should return 6 for 3 and 1', function() {
    var input = [3, 1];
    var expected = 6;
    var actual = challenge.smallestCommons(input);
    expect(actual).to.eql(expected);
  })
});

describe('#smallestCommons', function(){
  it('should return 60 for 1 and 5', function() {
    var input = [1, 5];
    var expected = 60;
    var actual = challenge.smallestCommons(input);
    expect(actual).to.eql(expected);
  })
});

describe('#smallestCommons', function(){
  it('should return 360360 for 1 and 13', function() {
    var input = [1, 13];
    var expected = 360360;
    var actual = challenge.smallestCommons(input);
    expect(actual).to.eql(expected);
  })
});

describe('#isOdd', function(){
  it('should return true for 7', function() {
    var input = 7;
    var expected = true;
    var actual = challenge.isOdd(input);
    expect(actual).to.eql(expected);
  })
});

describe('#isOdd', function(){
  it('should return true for 4', function() {
    var input = 4;
    var expected = false;
    var actual = challenge.isOdd(input);
    expect(actual).to.eql(expected);
  })
});

describe('#smallestCommons', function(){
  it('should return 6056820 for 23 and 18', function() {
    var input = [23, 18];
    var expected = 6056820;
    var actual = challenge.smallestCommons(input);
    expect(actual).to.eql(expected);
  })
});

describe('#smallestCommons', function(){
  it('should return 1000001000 for 1000 and 100001', function() {
    var input = [1000, 100001];
    var expected = 1000001000;
    var actual = challenge.smallestCommons(input);
    expect(actual).to.eql(expected);
  })
});
