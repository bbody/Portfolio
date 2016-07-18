'use strict';

describe('Service: dataCacheService', function () {

  // load the service's module
  beforeEach(module('portfolioApp'));

  // instantiate service
  var dataCacheService;
  beforeEach(inject(function (_dataCacheService_) {
    dataCacheService = _dataCacheService_;
  }));

  it('should do something', function () {
    expect(!!dataCacheService).toBe(true);
  });

});
