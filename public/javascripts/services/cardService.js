(function() {
  'use strict';

  var app = angular.module('CardsAgainstAssembly');

  app.service('Cards', function($http) {
    this.get = function(cb) {
      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        console.log('success', response.data);

        cb(response.data);
      }, function errorCallback(response) {
        console.log('error', response);
      });
    }
  });
})();
