angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      template: '\
        <a href="#inbox/ari">View Your Inbox</a>\
      '
    })
    .when('/inbox/:name', {
      controller: 'InboxController',
      template: '\
        <h1>Welcome to your inbox, {{ name }}</h1>\
        <a href="#/">Back</a>\
      '
    })
    .otherwise({redirectTo: '/'});
}])

.controller('InboxController', function($scope, $routeParams) {
  $scope.name = $routeParams.name;
});