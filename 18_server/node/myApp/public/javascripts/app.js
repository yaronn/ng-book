angular.module('myApp', [
  'ngRoute',
  'myApp.services'
])
.controller('HomeCtrl', function($scope, HitService) {
  HitService.count().then(function(data) {
    $scope.hits = data;
  })

  $scope.registerHit = function() {
    HitService.registerHit().then(function(data) {
      $scope.hits = data;
    })
  }
});
