'use strict';

describe('Controller: PortfolioItemCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var PortfolioItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioItemCtrl = $controller('PortfolioItemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PortfolioItemCtrl.awesomeThings.length).toBe(3);
  });
});
