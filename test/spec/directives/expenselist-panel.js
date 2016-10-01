'use strict';

describe('Directive: ExpenseListPanel', function () {

  // load the directive's module
  beforeEach(module('budgetManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-expense-list-panel></-expense-list-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ExpenseListPanel directive');
  }));
});
