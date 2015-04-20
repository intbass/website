'use strict';

/**
 * @ngdoc function
 * @name intbassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intbassApp
 */
angular.module('intbassApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
