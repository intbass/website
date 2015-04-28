'use strict';

/**
 * @ngdoc overview
 * @name intbassApp
 * @description
 * # intbassApp
 *
 * Main module of the application.
 */
angular
  .module('intbassApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFitText'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'broadcastController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
