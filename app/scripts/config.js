'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.titleService
 * @description
 * # titleService
 * Service in the portfolioApp.
 */
var isLocal = location.hostname === 'localhost';
var addressRoot = isLocal ? './responses/' : 'https://s3-ap-southeast-2.amazonaws.com/bbody/Details/';
angular.module('portfolioApp')
	.config(
		['$compileProvider', '$locationProvider', '$routeProvider', '$translateProvider', 
		function($compileProvider, $locationProvider, $routeProvider, $translateProvider) {
	  	// Setup Translation Services
	    $translateProvider.useStaticFilesLoader({
	      	prefix: addressRoot + 'locale/locale-',
	      	suffix: '.json'
	  	});
	  	$translateProvider.preferredLanguage('en');
	    $translateProvider.useSanitizeValueStrategy('escape');
	    $translateProvider.fallbackLanguage('en');
	    $locationProvider.hashPrefix('');

	    // Set up routes
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

	      // For production, turn off debugging
	      $compileProvider.debugInfoEnabled(isLocal);
	  }]);