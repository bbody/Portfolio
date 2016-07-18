'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.titleService
 * @description
 * # titleService
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
  .constant("endPoints", {
    // "portfolio_technologies": "https://s3-ap-southeast-2.amazonaws.com/bbody/Details/portfolio_technologies.json",
    // "portfolio": "https://s3-ap-southeast-2.amazonaws.com/bbody/Details/portfolio.json",
    // "technologies":"https://s3-ap-southeast-2.amazonaws.com/bbody/Details/technologies.json",
    // "information": "https://s3-ap-southeast-2.amazonaws.com/bbody/Details/details.json",
    "portfolio_technologies": "responses/portfolio_technologies.json",
    "portfolio": "responses/portfolio.json",
    "technologies":"responses/technologies.json",
    "information": "responses/details.json"
  });
