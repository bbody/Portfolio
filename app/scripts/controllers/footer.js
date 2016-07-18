'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('FooterCtrl', 
		['$scope', '$translate', 'dataCacheService', 
		function($scope, $translate, dataCacheService) {
		
		$scope.technologies = [];

		dataCacheService.getTechnologies().then(function(data){
			$scope.technologies = data;
		});
	}]);