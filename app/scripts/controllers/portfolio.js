'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('PortfolioCtrl', 
		['$scope', '$log', '$location', '$document', '$rootScope', '$routeParams', 'endPoints', 'titleService', 'dataCacheService', 'filterProperty', 
		function($scope, $log, $location, $document, $rootScope, $routeParams, endPoints, titleService, dataCacheService, filterProperty){

		$scope.filter = '';
		$scope.portfolioItems = [];
		
		if ($routeParams.technology){
		    $scope.filter = $routeParams.technology;
		    filterProperty.setFilter($routeParams.technology);
		  }


		dataCacheService.getPortfolio().then(function(data){
			$scope.portfolioItems = data.projects;
		});

		dataCacheService.getInformation().then(function(data){
			$scope.name = data.basics.name;

			titleService.updateTitle($scope.name);	
		});
	}]);
