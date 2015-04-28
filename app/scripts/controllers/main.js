'use strict';

/**
 * @ngdoc function
 * @name intbassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intbassApp
 */
angular.module('intbassApp')
  .controller('broadcastController', function ($scope, $interval, $http) {
  var stop;
  if(!angular.isDefined(stop)) {
    var get = function() {
      var req = {
        method: 'JSONP',
        url: "http://intbass.com/api/station/intbass?callback=JSON_CALLBACK",
        headers: {
          'Accept': 'appliction/json'
        }
      };
      $http(req)
        .success(function(data, status, headers, config) {
          $scope.playing = data.playing;
          $scope.artist = data.artist;
          $scope.live = data.live;
          $scope.listeners = data.listeners;
      }).error(function(data, status, headers, config) {
          $scope.status = status;
      });
    };
    get();
    stop = $interval(get, 30000);
  }
});
