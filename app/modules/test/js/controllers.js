//Load controller
  angular.module('boilerApp.test.controllers', [])

  .controller('TestController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);