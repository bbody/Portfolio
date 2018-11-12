'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:portfolioCard
 * @description
 * # portfolioCard
 */
angular.module('portfolioApp')
	.directive('portfolioCard', ['$translate', function($translate) {
	  return {
	    restrict: 'A',
	    scope: {
	      item: '=portfolioCard',
	      filter: '='
	    },
	    link: function($scope){
	      // Get first desktop image
	      $scope.imageUrl = $scope.item.screenshots.desktop[0].url;
	      $scope.technologies = $scope.item.technologies;
	      
	      $scope.style = '';

	      if ($scope.item.screenshots.desktop[0].colorPrimary){
	      	$scope.style = 'background-color: ' + $scope.item.screenshots.desktop[0].colorPrimary;
	      }

	      $translate('GLOBAL.ALL_ITEMS').then(function(allItems){
	        $scope.display = !$scope.filter || ($scope.filter === allItems || $scope.technologies.indexOf($scope.filter) >= 0) ? true : false;
	      });
	      
	    },
	    templateUrl: 'views/partials/_portfolioCard.html'
	  };
	}]);