angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      template: '\
        <a href="#inbox/ari">View Your Inbox</a>\
      '
    });
}]);