const chai = require('chai')
const expect = chai.expect
const main = require('../src/main')

describe('warmUp', function () {
  it('is an object', function () {
    expect(main.warmUp).to.be.a('object')
  })
})

describe('compare', function () {
  it('should return a boolean value', function () {
    expect(main.compare()).to.be.a('boolean')
  })


  it('should compare if two arrays are equal', function () {
    expect(main.compare([1,2],[2,4])).to.equal(false)
  })


})
