'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.filterProperty
 * @description
 * # filterProperty
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
	.service('filterProperty', function () {
        var filter = 'All';

        return {
            getFilter: function () {
                return filter;
            },
            setFilter: function(value) {
                filter = value;
            }
        };
    });