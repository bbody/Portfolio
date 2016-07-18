'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.titleService
 * @description
 * # titleService
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
  .service('titleService', function ($translate) {
    var functions = {
    	updateTitle: function(name, project){
		      $translate('GLOBAL.WEBSITE_TITLE', { name: name }).then(function(title){
		        document.title = project ? project + ' - ' + title : title;
		      });
		    }
    }
    return functions;
  });


