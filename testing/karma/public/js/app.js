angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'templates/home.html'
    })
    .when('/dashboard', {
      controller: 'DashboardCtrl',
      templateUrl: 'templates/dashboard.html'
    });
}])
;