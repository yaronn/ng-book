'use strict';

angular.module('gapappApp')
  .controller('MainCtrl', function($scope, Cordova) {
    Cordova.navigator().then(function(n) {
      console.log("NAVIGATOR", n);
      navigator.notification.vibrate();
    });
  });
