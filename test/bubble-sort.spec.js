var bSort = require( './../bubble-sort.js' );
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('The algorithm should bubble sort', function(){

  it('should exist', function(){
    expect(bSort).to.exist;
  });

  it('should be a function', function(){
    expect(bSort).to.be.a('function');
  });

  it('the 1-2 array should be sorted correctly', function(){
    expect(bSort([2, 1])).to.deep.equal([1, 2]);
  });

  it('the 1-5 array should be sorted correctly', function(){
    expect(bSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('the 1-10 array should be sorted correctly', function(){
    expect(bSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('the random array should be sorted correctly', function(){
    expect(bSort([3, 5, 1, 7, 8, 19, 4, 22, 9, 2])).to.deep.equal([1, 2, 3, 4, 5, 7, 8, 9, 19, 22]);
  });

});