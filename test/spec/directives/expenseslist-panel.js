'use strict';

describe('Directive: ExpensesListPanel', function () {

  // load the directive's module
  beforeEach(module('budgetManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-expenses-list-panel></-expenses-list-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ExpensesListPanel directive');
  }));
});
