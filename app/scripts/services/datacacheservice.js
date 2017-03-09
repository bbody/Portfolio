'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.dataCacheService
 * @description
 * # dataCacheService
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
    .service('dataCacheService', ['$http', '$q', 'endPoints', function($http, $q, endPoints){
        var cache = {};
        var functions = {
            getInformation: function(){
                return this.getData('information');
            },
            getTechnologies: function(){
                return this.getData('technologies');
            },
            getPortfolio: function(){
                return this.getData('portfolio');
            },
            getPortfolioItem: function(projectId){
                var portfolioItem = null;
                var portfolio = cache.portfolio.projects;
                angular.forEach(portfolio, function(value, key){
                    if (value.stub === projectId){
                        portfolioItem = portfolio[key];
                    }
                });

                return portfolioItem;
            },
            getPortfolioTechnologies: function(){
                return this.getData('portfolio_technologies');
            },
            getData: function(type){
                var deferred = $q.defer();

                if (cache[type]){
                    deferred.resolve(cache[type]);
                } else {
                    $http.get(endPoints[type]).then(function(data){
                        cache[type] = data.data;
                        deferred.resolve(cache[type]);
                    });
                }
                return deferred.promise;
            }
        };

        return functions;
    }]);