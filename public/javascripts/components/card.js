(function() {
  'use strict';

  var app = angular.module('CardsAgainstAssembly');

  app.component('card', {
    bindings: {
      'question': '@'
    },

    controller: function() {
      this.showCard = false;
    },

    template: `
      <div class="card" ng-click="showCard=!showCard">
        <h4 class="card-title" ng-show="showCard">{{ $ctrl.question }}</h4>
        <h6>Cards Against Assembly</h6>
      </div>
    `
  });
})();
