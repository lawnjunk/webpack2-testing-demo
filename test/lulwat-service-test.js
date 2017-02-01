'use strict';

describe('this is a test', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject((lulwatService) => {
      this.lulwatService = lulwatService;
    })
  });
  it('should  fail', () => {
    expect(this.lulwatService.sayHello()).toBe('hello');
    expect(true).toBe(true);
  });
});
