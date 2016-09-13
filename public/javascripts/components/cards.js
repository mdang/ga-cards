(function() {
  'use strict';
  
  var app = angular.module('CardsAgainstAssembly');

  app.component('cards', {
    controller: function(Cards) {
      var self = this;

      Cards.get(function(result) {
        self.cards = result;
      });

      // this.cards = [
      //  { question: 'I couldn\'t complete my assignment because ________' },
      //  { question: 'I get by with a little help from ________' },
      //  { question: 'The field trip was completely ruined by ________' },
      //  { question: 'Kyle is a ________' },
      //  { question: 'What is my secret power?' }
      // ];
    },
    template: `
      <section id="cards" class="container-fluid">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4" ng-repeat="card in $ctrl.cards">
            <card question="{{card.question}}"></card>
          </div>
        </div>
      </section>
    `
  });

})();
