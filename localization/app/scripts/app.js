angular.module('myApp', ['gettext'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'views/home.html'
  });
})
.controller('HomeCtrl', function($scope, gettextCatalog) {
  $scope.user = {
    name: "Ari"
  }
  $scope.count = 1;

  $scope.changeLanguage = function() {
    gettextCatalog.currentLanguage = 'es';
  }
})