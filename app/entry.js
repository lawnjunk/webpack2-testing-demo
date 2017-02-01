'use strict';
console.log('hello world');
const angular = require('angular');

angular.module('demoApp', [])
.service('lulwatService', function(){
  let wat = {};
  wat.sayHello = function(){
    return 'hello';
  }
  return wat;
})
.component('lulwat', {
  template: `<h2> {{ lulwatCtrl.title }} </h2`,
  controllerAs: 'lulwatCtrl',
  controller: ['$log', function($log){
    this.title = 'cool beans';

    this.forFunz = function(){
      return this.title;
    }
  }],
});
