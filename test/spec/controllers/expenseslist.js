'use strict';

describe('Controller: ExpenseslistCtrl', function () {

  // load the controller's module
  beforeEach(module('budgetManagerApp'));

  var ExpenseslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenseslistCtrl = $controller('ExpenseslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpenseslistCtrl.awesomeThings.length).toBe(3);
  });
});
