'use strict';

describe('Directive: portfolioCard', function () {

  // load the directive's module
  beforeEach(module('portfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<portfolio-card></portfolio-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the portfolioCard directive');
  }));
});
