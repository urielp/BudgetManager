'use strict';

describe('Service: outcomeIncomeService', function () {

  // load the service's module
  beforeEach(module('budgetManagerApp'));

  // instantiate service
  var outcomeIncomeService;
  beforeEach(inject(function (_outcomeIncomeService_) {
    outcomeIncomeService = _outcomeIncomeService_;
  }));

  it('should do something', function () {
    expect(!!outcomeIncomeService).toBe(true);
  });

});
