(function () {

'use strict';


  angular.module('boilerApp', ['ngRoute', 'testModule'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./modules/test/views/template.html",
          controller: "TestController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  

}());