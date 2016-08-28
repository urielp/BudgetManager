'use strict';

describe('Directive: bumngExpensesListPanel', function () {

  // load the directive's module
  beforeEach(module('budgetManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bumng-expenses-list-panel></bumng-expenses-list-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bumngExpensesListPanel directive');
  }));
});
