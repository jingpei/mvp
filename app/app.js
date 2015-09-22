var billSplitter = angular.module('billSplitter', ['ngRoute'])

billSplitter.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/people/splitters.html',
      controller: 'splittersController'
    })
    .when('/receipt', {
      templateUrl: 'app/receipt/receipt.html',
      controller: 'receiptController'
    })
    .when('/total', {
      templateUrl: 'app/total/total.html',
      controller: 'totalController'
    })
    .when('/:selected_person', {
      templateUrl: 'app/person/person.html',
      controller: 'personController'
    })
});

billSplitter.factory('Users', function () {
  return {};
})

billSplitter.factory('Items', function() {
  return {
    items: []
  };
})