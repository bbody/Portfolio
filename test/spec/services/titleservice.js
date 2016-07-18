'use strict';

describe('Service: titleService', function () {

  // load the service's module
  beforeEach(module('portfolioApp'));

  // instantiate service
  var titleService;
  beforeEach(inject(function (_titleService_) {
    titleService = _titleService_;
  }));

  it('should do something', function () {
    expect(!!titleService).toBe(true);
  });

});
