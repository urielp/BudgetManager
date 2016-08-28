'use strict';

describe('Service: ExpensesListService', function () {

  // load the service's module
  beforeEach(module('budgetManagerApp'));

  // instantiate service
  var ExpensesListService;
  beforeEach(inject(function (_ExpensesListService_) {
    ExpensesListService = _ExpensesListService_;
  }));

  it('should do something', function () {
    expect(!!ExpensesListService).toBe(true);
  });

});
