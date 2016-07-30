'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('HeaderCtrl',['$scope', '$log', 'dataCacheService', function($scope, $log, dataCacheService){
		$scope.information = {};
		dataCacheService.getInformation().then(function(data){
			$scope.information = data.basics;
			$scope.location = {
				city: $scope.information.location.city,
				country: $scope.information.location.countryCode
			};
		});
	}]);