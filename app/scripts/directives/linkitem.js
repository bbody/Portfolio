'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:linkItem
 * @description
 * # linkItem
 */
angular.module('portfolioApp')
	.directive('linkItem', function() {
	  return {
	    restrict: 'A',
	    scope: {
	      name: '@linkItem',
	      link: '@href',
	      type: '@'
	    },
	    link: function($scope){
	      var key = $scope.type.replace(/ /g, '_').toLowerCase();
	      $scope.class = "fa fa-home";
	      if(["github", "twitter"].indexOf(key) > -1){
	        $scope.class = "fa fa-" + key;
	      }
	    },
	    templateUrl: "views/partials/_item.html"
	  };
	});
