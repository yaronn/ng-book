angular.module('myApp', [])
.controller('signupController', ['$scope', function($scope) {
  // $scope.submitted = undefined;
  $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
      // submit as normal
    } else {
      $scope.signup_form.submitted = true;
    }
  };
}]);


angular.module('myApp.directives', [])
.directive('ensureUnique', ['$http', function($http) {
  return {
    require: 'ngModel',

    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function() {
        $http({
          method: 'POST',
          url: '/api/check/' + attrs.ensureUnique,
          data: {'field': attrs.ensureUnique}
        }).success(function(data, status, headers, cfg) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data, status, headers, cfg) {
          c.$setValidity('unique', false);
        });
      });
    }

  };
}])

.directive('ngFocus', [function() {
  var FOCUS_CLASS = 'ng-focused';
  return {
    restrict: 'A',
    require: 'ngModel',

    link: function(scope, el, attrs, ctrl) {
      ctrl.$focused = false;
      el.bind('focus', function(event) {
        el.addClass(FOCUS_CLASS);
        scope.$apply(function() {ctrl.$focused = true;});
      }).bind('blur', function(event) {
        el.removeClass(FOCUS_CLASS);
        scope.$apply(function() {ctrl.$focused = false;});
      })
    }
  };
}]);
