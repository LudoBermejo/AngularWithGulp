(function () {

'use strict';


  angular.module('boilerApp', ['ngRoute', 'sampleModule'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./modules/sample/views/template.html",
          controller: "SampleController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  

}());