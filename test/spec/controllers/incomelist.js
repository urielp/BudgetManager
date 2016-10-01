'use strict';

describe('Controller: IncomelistCtrl', function () {

  // load the controller's module
  beforeEach(module('budgetManagerApp'));

  var IncomelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncomelistCtrl = $controller('IncomelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IncomelistCtrl.awesomeThings.length).toBe(3);
  });
});
