'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.titleService
 * @description
 * # titleService
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
	.config(
		['$locationProvider', '$routeProvider', '$translateProvider', 
		function($locationProvider, $routeProvider, $translateProvider) {
	  	// Setup Translation Services
	    $translateProvider.useStaticFilesLoader({
	      	prefix: 'https://s3-ap-southeast-2.amazonaws.com/bbody/Details/locale/locale-',
	      	suffix: '.json'
	  	});
	  	$translateProvider.preferredLanguage('en');
	    $translateProvider.useSanitizeValueStrategy('escape');
	    $translateProvider.fallbackLanguage('en');

	    // Set up routes
	  	$locationProvider.hashPrefix('!');
	  	$routeProvider
	      .when('/', {
	        templateUrl: 'views/portfolio.html',
	        controller: 'PortfolioCtrl'
	      })
	      .when('/technology/:technology', {
	        templateUrl: 'views/portfolio.html',
	        controller: 'PortfolioCtrl'
	      })
	      .when('/portfolio/:item', {
	        templateUrl: 'views/portfolio-item.html',
	        controller: 'PortfolioItemCtrl'
	      })
	      .otherwise({
	        redirectTo: '/'
	      });
	  }]);