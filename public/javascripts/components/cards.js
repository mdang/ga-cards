(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('cards', {
    controller: function($http) {
      var self = this;

      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        console.log('success', response.data);

        self.cards = response.data;
      }, function errorCallback(response) {
        console.log('error', response);
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
