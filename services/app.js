
angular.module('myApp.services', [])
  .factory('githubService', ['$http', function($http) {
  var githubUrl = 'https://api.github.com',
      githubUsername;

  var runUserRequest = function(username, path) {
    // Returns promise
    return $http({
      method: 'JSONP',
      url: githubUrl + '/users/' +
           username + '/' +
           path + '?callback=JSON_CALLBACK'
    });
  };

  return {
    events: function(username) {
      return runUserRequest(username, events);
    },
    setUsername: function(username) {
      githubUsername = username;
    }
  };
}]);


var app = angular.module('myApp', []);

app.controller('ServiceController', [
  '$scope', '$timeout', 'githubService',
    function($scope, $timeout, githubService) {
    var timeout;
    $scope.$watch('username', function(newUsername) {
      if (newUsername) {
        // wait 350 ms between keystrokes before querying github
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          githubService.events(newUserName)
            .success(function(data, status) {
              $scope.events = data.data;
            });
        }, 350);
      }
      githubService.events(newUsername)
        .success(function(data, status, headers) {
          // success wraps response in data, call data.data to get raw data
          $scope.events = data.data;
        });
    });
}]);

