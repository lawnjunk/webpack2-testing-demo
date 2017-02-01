'use strict';

const expect = require('chai').expect;

describe('this is a test', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
    })
  });

  it('title should be "cool beans"', () => {
    let lulwat = this.$componentController('lulwat');
    expect(lulwat.title).to.equal('cool beans');
  });

  it('lulwat.forFunz should return lulwat.title', () => {
    let lulwat = this.$componentController('lulwat');
    expect(lulwat.forFunz()).to.equal(lulwat.title);
  });
});
