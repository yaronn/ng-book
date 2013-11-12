'use strict';

angular.module('gapappApp')
  .controller('MainCtrl', function($scope, Cordova) {
    Cordova.navigator().then(function(n) {
      navigator.notification.vibrate();
    });
  });
