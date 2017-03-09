'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:PortfolioItemCtrl
 * @description
 * # PortfolioItemCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('PortfolioItemCtrl', 
		['$scope', '$routeParams', '$translate', 'endPoints', 'titleService', 'dataCacheService', 
		function($scope, $routeParams, $translate, endPoints, titleService, dataCacheService) {
		// console.log(technologyItem);
		$scope.name = "";
		
		$scope.portfolioItem = {};
		$scope.screenshotTypes = 0;
		$scope.screenshots = {};
		

		$scope.selectScreenshotType = function(type){
			$scope.screenshots.selected = type;
		};

		$scope.isCurrentScreenshotType = function(type){
			return $scope.screenshots.selected === type;
		};

		$scope.multipleScreenshotTypes = function(){
			var types = 0;
			
			if ($scope.portfolioItem.screenshots.mobile.length > 0){
				$scope.screenshots.selected = 'mobile';
				types++;
			}

			if ($scope.portfolioItem.screenshots.tablet.length > 0){
				$scope.screenshots.selected = 'tablet';
				types++;
			}

			if ($scope.portfolioItem.screenshots.desktop.length > 0){
				$scope.screenshots.selected = 'desktop';
				types++;
			}

			return types;
		};

		dataCacheService.getPortfolio().then(function(data){
			$scope.portfolioItem = dataCacheService.getPortfolioItem($routeParams.item);
			$scope.screenshots = $scope.portfolioItem.screenshots;
			$scope.screenshots.selected = '';

			dataCacheService.getInformation().then(function(data){
				$scope.hasItem = !!$scope.portfolioItem;
				if ($scope.hasItem){
					titleService.updateTitle(data.basics.name, $scope.portfolioItem.title);
					$scope.screenshotTypes = $scope.multipleScreenshotTypes();
				} else {
					$translate("GLOBAL.NOT_FOUND").then(function(notFound){
						titleService.updateTitle(data.basics.name, notFound);
					});
				}
			});
		});
	}]);
