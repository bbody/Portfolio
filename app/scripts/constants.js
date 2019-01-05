'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.titleService
 * @description
 * # titleService
 * Service in the portfolioApp.
 */
var addressRoot = location.hostname === 'localhost' ? './responses/' : 'https://s3-ap-southeast-2.amazonaws.com/bbody/Details/';

angular.module('portfolioApp')
  .constant('endPoints', {
    'portfolio_technologies': addressRoot  + 'portfolio_technologies.json',
    'portfolio': addressRoot  + 'portfolio.json',
    'technologies':addressRoot  + 'technologies.json',
    'information': addressRoot  + 'details.json'
  });
