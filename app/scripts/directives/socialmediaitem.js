'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:socialMediaItem
 * @description
 * # socialMediaItem
 */
angular.module('portfolioApp')
  .directive('socialMediaItem', function () {
	  return {
	  	restrict: 'A',
	  	scope: {
	  		link: '@href',
	  		network: '@socialMediaItem'
	  	},
	  	link: function ($scope) {
	  		var key = $scope.network.replace(/ /g, '-').toLowerCase();
	  		$scope.iconClass = 'fa fa-globe';
			if (['bitbucket', 'github', 'twitter', 'stack-overflow', 'linkedin', 'hacker-news'].indexOf(key) >= 0){
				$scope.iconClass = 'fab fa-' + key;
			} else if (key === 'email'){
				$scope.iconClass = 'fa fa-at';
			}
	    },
	    template: '' +
			'<a href="{{link}}" class="btn btn-default" alt="{{network}}">' +
			'	<i class="{{iconClass}}" aria-hidden="true"></i>' +
			'	<span class="sr-only">{{network}}{{\'\' | translate}}</span>' +
			'</a>'
	  };
	});
