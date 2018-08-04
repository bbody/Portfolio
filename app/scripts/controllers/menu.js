'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('MenuCtrl',
		['$scope', '$rootScope', '$log', 'endPoints', 'dataCacheService', '$location',
		function($scope, $rootScope, $log, endPoints, dataCacheService, $location){
		
		$scope.name = '';
		
		dataCacheService.getInformation().then(function(data){
			$scope.name = data.basics.name;
		});

		$scope.technologies = [];

		dataCacheService.getPortfolioTechnologies().then(function(data){
			$scope.technologies = data.technologies;
		});

		$scope.isDefaultPage = function(){
			return $location.path() === '/';
		};

		$scope.isCurrentTechnology = function(filter){
			return $location.path() === '/technology/' + filter;
		};
	}]);