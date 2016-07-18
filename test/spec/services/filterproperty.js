'use strict';

describe('Service: filterProperty', function () {

  // load the service's module
  beforeEach(module('portfolioApp'));

  // instantiate service
  var filterProperty;
  beforeEach(inject(function (_filterProperty_) {
    filterProperty = _filterProperty_;
  }));

  it('should do something', function () {
    expect(!!filterProperty).toBe(true);
  });

});
