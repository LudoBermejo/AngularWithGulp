//Load controller
  angular.module('boilerApp.sample.controllers', [])

  .controller('SampleController', [
    '$scope',
    function($scope) {
      $scope.test = "Done!";
    }
  ]);