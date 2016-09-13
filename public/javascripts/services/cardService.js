(function() {
  'use strict';

  var app = angular.module('CardsAgainstAssembly');

  app.service('CardService', function($http) {
    this.all = function(callback) {
      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        console.log('success', response.data);

        callback(response.data);
      }, function errorCallback(response) {
        console.log('error', response);
      });
    }

    this.save = function(newQuestion, callback) {
      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: newQuestion
        }
      }).then(function successCallback(response) {

        callback();

      }, function errorCallback(response) {
          console.log('error', response);
      });
    }
  });
})();
