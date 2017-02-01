'use strict';

const expect = require('chai').expect;

describe('this is a test', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject((lulwatService) => {
      this.lulwatService = lulwatService;
    })
  });
  it('should  fail', () => {
    expect(this.lulwatService.sayHello()).to.equal('hello');
    expect(true).to.equal(true);
  });
});
